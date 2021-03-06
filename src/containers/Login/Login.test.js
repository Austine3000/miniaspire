import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Login } from './Login';

configure({ adapter: new Adapter() });

describe('<Login />', () => {
  it('renders', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.exists()).toBe(true);
  });

  it('user email input test echoed', () => {
    const wrapper = shallow(<Login />);

    wrapper.find('#inputEmail').simulate('change', {
      target: {
        value: 'hello',
        name: 'email'
      }
    });
    expect(wrapper.find('#inputEmail').props().value).toEqual('hello');
  });

  it('user password input test echoed', () => {
    const wrapper = shallow(<Login />);

    wrapper.find('#inputPassword').simulate('change', {
      target: {
        value: 'hello',
        name: 'password'
      }
    });
    expect(wrapper.find('#inputPassword').props().value).toEqual('hello');
  });
});
