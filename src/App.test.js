import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
const RenderApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
}

test('render irvins', async () => {
  render(<RenderApp />);
  const irvins = screen.getByText('Irvins');
  expect(irvins).toBeInTheDocument();
});

const server = setupServer( rest.get('https://fakestoreapi.com/products?limit=1', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json([
    {
      "id": 1,
      "title": "Laptop Backpack",
      "price": 109.99,
  },
  ]));
}));

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App', () => {
it('fetches and renders data', async () => {
  render(<RenderApp />);
  const items = await screen.findAllByRole('listitem');
  expect(items).toHaveLength(1);
});
it('renders Laptop Backpack', async () => { 
  render(<RenderApp />);
  const Product = await screen.findByText('Laptop Backpack');
  expect(Product).toBeInTheDocument();
});
it('renders $109.99', async () => { 
  render(<RenderApp />);
  const price = await screen.findByText('$109.99');
  expect(price).toBeInTheDocument();
});
it('renders Add to cart', async () => { 
  render(<RenderApp />);
  const add = await screen.findByTestId('bag-button');
  expect(add).toBeInTheDocument();
});
it('renders 0 in cart', async () => { 
  render(<RenderApp />);
  const cart = await screen.findByText('0');
  expect(cart).toBeInTheDocument();
});
});