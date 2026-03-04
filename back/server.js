import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import 'dotenv/config.js';

const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = process.env.API_KEY;

app.post("/generate", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": API_KEY
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    const data = await response.json();
    
    
    const recipeText = data.candidates?.[0]?.content?.parts?.[0]?.text 
      || "I'm sorry, I couldn't generate that recipe. Please try another dish.";

    res.json({ text: recipeText });

  } catch (err) {
    console.error("API Error:", err);
    res.status(500).json({ text: "Server error. Please check your API key and connection." });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(` Modern Recipe Server at http://localhost:${PORT}`));


