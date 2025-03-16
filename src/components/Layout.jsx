import React from "react";

// Denne komponenten fungerer som en overordnet beholder for hele siden.
function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Ressurser</h1>
      </header>

      <main>{children}</main>

      <footer>
        <p>© 2025 Johannes Olin</p>
      </footer>
    </>
  );
}

// Gjør komponenten tilgjengelig for bruk i andre filer ved å eksportere den.
export default Layout;
