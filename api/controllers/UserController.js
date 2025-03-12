const UserModel = require("../models/UserModel");
const { body, validationResult, matchedData } = require("express-validator");
const bcrypt = require("bcrypt");

/**
 * CRUD resurso valdymas
 * CREATE
 * create()   - /users/create/    - GET       - vartotojo sukūrimo forma (nėra API)
 * store()    - /users/           - POST      - sukuria naują vartotoją
 * READ
 * index()    - /users/           - GET       - visų vartotojų sąrašas
 * show(id)   - /users/:id        - GET       - vieno vartotojo informacija
 * UPDATE
 * edit(id)   - /users/:id/edit/  - GET       - vieno vartotojo redagavimo forma (nėra API)
 * update(id) - /users/:id        - PUT/PATCH - vieno vartotojo duomenų atnaujinimas
 * DELETE
 * destroy(id)- /users/:id        - DELETE    - vieno vartotojo ištrynimas
 */

// duomenų vienkartinis paėmimas iš sesijos ir pratrynimas
const getSessionData = (req) => {
  // surenkame pranešimus
  let messages = [];
  if (req.session.messages) {
    messages = req.session.messages;
    delete req.session.messages;
  }

  // surenkame senus formos duomenis
  let old = {};
  if (req.session.old) {
    old = req.session.old;
    delete req.session.old;
  }

  return [messages, old];
};

const addSessionMessage = (req, message, type = "success") => {
  if (!req.session.messages) {
    req.session.messages = [];
  }

  req.session.messages.push({
    msg: message,
    type: type,
  });
};

const addSessionErrors = (req, errors) => {
  for (let error of errors) {
    addSessionMessage(req, error.msg, "danger");
  }
};

// vartotojų sąrašo valdiklis (kontroleris)
module.exports.index = async function (req, res, next) {
  // nuskaitome sesijos duomenis
  const [messages] = getSessionData(req);

  // gaumane visus vartotojus iš modelio
  const users = await UserModel.getAll();

  // sugeneruojame html ir išsiunčiame
  res.render("users/index", {
    users: users,
    title: "Vartotojų sąrašas",
    auth_user: req.session.user,
    main_url: "/users",
    messages: messages,
  });
};

module.exports.show = async (req, res, next) => {
  // nuskaitome sesijos duomenis
  const [messages] = getSessionData(req);

  const user = await UserModel.getById(req.params.id);

  if (user) {
    res.render("users/show", {
      user_data: user,
      title: user.email + " puslapis",
      auth_user: req.session.user,
      main_url: "/users",
      messages: messages,
    });
  } else {
    res.status(404).send("Vartotojo nėra");
  }
};

// naujo vartotojo sukūrimo formos puslapio kontroleris
module.exports.create = async (req, res, next) => {
  // nuskaitome sesijos duomenis
  const [messages, old] = getSessionData(req);

  res.render("users/create", {
    title: "Pridėti naują vatotoją",
    auth_user: req.session.user,
    main_url: "/users",
    messages: messages,
    old: old,
  });
};

module.exports.validateStore = () => [
  body("email")
    .trim()
    .notEmpty()
    .escape()
    .isEmail()
    .withMessage("Neteisingas vartotjo el. pašto adresas"),
  body("password")
    .trim()
    .notEmpty()
    .escape()
    .withMessage("Neteisingas slaptažodis"),
  body("passwordRepeat")
    .trim()
    .notEmpty()
    .escape()
    .withMessage("Neteisingas slaptažodis"),
];

module.exports.store = async (req, res, next) => {
  // iš užklausos surenkame ir validuojame duomenis
  const validation = validationResult(req);

  // klaidos validuojant duomenis
  if (!validation.isEmpty()) {
    // klaidas talpiname į sesiją
    // req.session.errors = validation.errors;
    addSessionErrors(req, validation.errors);

    // formos duomenis talpiname į sesiją
    req.session.old = matchedData(req);

    // kai yra validacijos klaidų
    return res.redirect("/users/create");
  }

  // gauname validuotus duomenis
  const data = matchedData(req);

  // tikriname ar laisvas el. paštas
  const user = await UserModel.getByEmail(data.email);
  if (user) {
    // linkas jau egzistuoja
    addSessionMessage(req, "Toks el. pašto adresas jau egzistuoja", "danger");

    // formos duomenis talpiname į sesiją
    req.session.old = matchedData(req);

    // kai yra validacijos klaidų
    return res.redirect("/users/create");
  }

  // tinkriname ar slaptazodziai sutampa
  // šią dalį galima perkelti į validaciją
  if (data.password != data.passwordRepeat) {
    // linkas jau egzistuoja
    addSessionMessage(req, "Slaptažodžiai nesutampa", "danger");

    // formos duomenis talpiname į sesiją
    req.session.old = matchedData(req);

    // kai yra validacijos klaidų
    return res.redirect("/users/create");
  }
  delete data.passwordRepeat;

  // šifruojame slaptažodį
  data.password = await bcrypt.hash(data.password, 10);

  // siunčiame į DB per modelį
  const result = await UserModel.insert(data);
  if (!result) {
    // nepavyko įterpti
    addSessionMessage(req, "Sukurti vartotojo nepavyko", "danger");

    // formos duomenis talpiname į sesiją
    req.session.old = matchedData(req);

    return res.redirect("/users/create");
  }

  // jei viskas buvo ok
  addSessionMessage(req, "Sukurtas naujas vartotojas");
  res.redirect("/users");
};

// vartotojo informacijos keitimo formos puslapio kontroleris
module.exports.edit = async (req, res, next) => {
  // nuskaitome sesijos duomenis
  const [messages, old] = getSessionData(req);

  const user = await UserModel.getById(req.params.id);

  if (user) {
    res.render("users/edit", {
      user_data: user,
      title: user.email + " kliento redagavimas",
      auth_user: req.session.user,
      main_url: "/users",
      messages: messages,
      old: old,
    });
  } else {
    res.status(404).send("Vartotojo nėra");
  }
};

module.exports.validateUpdate = () => [
  body("email")
    .trim()
    .notEmpty()
    .escape()
    .isEmail()
    .withMessage("Neteisingas vartotjo el. pašto adresas"),
  body("password")
    .trim()
    .optional()
    .escape(),
  body("passwordRepeat")
    .trim()
    .optional()
    .escape(),
  body("status")
    .trim()
    .escape()
    .isInt()
    .withMessage("Būsenos numeris privalomas"),
  body("role")
    .trim()
    .escape()
    .isInt()
    .withMessage("Rolės numeris privalomas"),
];

// vartotojo informacijos keitimo formos apdorojimo kontroleris
module.exports.update = async (req, res, next) => {
  const user = await UserModel.getById(req.params.id);
  // jei vartotojo nėra DB
  if (!user) {
    return res.status(404).send("Vartotojo nėra");
  }
  // validacija
  // iš užklausos surenkame ir validuojame duomenis
  const validation = validationResult(req);
  // klaidos validuojant duomenis
  if (!validation.isEmpty()) {
    // klaidas talpiname į sesiją
    addSessionErrors(req, validation.errors);
    // formos duomenis talpiname į sesiją
    req.session.old = matchedData(req);
    // kai yra validacijos klaidų
    return res.redirect("/users/" + req.params.id + "/edit");
  }
  // gauname validuotus duomenis
  const data = matchedData(req);
  // tikriname el. paštą
  const user_for_email = await UserModel.getByEmail(data.email);
  if (user_for_email && user_for_email.email != user.email) {
    // klaidas talpiname į sesiją
    addSessionMessage(req, "Toks el. paštas jau egzistuoja", "danger");
    // formos duomenis talpiname į sesiją
    req.session.old = matchedData(req);
    return res.redirect("/users/" + req.params.id + "/edit");
  }
  // console.log(data);

  // slaptažodžių keitimas, jei gautas 
  // tinkriname ar slaptazodziai sutampa
  if (data.password && data.password != data.passwordRepeat) {
    // linkas jau egzistuoja
    addSessionMessage(req, "Slaptažodžiai nesutampa", "danger");

    // formos duomenis talpiname į sesiją
    req.session.old = matchedData(req);

    // kai yra validacijos klaidų
    return res.redirect("/users/" + req.params.id + "/edit");
  } else if (data.password) {
    delete data.passwordRepeat;
    
    // šifruojame slaptažodį
    data.password = await bcrypt.hash(data.password, 10);
  } else {
    // pašaliname slaptažodių parametrus, jei buvo tušti
    delete data.passwordRepeat;
    delete data.password;
  }

  // siunčiame į DB per modelį
  const result = await UserModel.update(data, user.id);
  if (!result) {
    // klaidas talpiname į sesiją
    addSessionMessage(req, "Informacijos atnaujinti nepavyko", "danger");
    // formos duomenis talpiname į sesiją
    req.session.old = matchedData(req);
    return res.redirect("/users/" + req.params.id + "/edit");
  }
  addSessionMessage(req, "Vartotojo duomenys atnaujinti sėkmingai");
  res.redirect("/users/" + req.params.id);
};

// vartotojo trynimo kontroleris
module.exports.destroy = async (req, res, next) => {
  const user = await UserModel.getById(req.params.id);
  if (user) {
    // triname DB per modelį
    const result = await UserModel.delete(user.id);
    // jei pavyko ištrinti, peradresuojame į vartotojų sąrašą
    addSessionMessage(req, "Vartotojas ištrintas iš sistemos");
    res.redirect("/users/");
  } else {
    res.status(404).send("Vartotojo nėra");
  }
};
