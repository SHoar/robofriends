import { shallow, mount, render } from 'enzyme';
import React from 'react'
import CounterButton from './CounterButton';
import { wrap } from 'module';



    it('expect to render a CounterButton', () => {
        const mockColor = 'red'
        expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot();

    })
    
    it('correctly increments the counter', () => {
        const mockColor = 'red'
        const wrapper = shallow(<CounterButton color={mockColor} />)
        wrapper.find('[id="counter"]').simulate('click');
        wrapper.find('[id="counter"]').simulate('click');

        expect(wrapper.state()).toEqual({ count: 2})
        expect(wrapper.props().color).toEqual('red')
    })