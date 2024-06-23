import './Product.css';

export const Product = ({ product }) => {
    return (
      <div className="card">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price} Kč</p>
        <img src={product.image} alt={product.name} />
        <button><a href={`detail.html?id=${product.id}`}>Zobrazit detail</a></button>
      </div>
    );
};