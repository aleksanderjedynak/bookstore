import React from 'react';
import OrderView from '../components/orderView';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('OrderView test', () => {

    it('SnapShot matches', () => {
        const book = {
            name: "Book title",
        };
        const wrapper = shallow(<OrderView book={book}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('Title of the book is displayed as in props', () => {
        const book = {
            name: "Book title",
        };
        const wrapper = shallow(<OrderView book={book}/>);
        expect(wrapper.find('.orderView').find('span').exists()).toBe(true);
        expect(wrapper.find('.orderView').find('span').text()).toBe(book.name);
    });

} );
