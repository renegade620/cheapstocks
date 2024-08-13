import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Cheap Stocks header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Cheap Stocks - Toiletries/i);
  expect(headerElement).toBeInTheDocument();
});