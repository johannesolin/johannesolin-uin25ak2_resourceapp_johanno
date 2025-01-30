import navStyle from "./nav.module.css";
import { useState } from "react";
import { resources } from "../../../ressurser";
import { Content } from "./content";
export const Nav = () => {
  const [content, setContent] = useState(null);
  const handleOnClick = (resource) => {
    setContent(resource);
    console.log(resource);
  };
  return (
    <nav>
      <ul>
        {resources.map((resource, index) => {
          return (
            <li
              className={
                content && content.category === resource.category
                  ? `${navStyle.active}`
                  : ""
              }
              onClick={() => handleOnClick(resource)}
              key={index}
            >
              {resource.category}
            </li>
          );
        })}
      </ul>
      {content && <Content resource={content} />}
    </nav>
  );
};

