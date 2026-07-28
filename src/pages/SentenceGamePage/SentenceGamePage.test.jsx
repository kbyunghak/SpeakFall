import { act, render, screen } from '@testing-library/react';
import SentenceGamePage from './SentenceGamePage';

describe('SentenceGamePage', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  test('shows the game controls after loading', () => {
    render(<SentenceGamePage />);
    expect(
      screen.getByRole('heading', { name: /loading sentences/i })
    ).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(1800);
    });

    expect(
      screen.getByRole('heading', { name: /select difficulty/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /start speaking/i })
    ).toBeInTheDocument();
  });
});
