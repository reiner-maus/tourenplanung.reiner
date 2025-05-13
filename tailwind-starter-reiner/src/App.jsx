// Hauptdatei: src/App.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 min-h-screen">
      <Card>
        <CardContent className="p-6 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">📋 Auftragsplanung</h2>
          <Button onClick={() => alert("Modul geöffnet: Auftragsplanung")}>Öffnen</Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">📦 Lager</h2>
          <Button onClick={() => alert("Modul geöffnet: Lager")}>Öffnen</Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">📊 Statistik</h2>
          <Button onClick={() => alert("Modul geöffnet: Statistik")}>Öffnen</Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">📁 Dokumente</h2>
          <Button onClick={() => alert("Modul geöffnet: Dokumente")}>Öffnen</Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">🔧 Einstellungen</h2>
          <Button onClick={() => alert("Modul geöffnet: Einstellungen")}>Öffnen</Button>
        </CardContent>
      </Card>
    </main>
  );
}
