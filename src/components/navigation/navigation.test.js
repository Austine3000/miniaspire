import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navigation from './navigation';

configure({ adapter: new Adapter() });

describe('<Navigation />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  });

  it('should render a single <NavLink /> if role is admin when loaded', () => {
    wrapper.setProps({ role: 'admin' });
    expect(wrapper.find('NavLink')).toHaveLength(1);
  });

  it('should render a single <NavLink /> if role is null when loaded', () => {
    wrapper.setProps({ role: null });
    expect(wrapper.find('NavLink')).toHaveLength(1);
  });
});
