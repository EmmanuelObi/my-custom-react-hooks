import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders intro texts', () => {
  render(<App />);
  const linkElement = screen.getByText(/updates/i);
  expect(linkElement).toBeInTheDocument();
});
