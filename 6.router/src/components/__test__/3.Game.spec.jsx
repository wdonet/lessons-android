import React from 'react';
import renderer from 'react-test-renderer';
import Game from '../Game';

jest.mock('../Board.jsx', () => 'mock-board-tag')
jest.mock('../Winner.jsx', () => 'mock-winner-tag')

describe('<Game>', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<Game/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
