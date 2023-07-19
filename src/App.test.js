import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import App from './App';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const MockApp = () => {
    return (
    <HashRouter hashType="slash">
      <App />
    </HashRouter>
    )
}

test('should render irvins as name', () => {
  render(<MockApp />)
  const Products = screen.getByRole('heading', {  name: /products/i})
  expect(Products).toBeInTheDocument();
})

afterEach(() => {
  mock.reset();
});

const mock = new MockAdapter(axios);
mock.onGet('/api/products').reply(200, {
  products: [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    // Add more product objects as needed
  ]
});
it('should fetch products from the API', async () => {
  // Perform the necessary actions in your component that trigger the API request

  // Assert that the API request was made
  expect(mock.history.get.length).toBe(1);
  expect(mock.history.get[0].url).toBe('https://fakestoreapi.com/products?limit=8');

  // Assert the response data
  const response = await axios.get('https://fakestoreapi.com/products?limit=8');
  expect(response.status).toBe(200);
  expect(response.data.products.length).toBe(2);
  expect(response.data.products[0].name).toBe('Product 1');
  // Add more assertions as needed
});