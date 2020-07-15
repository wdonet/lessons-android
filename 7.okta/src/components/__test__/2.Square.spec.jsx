import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Square from '../Square';

describe('<Square>', () => {
  it('should fire click event', () => {
    let clicked = false;
    const clickFn = () => {
      clicked = true;
    }
    const { container } = render(<Square onClick={clickFn} value={'X'} />);
    const btn = container.querySelector('button');
    expect(btn).toHaveTextContent('X');
    fireEvent.click(btn);
    expect(clicked).toBe(true);
  })
});
