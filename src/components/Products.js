import { FaShoppingCart } from "react-icons/fa";

const Products = ({ product, onAdd }) => {
    const { id, image, title, price } = product;
  return (
            <li className="product" id={id}>
                <div className="img-container">
                    <img className="product-img" src={image} alt="" />
                    <button data-testid="bag-button" className="bag-btn" onClick={() => onAdd(product)}>
                        <FaShoppingCart className='fa-shopping-cart' />
                        add to cart
                    </button>
                </div>
                <h3>{title}</h3>
                <h4 data-testid="product-price">${price}</h4>
            </li>
  )
}

export default Products