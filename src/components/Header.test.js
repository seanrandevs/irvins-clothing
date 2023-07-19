import { render, screen } from '@testing-library/react';
import Header from './Header';
import { HashRouter } from 'react-router-dom';

const MockHeader = () => {
    return (
    <HashRouter hashType="slash">
      <Header />
    </HashRouter>
    )
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