import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setSummary("");

    try {
      const res = await fetch("http://localhost:3001/summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();
      setSummary(data.summary || "No se pudo generar resumen");
    } catch (err) {
      setSummary("Error al conectar con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">Resumidor de Texto (IA)</h1>

      <div className="card-container">
        <textarea
          className="input-area"
          placeholder="Pega el texto aquí..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          className="btn"
          onClick={handleSummarize}
          disabled={loading}
        >
          {loading ? "Resumiendo..." : "Resumir"}
        </button>

        {summary && (
          <div className="summary-box">
            <h3>Resumen</h3>
            <p>{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
