import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { loanTable } from './loanTable';

configure({ adapter: new Adapter() });

describe('<loanTable />', () => {
  it('renders', () => {
    const wrapper = shallow(<loanTable />);

    expect(wrapper.exists()).toBe(true);
  });
});
