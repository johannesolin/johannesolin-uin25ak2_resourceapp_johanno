import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Nav from "./components/Nav"; // Importerer navigasjonskomponenten.
import Resources from "./components/Resources"; // Importerer ressurskomponenten.
import Layout from "./components/Layout"; // Importerer Layout-komponenten for sidens struktur.

function App() {
  return (
    <Router>
      {" "}
      {/* Router håndterer navigasjonen i applikasjonen. */}
      <Layout>
        {" "}
        {/* Bruker Layout-komponenten for å organisere sidens oppsett. */}
        <Nav /> {/* Viser navigasjonsmenyen. */}
        <Routes>
          {" "}
          {/* Definerer ulike ruter for applikasjonen. */}
          <Route path="/" element={<Navigate to="/html" />} />
          {/* Hvis brukeren går til rot-URL ("/"), blir de automatisk omdirigert til "/html". */}
          {/* Oppretter en rute for hver kategori. */}
          <Route path="/html" element={<Resources category="html" />} />
          <Route path="/css" element={<Resources category="css" />} />
          <Route
            path="/javascript"
            element={<Resources category="javascript" />}
          />
          <Route path="/react" element={<Resources category="react" />} />
          <Route
            path="/sanity"
            element={<Resources category="headless-cms" />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

// Eksporterer App-komponenten slik at den kan brukes andre steder.
export default App;
