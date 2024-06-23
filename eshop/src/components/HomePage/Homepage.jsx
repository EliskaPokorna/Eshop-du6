import { Product } from '../Product/Product';

export const HomePage = ({ products }) => {
    return (
      <div>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  };