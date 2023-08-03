import { render, screen } from '@testing-library/react';
import Cart from './Cart';
import { BrowserRouter as Router } from 'react-router-dom';

const RenderCart = () => {
  return (
    <Router>
      <Cart />
    </Router>
  );
}
describe('cart testing', () => {
    const cart = [
        {
            "id": 1,
            "title": "Laptop Backpack",
            "price": 10.99,
        },
        {
            "id": 2,
            "title": "Shirt",
            "price": 100.00,
        },
      ];
    it('should render Shopping Cart', () => {
        render(<RenderCart />)
        const shoppingCart = screen.getByText('Shopping Cart')
        expect(shoppingCart).toBeInTheDocument();
      })
        it('should render your total', () => {
        render(<RenderCart />)
        const yourTotal = screen.getByText('your total : $')
        expect(yourTotal).toBeInTheDocument();
        })
        it('should render Laptop Backpack', () => {
            render(<Router>
                <Cart cart={cart} />
              </Router>)
            const cartItem = screen.getByText('Laptop Backpack')
            expect(cartItem).toBeInTheDocument();
        })
        it('should render $109.99', () => {
            render(<Router>
                <Cart cart={cart} />
              </Router>)
            const cartItem = screen.getByText('$10.99')
            expect(cartItem).toBeInTheDocument();
        })
        it('should render remove button', () => {
            render(<Router>
                <Cart cart={cart} />
              </Router>)
           const removeButton = screen.getAllByTestId('remove-button')
           expect(removeButton).toHaveLength(2);
        })
        it('should call remove function', () => {
          const removeFunction = jest.fn()
            render(<Router>
                <Cart cart={cart} removeItem={removeFunction} />
              </Router>)
           const removeButton = screen.getAllByTestId('remove-button')
           removeButton[1].click()
            expect(removeFunction).toHaveBeenCalled();
        })
        it('should render add item', () => {
            render(<Router>
                <Cart cart={cart} />
              </Router>)
           const addItem = screen.getAllByTestId('add-item')
            expect(addItem).toHaveLength(2);
        })
        it('should render subtract item', () => {
            render(<Router>
                <Cart cart={cart} />
              </Router>)
           const subtractItem = screen.getAllByTestId('subtract-item')
            expect(subtractItem).toHaveLength(2);
        })
        it('should render cart item section', () => {
            render(<Router>
                <Cart cart={cart} />
              </Router>)
           const cartItemSection = screen.getByTestId('cart-item-section')
            expect(cartItemSection).toBeInTheDocument();
        })
        it('should render cart footer', () => {
            render(<Router>
                <Cart cart={cart} />
              </Router>)
           const cartFooter = screen.getByText('your total : $')
            expect(cartFooter).toBeInTheDocument();
        })
        it('should render clear cart', () => {
            render(<Router>
                <Cart cart={cart} />
              </Router>)
           const clearCart = screen.getByRole('button', {  name: /clear cart/i})
            expect(clearCart).toBeInTheDocument();
        })
        it('should call setCart function', () => {
          const setCartFunction = jest.fn()
            render(<Router>
                <Cart cart={cart} setCart={setCartFunction} />
              </Router>)
           const clearCart = screen.getByRole('button', {  name: /clear cart/i})
           clearCart.click()
            expect(setCartFunction).toHaveBeenCalled();
        })
        it('should render item amount', () => {
            render(<Router>
                <Cart cart={cart} />
              </Router>)
           const itemAmount = screen.getAllByTestId('item-quanity')
            expect(itemAmount).toHaveLength(2);
        })
        it('should render cart total', () => {
          const totalPrice = 110.99
            render(<Router>
                <Cart cart={cart} totalPrice={totalPrice} />
              </Router>)
           const cartTotal = screen.getByTestId('total-price')
            expect(cartTotal).toHaveTextContent('110.99');
        })
  });