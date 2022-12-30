import { render, screen } from '@testing-library/react';
import { Main } from '.';

const props = {
  title: 'React Avançado',
  description: 'TypeScript, ReactJS, NextJS e Styled Components'
};

describe('<Main', () => {
  it('should be render component', () => {
    const { container } = render(<Main {...props} />);
    expect(container.firstChild).toMatchSnapshot();
    expect(
      screen.getByRole('heading', { name: 'React Avançado' })
    ).toBeInTheDocument();
    expect(
      screen.getByText('TypeScript, ReactJS, NextJS e Styled Components')
    ).toBeInTheDocument();
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Main {...props} />);
    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    });
  });
});
