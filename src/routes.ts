import { Router } from "express";
import axios from "axios";

export const summaryRouter = Router();

summaryRouter.post("/", async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({
      error: "El campo 'text' es requerido.",
    });
  }

  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant", // MODELO CORRECTO Y ACTUAL
        messages: [
          {
            role: "user",
            content: `Resume claramente este texto:\n\n${text}`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const summary = response.data.choices[0].message.content;
    return res.json({ summary });
  } catch (error: any) {
    console.error(error.response?.data || error);
    return res.status(500).json({
      error: "Error con el servidor o la IA.",
    });
  }
});
