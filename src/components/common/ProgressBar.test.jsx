import { render, screen } from '@testing-library/react';
import ProgressBar from './ProgressBar';

test('renders the supplied loading progress', () => {
  render(<ProgressBar progress={60} />);

  const progress = screen.getByLabelText('Loading progress');
  expect(progress.firstChild).toHaveStyle({ width: '60%' });
});
