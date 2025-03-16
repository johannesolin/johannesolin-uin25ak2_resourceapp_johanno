import React from "react";
import { Link, useLocation } from "react-router-dom";

// Denne komponenten styrer navigasjonen i applikasjonen.
function Nav() {
  const location = useLocation(); // Henter gjeldende URL.

  return (
    <nav>
      <ul>
        <li className={location.pathname === "/html" ? "active" : ""}>
          <Link to="/html">HTML</Link>
        </li>
        <li className={location.pathname === "/css" ? "active" : ""}>
          <Link to="/css">CSS</Link>
        </li>
        <li className={location.pathname === "/javascript" ? "active" : ""}>
          <Link to="/javascript">JavaScript</Link>
        </li>
        <li className={location.pathname === "/react" ? "active" : ""}>
          <Link to="/react">React</Link>
        </li>
        <li className={location.pathname === "/sanity" ? "active" : ""}>
          <Link to="/sanity">Sanity and headless CMS</Link>
        </li>
      </ul>
    </nav>
  );
}

// Eksporterer Nav-komponenten for bruk i andre filer.
export default Nav;
