import React from "react";

export default function App() {
  return (
    <main style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      padding: "40px",
      background: "#f1f5f9",
      minHeight: "100vh",
      fontFamily: "sans-serif"
    }}>
      {[
        "📋 Auftragsplanung",
        "📦 Lager",
        "📊 Statistik",
        "📁 Dokumente",
        "🔧 Einstellungen"
      ].map((title, i) => (
        <div key={i} style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "16px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          textAlign: "center"
        }}>
          <h2 style={{ fontSize: "18px", marginBottom: "12px" }}>{title}</h2>
          <button
            style={{
              backgroundColor: "#2563eb",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
            onClick={() => alert(`Modul geöffnet: ${title}`)}
          >
            Öffnen
          </button>
        </div>
      ))}
    </main>
  );
}
