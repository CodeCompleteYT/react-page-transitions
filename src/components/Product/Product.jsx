import "./Product.css";

export const Product = ({ src, alt, title, description, delay }) => {
  return (
    <div className="product">
      <img src={src} alt={alt} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
