import React from 'react';
import { shallow } from 'enzyme';
import Header from '../index.ts';

describe('<Header />', () => {
  it('should render a nav', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.length).toEqual(1);
  });
});
