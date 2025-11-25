import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

require('dotenv').config();

const API_KEY = "process.env.API_KEY";

app.post("/generate", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
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
    const recipeText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Could not generate recipe.";

    res.json({ text: recipeText });

  } catch (err) {
    console.error(err);
    res.json({ text: "Server error while generating recipe." });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
