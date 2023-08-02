import { render, screen } from '@testing-library/react';
import Register from './Register';
import { BrowserRouter as Router } from 'react-router-dom';
 const MockRegister = () => {
  return (
    <Router>
      <Register />
    </Router>
  );
}

describe('Test Register', () => {
    it('should render create an account', () => {
        render(<MockRegister />)
    const heading = screen.getByRole('heading', {  name: /create an account/i});
    expect(heading).toBeInTheDocument();
    })
})

// it('signup button should be enabeled', () => {
//     render(<MockRegister />)
//      const fName = screen.getByTestId('fname');
//      const lName = screen.getByTestId('lname');
//      const email = screen.getByTestId('e-test');
//      const password = screen.getByTestId('pass-test');
//      const confirm = screen.getByTestId('confirm-test');
//      const button = screen.getByRole('button', {  name: /sign up/i});
//      userEvent.type(fName, 'Sean');
//      userEvent.type(lName, 'Ransonet');
//      userEvent.type(email, 'admin@admin.com');
//      userEvent.type(password, 'admin123');
//      userEvent.type(confirm, 'admin123');
//      userEvent.click(button);
//      expect(button).toBeEnabled();
//     })
//     it('form should submit', () => {
//     render(<MockRegister  />)
//      const fName = screen.getByTestId('fname');
//      const lName = screen.getByTestId('lname');
//      const email = screen.getByTestId('e-test');
//      const password = screen.getByTestId('pass-test');
//      const confirm = screen.getByTestId('confirm-test');
//      userEvent.type(fName, 'Sean');
//      userEvent.type(lName, 'Ransonet');
//      userEvent.type(email, 'admin@admin.com');
//      userEvent.type(password, 'admin123');
//      userEvent.type(confirm, 'admin123');
//     })