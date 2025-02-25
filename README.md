# Review Management System

A 3-month full-stack project for managing and displaying reviews.

## 🚀 Tech Stack

- **Frontend**: 
  - React
  - TailwindCSS
- **Backend**: 
  - Express.js
  - Node.js
  - RESTful API
- **Database**: 
  - MySQL
  - Drizzle ORM
- **Containerization**: 
  - Docker

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
# Using HTTPS
git clone https://github.com/ArturUvarov/Atsiliepimu-projektas-.git

# Using SSH
git clone git@github.com:ArturUvarov/Atsiliepimu-projektas-.git
```

### 2. Launch the Application

Start all services using Docker Compose:

```bash
docker-compose up
```

The application will be available at:
- Frontend: http://localhost:8080

### 3. Seed the Database

After the containers are running:
1. Open Docker Desktop
2. Locate the API container
3. Go to the 'Exec' tab
4. Run the following command:

```bash
npm run drizzle:seed
```

## 💻 Local Development

1. Navigate to the project directory:
```bash
cd Atsiliepimu-projektas-
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🔧 Configuration

The project uses the following ports:
- Frontend: 8080
- Backend API: 3000
- MySQL: 3306

## 🧪 Testing

```bash
npm run test
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Artūr Uvarov - [GitHub](https://github.com/ArturUvarov)

Project Link: [https://github.com/ArturUvarov/Atsiliepimu-projektas-](https://github.com/ArturUvarov/Atsiliepimu-projektas-)
