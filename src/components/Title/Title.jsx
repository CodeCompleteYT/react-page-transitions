import "./Title.css";

export const Title = ({ children, delay = 0 }) => {
  return (
    <div className="title-container">
      <h1>{children}</h1>
    </div>
  );
};
