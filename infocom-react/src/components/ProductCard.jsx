import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ products }) {
  return (
    // Dentro do return do componente ProductCard
    <div className='card'>
      <img src={product.image} alt={product.title} />

      <div className='separator'></div>

      <div className='price'>R$ {product.price.toFixed(2).replace(".", ",")}</div>

      <h3>{product.title}</h3>
    </div>

  );
}

export default ProductList;