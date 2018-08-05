import React from 'react';
import ReactDOM from 'react-dom';
import AdminPanel from '../components/adminPanel';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('AdminPanel test', () => {

    it( 'AdminPanel reanders without a problem ', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<AdminPanel/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // it( 'AdminPanel', ()=> {
    //     const wrapper = shallow(<AdminPanel/>);
    //     // console.log(wrapper.debug());
    //     expect(wrapper.find('i').text()).toBe('AdminPanel');
    // });

    it('SnapShot matches', () => {
        const wrapper = shallow(<AdminPanel/>);
        expect(wrapper).toMatchSnapshot();
    });

} );
