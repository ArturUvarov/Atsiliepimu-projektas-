import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config(); // Load API key from .env file

const router = express.Router();

// Initialize OpenAI API
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Store in environment variable
});

console.log("OpenAI API key:", process.env.OPENAI_API_KEY);

router.get("/chat", (req, res) => {
  res.json({ message: "Chat route is working!" });
});

// Endpoint to handle chat requests
router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    console.log("OpenAI response:", message);

    const response = await openai.chat.completions.create({
      model: "gpt-4o", // or "gpt-3.5-turbo"
      messages: [{ role: "user", content: message }],
    });
    console.log("OpenAI response:", response);
    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
