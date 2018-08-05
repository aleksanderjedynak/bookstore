import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});

describe('Header test', () => {

    it( 'app reanders without a problem ', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<Header/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('SnapShot matches', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper).toMatchSnapshot();
    });

    it( 'Header', ()=> {
        const wrapper = shallow(<Header/>);
        // console.log(wrapper.debug());
        expect(wrapper.find('h1').text()).toBe('Black Books');
    });

    it('Header changes text without a problem', ()=> {
        const wrapper = shallow(<Header/>);
        // console.log(wrapper);
        expect(wrapper.find('h1').text()).toBe('Black Books');
        wrapper.setState({
            bookstoreNeme : "White Books",
        });
        expect(wrapper.find('h1').text()).toBe('White Books');
    });

    it('header state changes after clicking on header button', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.state().bookstoreNeme).toBe('Black Books');
        // wrapper.find('.btn').simulate('click');
        wrapper.find('button').simulate('click');
        expect(wrapper.state().bookstoreNeme).toBe('White Books');
    });

    it('header state changes after clicking on header div', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.state().value).toBe(true);
        wrapper.find('.btn').simulate('click');
        expect(wrapper.state().value).toBe(false);
    });

} );
