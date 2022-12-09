import { render, screen } from '@testing-library/react';
import { Main } from '.';

describe('<Main', () => {
  it('should be render component', () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toMatchSnapshot();
    expect(
      screen.getByRole('heading', { name: 'ola main' })
    ).toBeInTheDocument();
  });
});
