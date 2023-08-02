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
            "price": 109.99,
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
        it('should render clear cart', () => {
        render(<RenderCart />)
        const clearCart = screen.getByRole('button', {  name: /clear cart/i})
        expect(clearCart).toBeInTheDocument();
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
            const cartItem = screen.getByText('$109.99')
            expect(cartItem).toBeInTheDocument();
        })
        it('should render remove button', () => {
            render(<Router>
                <Cart cart={cart} />
              </Router>)
           const removeButton = screen.getByTestId('remove-button')
           expect(removeButton).toBeInTheDocument();
        })
  });