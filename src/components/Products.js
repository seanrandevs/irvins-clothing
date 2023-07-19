import { FaShoppingCart } from "react-icons/fa";

const Products = ({ product, onAdd }) => {
  return (
            <div className="product" id={product.id}>
                <div className="img-container">
                    <img className="product-img" src={product.image} alt="" />
                    <button data-testid="bag-btn" className="bag-btn" onClick={() => onAdd(product)}>
                        <FaShoppingCart className='fa-shopping-cart' />
                        add to cart
                    </button>
                </div>
                <h3>{product.title}</h3>
                <h4>${product.price}</h4>
            </div>
  )
}

export default Products