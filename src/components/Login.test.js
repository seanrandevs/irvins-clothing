import { render, screen } from '@testing-library/react';
import Login from './Login';
import { HashRouter } from 'react-router-dom';

const MockLogin = () => {
    return (
    <HashRouter hashType="slash">
      <Login />
    </HashRouter>
    )
}

describe('Testing Login page', () => {
    it('should render login to your account', () => {
        render(<MockLogin />)
        const loginHeading = screen.getByRole('heading', {  name: /login to your account/i});
        expect(loginHeading).toBeInTheDocument();
      })
})

// it('should render the email and password input', async () => {
//   render(<MockLogin />)
//   const email = screen.getByPlaceholderText(/email/i);
//   const password = screen.getByPlaceholderText(/password/i);
//   userEvent.type(email, 'admin@admin.com');
//   userEvent.type(password, 'admin123');
// })