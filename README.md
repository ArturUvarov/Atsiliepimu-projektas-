<h1 align="center">
  <br>
  <img src="https://ibb.co/fdbSKk61" alt="atsilepimo_projektas" width="200">
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

! [demo] (https://ibb.co/8gtT8VqG)

## Tech Stack

- **Frontend**:
  - React
  - TailwindCSS
  - Material-Tailwind
- **Backend**:
  - Express.js
  - Node.js
- **Database**:
  - MySQL
  - Drizzle ORM
- **Containerization**:
  - Docker

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

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
