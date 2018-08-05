import React from 'react';
import AdminPanel from './adminPanel';
import Order from './order';
import Inventory from './inventory';
import Header from './header';

class App extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            books: [],
        };
    }


    render(){
        return(
            <div className='app container'>
                <Header />
                <div className='row'>
                    <Order />
                    <Inventory />
                    <AdminPanel books={this.state.books}/>
                </div>
            </div>
        );
    };
}

export default App;