import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AdminPanel from "../components/adminPanel";

configure({adapter: new Adapter()});

describe('App test', () => {

    it( 'app reanders without a problem ', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('SnapShot matches', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper).toMatchSnapshot();
    });

    it( 'Child components render', ()=> {
        const wrapper = shallow(<App/>);
        console.log(wrapper.debug());
        // expect(wrapper.find('i').text()).toBe('Aplikacja ksiegarni');
        expect(wrapper.find('Header').exists()).toBe(true);
        expect(wrapper.find('Order').exists()).toBe(true);
        expect(wrapper.find('Inventory').exists()).toBe(true);
        expect(wrapper.find('AdminPanel').exists()).toBe(true);
    });

} );
