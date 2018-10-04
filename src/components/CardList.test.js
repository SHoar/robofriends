import { shallow, mount, render } from 'enzyme';
import React from 'react'
import CardList from './CardList';



    it('expect to render a Card', () => {
        const mockRobots = [
            {
                id: 1, name: 'Jon Snow', username: 'KingOfTheNorth', email: 'JSnow@theWall.com'
            }
        ]
        expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
    
    })
    
