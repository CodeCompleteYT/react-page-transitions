import "./Body.css";

export const Body = ({ children, delay = 0 }) => {
  return (
    <div className="body-container">
      <p>{children}</p>
    </div>
  );
};
