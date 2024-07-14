interface ProductProps {
  onAddToCart: () => void;
}

export const Product: React.FC<ProductProps> = ({ onAddToCart }) => {
  return (
    <div>
      <h3>Sample Product</h3>
      <img alt="Sample Product" />
      <button onClick={onAddToCart}>Add To Cart</button>
    </div>
  );
};
