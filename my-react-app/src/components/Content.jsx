import navStyle from "./Content.module.css";
export const Content = (props) => {
  return (
    <>
      <main>
        <p>{props.resource.category}</p>
        <p>{props.resource.text}</p>
        
      </main>
    </>
  );
};