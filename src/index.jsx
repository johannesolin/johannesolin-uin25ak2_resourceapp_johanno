import React from "react"; // Importerer React for å kunne bruke React-funksjonalitet.
import ReactDOM from "react-dom/client"; // Importerer ReactDOM-biblioteket for å håndtere DOM-operasjoner i React-applikasjonen.
import App from "./App"; // Importerer App-komponenten, som er hovedkomponenten i prosjektet.
import "./styles/main.scss"; // Importerer hovedstilen fra "styles"-mappen.

// Oppretter en root i DOM-en på elementet med id "root".
// Rendrer React-applikasjonen i Strict Mode for å sikre god praksis og fange opp potensielle problemer.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
