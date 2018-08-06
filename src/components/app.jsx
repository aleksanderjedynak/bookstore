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

    addNewBook = (book) => {
        let newBooks = [ ...this.state.books ];

        newBooks.push( book );

        this.setState( {
            books: newBooks,
        } );
    };


    render(){
        return(
            <div className='app container'>
                <Header />
                <div className='row'>
                    <Order />
                    <Inventory books={this.state.books}/>
                    <AdminPanel books={this.state.books} addNewBook={this.addNewBook}/>
                </div>
            </div>
        );
    };
}

export default App;