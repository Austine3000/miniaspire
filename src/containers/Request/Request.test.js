import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Request } from './Request';

configure({ adapter: new Adapter() });

describe('<Request />', () => {
  it('renders', () => {
    const wrapper = shallow(<Request />);

    expect(wrapper.exists()).toBe(true);
  });
});
