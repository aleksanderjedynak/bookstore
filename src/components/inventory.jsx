import React from 'react';
import BookView from './bookView'
import { fbase } from "../fbase";

class Inventory extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            books: [],
        };

    }

    componentDidMount(){
        this.ref = fbase.syncState(
            'bookstore/books',
            {
                context: this,
                state: 'books',
            }
        );
    };

    componentWillUnmount(){
        fbase.removeBinding(this.ref);
    }

    render(){
        const bookListing = this.state.books.length >=1 && this.state.books.map(
            (book, index) => {
                return (<BookView key={index} book={book} addToOrder={this.props.addToOrder}/>)
            });
        return(
            <div className='col-6'>
                <div className='inventoryBox'>
                    <h2>Bookstore Inventory:</h2>
                    {bookListing}
                </div>
            </div>
        );
    };
}

export default Inventory;