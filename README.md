<h1 align="center">
  <br>
<a href="https://ibb.co/0HskDyS"><img src="https://i.ibb.co/qTJzyYf/Chat-GPT-Image-Apr-30-2025-01-55-18-PM-modified.png" alt="Chat-GPT-Image-Apr-30-2025-01-55-18-PM-modified" border="0"></a>
<br>
  Atsilepimo projektas
  <br>
</h1>

<h4 align="center">Full-stack project for managing and displaying reviews based on React.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

<h1 align="center"><a href="https://ibb.co/8gtT8VqG"><img src="https://i.ibb.co/F4CN7t2c/Screenshot-from-2025-04-30-14-06-04.png" alt="Screenshot-from-2025-04-30-14-06-04" border="0"></a></h1>

## Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)

- Drizzle ORM

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)

## Getting Started

### 1️⃣ Clone the Repository

```bash
# Using HTTPS
git clone https://github.com/ArturUvarov/Atsiliepimu-projektas-.git

# Using SSH
git clone git@github.com:ArturUvarov/Atsiliepimu-projektas-.git
```

### 2️⃣ Launch the Application

Start all services using Docker Compose:

```bash
docker compose up
```

The application will be available at:

- Frontend: http://localhost:8080
- Backend: http://localhost:3000

### 3️⃣ Seed the Database

After the containers are running:

```bash
# Execute the seed command in the API container
npm run drizzle:seed
```

### 4️⃣ Create a user

You will be redirected to

```bash
http://localhost:8080/auth/sign-up
```

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
