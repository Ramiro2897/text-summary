import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { summaryRouter } from "./routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/summary", summaryRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor listo en http://localhost:${PORT}`);
});
