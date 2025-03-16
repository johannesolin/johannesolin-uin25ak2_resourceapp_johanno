import React from "react";
import resources from "../ressurser"; // Henter konstanten "resources" fra ressurser.js-filen.

function Resources({ category }) {
  // Filtrerer ressurser basert på valgt kategori.
  const filteredResources = resources.filter(
    (resource) => resource.category === category
  );

  return (
    <section className="resources">
      <h2>{category.toUpperCase()}</h2>{" "}
      {/* Viser kategorinavnet i store bokstaver. */}
      {/* Gir en beskrivelse av hver kategori. */}
      {category === "html" && (
        <p>
          HTML (HyperText Markup Language) er et strukturspråk som brukes til å
          bygge opp nettsider og applikasjonsgrensesnitt.
        </p>
      )}
      {category === "css" && (
        <p>
          CSS (Cascading Style Sheets) brukes til å definere stilregler for
          HTML-elementer og gir nettsider et visuelt uttrykk.
        </p>
      )}
      {category === "javascript" && (
        <p>
          JavaScript er et programmeringsspråk basert på EcmaScript. Det kjøres
          direkte i nettleseren og brukes ofte til å manipulere HTML og CSS for
          å skape interaktive grensesnitt.
        </p>
      )}
      {category === "react" && (
        <p>
          React er et JavaScript-bibliotek for å bygge brukergrensesnitt. Det
          benytter komponenter og state for å skape dynamiske webapplikasjoner.
        </p>
      )}
      {category === "headless-cms" && (
        <p>
          Sanity er et headless CMS (Content Management System) som gir
          fleksibilitet til å administrere innhold via Sanity Studio, en åpen
          kildekode-plattform.
        </p>
      )}
      {/* Viser en liste over relevante ressurser for den valgte kategorien. */}
      <ul className="resources-list">
        {filteredResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Gjør komponenten tilgjengelig for bruk i andre filer.
export default Resources;
