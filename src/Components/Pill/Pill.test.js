import React from 'react';
import Pill from './Pill';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Pill text="Movie Name" onDelete={()=>{}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});