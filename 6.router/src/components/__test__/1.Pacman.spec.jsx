import React from 'react';
import { render } from '@testing-library/react';
import Pacman from '../Pacman';

describe('<Pacman>', () => {
  test('should render an h1 tag', () => {
    const { getByText } = render(<Pacman />);
    const pacmanHtmlElement = getByText(/PAC/i)
    expect(pacmanHtmlElement).toBeInTheDocument();
    expect(pacmanHtmlElement).toHaveClass('my-pacman');
  });

  test('should render styling', () => {
    const { getByText } = render(<Pacman />);
    const pacmanHtmlElement = getByText(/PAC/i)
    expect(pacmanHtmlElement).toHaveTextContent('PACMAN');
    expect(pacmanHtmlElement).toHaveStyle('border: 1px solid');
  })
});
