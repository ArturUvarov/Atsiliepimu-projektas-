<h1 align="center">
  <br>
<a href="https://ibb.co/HLrCWW5S"><img src="https://i.ibb.co/HLrCWW5S/Chat-GPT-Image-Apr-30-2025-01-55-18-PM-modified.png" alt="logo" border="0"></a>
  <br>
  Atsiliepimų projektas
  <br>
</h1>

<h4 align="center">Pilno funkcionalumo projektas, skirtas atsiliepimų valdymui ir rodymui, sukurtas su React.</h4>

<p align="center">
  <a href="#pagrindinės-funkcijos">Pagrindinės Funkcijos</a> •
  <a href="#kaip-naudoti">Kaip Naudoti</a> •
  <a href="#atsisiųsti">Atsisiųsti</a> •
  <a href="#kreditai">Kreditai</a> •
  <a href="#susiję">Susiję</a> •
  <a href="#licencija">Licencija</a>
</p>

## Technologijos

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Drizzle ORM](https://img.shields.io/badge/Drizzle%20ORM-2B90B6?style=for-the-badge&logo=drizzle&logoColor=white)

## Reikalavimai

Prieš pradėdami, įsitikinkite, kad turite įdiegtą:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Node.js](https://nodejs.org/) (rekomenduojama LTS versija)

## Pradžia

### 1️⃣ Klonuoti Projektą

```bash
# Naudojant HTTPS
git clone https://github.com/ArturUvarov/Atsiliepimu-projektas-.git

# Naudojant SSH
git clone git@github.com:ArturUvarov/Atsiliepimu-projektas-.git
```

### 2️⃣ Paleisti Aplikaciją

Paleiskite visas paslaugas naudodami Docker Compose:

```bash
docker compose up
```

Aplikacija bus pasiekiama adresais:

- Priekinis puslapis: http://localhost:8080
- Serverio dalis: http://localhost:3000

### 3️⃣ Užpildyti Duomenų Bazę

Kai konteineriai bus paleisti:

```bash
# Įvykdykite duomenų bazės užpildymo komandą API konteineryje
npm run drizzle:seed
```

### 4️⃣ Sukurti Vartotoją

Būsite nukreipti į:

```bash
http://localhost:8080/auth/sign-up
```

## 📜 Licencija

Šis projektas yra licencijuotas pagal MIT Licenciją - daugiau informacijos rasite [LICENSE](LICENSE) faile.
