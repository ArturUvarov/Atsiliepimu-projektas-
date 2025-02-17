const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});

process.on("SIGINT", () => {
  console.log("SIGINT signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
    process.exit(0);
  });
});

app.get("/", (req, res) => {
  res.json({ message: "API is working!" });
});
