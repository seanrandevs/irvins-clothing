import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const cartItem = ({ item, removeItem, onAdd, onRemove }) => {
  return (
        <div className="cart">
        <div className="cart-content">
              <div className="cart-item">
            <img src={item.image} alt="" />
            <div>
                <h4>{item.title}</h4>
                <h5>${item.price}</h5>
                <span className="remove-btn" data-testid="remove-button" onClick={() => removeItem(item.id)}>remove</span>
            </div>
            <div>
                <FaChevronUp data-testid="add-item" onClick={() => onAdd(item)} />
                <p data-testid="item-quanity" className="item-amount">{item.numberOfUnits}</p>
                <FaChevronDown data-testid="subtract-item" onClick={() => onRemove(item)} />
            </div>
          </div> 
        </div>
    </div>
  )
}

export default cartItem