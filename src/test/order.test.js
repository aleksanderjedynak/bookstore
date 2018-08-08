import React from 'react';
import ReactDOM from 'react-dom';
import Order from '../components/order';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Order test', () => {

    it( 'Order reanders without a problem ', ()=> {
        const div = document.createElement('div');
        const order = [];
        ReactDOM.render(<Order order={order}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('SnapShot matches', () => {
        const order = [];
        const wrapper = shallow(<Order order={order}/>);
        expect(wrapper).toMatchSnapshot();
    });

    // it( 'Order', ()=> {
    //     const wrapper = shallow(<Order/>);
    //     // console.log(wrapper.debug());
    //     expect(wrapper.find('i').text()).toBe('Order');
    // });

} );
