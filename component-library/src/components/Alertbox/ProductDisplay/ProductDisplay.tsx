import type { ProductDisplayProps } from "../types"

export default function ProductDisplay({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children,
}: ProductDisplayProps) {
  return (
    <div>
      {product.imageUrl && <img src={product.imageUrl} alt={product.name} />}
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      {showDescription && <p>{product.description}</p>}
      {showStockStatus && <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>}
      {onAddToCart && (
        <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
      )}
      {children}
    </div>
  )
}