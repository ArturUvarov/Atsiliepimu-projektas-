# Atsiliepimu projektas

Tai yra 3-jų menesių full-stack projektas

## 🚀 Pagrindinė dalis

- **Frontend**: React + Tailwindcss
- **Backend**: Express.js + Node.js + API
- **Container**: Docker
- **Database**: MySQL, Drizzle ORM

## 🛠️ Būtinos sąlygos

- Jūsų kompiuteryje įdiegtas „Docker desktop“ programa
- Node.js
- npm paketo tvarkyklė

## 🚦 Darbo pradžia

1. Klonuoti "Github" saugyklą:
```bash
ssh versia:

git clone <git@github.com:ArturUvarov/Atsiliepimu-projektas-.git>

https versia:

git clone <https://github.com/ArturUvarov/Atsiliepimu-projektas-.git>
```

2. Paleiskite programą naudodami „Docker compose.yaml faila“:
```bash
docker-compose up 
```

Svetainę bus galima rasti adresu:
- http://localhost/8080


3. Dirbtinių duomenų užpildymas:

Paleidus programą, reikia atsidaryti Docker Desktop esančią api konteinerio dalį, nueiti į Exec tab'ą ir parašyti komandą:
```bash
npm run drizzle:seed
```


## 🤖 Diegimo procesas

1. Įveskite į katalogą
```bash
cd path/to/your/catalogue
```

2. Įdiegti paketus
```bash
npm install
```

3. Paleiskite serverį:
```bash
npm run dev
```

## Viskas!


## 📜 Licencija

This project is licensed under the MIT License - see the LICENSE file for details.
