import Footer from './Footer';
import Header from './Header';
import CartItem from './cartItem';

const Cart = ({ cart, totalPrice, totalQuantity, removeItem, onAdd, setCart, onRemove }) => {
  return (
    <>
    <Header totalQuantity={totalQuantity} />
    <h1>Shopping Cart</h1>
    <div data-testid="cart-item-section" className="cart-item-section">
    {cart?.map((item) => (
    <CartItem 
    item={item} 
    key={item.id}
    removeItem={removeItem}
    onAdd={onAdd}
    onRemove={onRemove}
    />
    ))}
    </div>
      <div className="cart-footer">
        <h3>your total : $<span data-testid="total-price" className="cart-total">{totalPrice?.toFixed(2)}</span></h3>
        <button className="clear-cart banner-btn" onClick={() => setCart([])}>clear cart</button>
      </div>
    <Footer />
    </>
  )
}

export default Cart