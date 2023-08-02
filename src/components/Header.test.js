import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';

const MockHeader = () => {
  return (
    <Router>
      <Header />
    </Router>
  );
}

describe('header testing', () => {
    it('should render login or register', () => {
        render(<MockHeader />)
        const login = screen.getByRole('link', {  name: /login/i});
        const register = screen.getByRole('link', {  name: /register/i});
        expect(login).toBeInTheDocument();
        expect(register).toBeInTheDocument();
    })
    it('should render cart item', () => {
        render(<MockHeader />);
        const cartItem = screen.getByTestId('cart-item');
        expect(cartItem).toBeInTheDocument();
    })
    it('should render irvins as name', () => {
        render(<MockHeader />)
        const Irvins = screen.getByTestId('name')
        expect(Irvins).toBeInTheDocument();
      })
})