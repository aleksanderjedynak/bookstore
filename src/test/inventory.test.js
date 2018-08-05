import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from '../components/inventory';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});

describe('Inventory test', () => {

    it( 'Inventory reanders without a problem ', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<Inventory/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('SnapShot matches', () => {
        const wrapper = shallow(<Inventory/>);
        expect(wrapper).toMatchSnapshot();
    });

    it( 'Inventory', ()=> {
        const wrapper = shallow(<Inventory/>);
        // console.log(wrapper.debug());
        expect(wrapper.find('i').text()).toBe('Inventory');
    });

} );
