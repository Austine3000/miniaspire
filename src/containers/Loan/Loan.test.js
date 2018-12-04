import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Loan } from './Loan';

configure({ adapter: new Adapter() });

describe('<Loan />', () => {
  it('renders', () => {
    const wrapper = shallow(<Loan onGetAllLoan={() => {}} />);
    expect(wrapper.exists()).toBe(true);
  });
});
