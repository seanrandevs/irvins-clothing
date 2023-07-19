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
                <span className="remove-btn" onClick={() => removeItem(item.id)}>remove</span>
            </div>
            <div>
                <FaChevronUp onClick={() => onAdd(item)} />
                <p className="item-amount">{item.numberOfUnits}</p>
                <FaChevronDown onClick={() => onRemove(item)} />
            </div>
          </div> 
        </div>
    </div>
  )
}

export default cartItem