import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Signup } from './Signup';

configure({ adapter: new Adapter() });

describe('<Signup />', () => {
  it('renders', () => {
    const wrapper = shallow(<Signup />);

    expect(wrapper.exists()).toBe(true);
  });

  it('user email input test echoed', () => {
    const wrapper = shallow(<Signup />);

    wrapper.find('#inputEmail').simulate('change', {
      target: {
        value: 'hello',
        name: 'email'
      }
    });
    expect(wrapper.find('#inputEmail').props().value).toEqual('hello');
  });

  it('user password input test echoed', () => {
    const wrapper = shallow(<Signup />);

    wrapper.find('#inputPassword').simulate('change', {
      target: {
        value: 'hello',
        name: 'password'
      }
    });
    expect(wrapper.find('#inputPassword').props().value).toEqual('hello');
  });

  it('user password input test echoed', () => {
    const wrapper = shallow(<Signup />);

    wrapper.find('#inputUserame').simulate('change', {
      target: {
        value: 'hello',
        name: 'fullname'
      }
    });
    expect(wrapper.find('#inputUserame').props().value).toEqual('hello');
  });
});
