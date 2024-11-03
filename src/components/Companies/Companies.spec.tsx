import { render, screen } from '@/test/test-utils';
import Companies from './Companies';

describe('<Companies />', () => {
  it('should render companies logo', () => {
    render(<Companies />);
    expect(screen.getAllByTestId('company-logo').length).toBeGreaterThan(1);
  });
});
