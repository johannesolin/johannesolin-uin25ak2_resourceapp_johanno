import navStyle from "./nav.module.css";
import { useState } from "react";
import { resources } from "../../../ressurser";
import { Content } from "./Content";

export const Nav = () => {
  const [content, setContent] = useState(
    resources.length > 0 ? resources[0] : null
  );

  const handleOnClick = (resource) => {
    setContent(resource);
  };

  return (
    <nav>
      <ul className={navStyle.ul}>
        {resources.map((resource, index) => (
          <li
            className={`${
              content && content.category === resource.category
                ? navStyle.active
                : ""
            } ${navStyle.li}`}
            onClick={() => handleOnClick(resource)}
            key={index}
          >
            {resource.category}
          </li>
        ))}
      </ul>
      {content && <Content resource={content} />}
    </nav>
  );
};
