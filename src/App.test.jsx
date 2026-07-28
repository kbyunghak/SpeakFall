import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main navigation', () => {
  render(<App />);

  expect(
    screen.getByRole('link', { name: '🗣 Sentence' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: '🎮 Word Fall' })
  ).toBeInTheDocument();
});
