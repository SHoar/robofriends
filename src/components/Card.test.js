import { shallow, mount, render } from 'enzyme';
import React from 'react'
import Card from './Card';



    it('expect to render a Card', () => {
        console.log(render(<Card />).length)
        expect(shallow(<Card />)).toMatchSnapshot();
    
    })
    
