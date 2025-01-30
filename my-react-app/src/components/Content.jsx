import contentStyle from "./Content.module.css";
export const Content = (props) => {
  return (
    <>
      <main className={contentStyle.main}>
        <p className={contentStyle.header}>{props.resource.category}</p>
        <p>{props.resource.text}</p>
        <ul className={contentStyle.ul}>
          {props.resource.sources.map((item, index) => (
            <li className={contentStyle.li} key={index}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};
