import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the headline correctly', () => {
  render(<App />);
  const headline = screen.getByText(/Bem vindo a Biblioteca/i);
  expect(headline).toBeInTheDocument();
});
