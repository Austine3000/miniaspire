import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Overview } from './Overview';

configure({ adapter: new Adapter() });

describe('<Overview />', () => {
  it('renders', () => {
    const wrapper = shallow(<Overview />);

    expect(wrapper.exists()).toBe(true);
  });
});
