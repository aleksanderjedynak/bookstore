import React from 'react';
import BookView from './bookView'

class Inventory extends React.Component {
    constructor( props ) {
        super( props );

    }

    render(){

        const bookListing = this.props.books.map(
            (book, index) => {
                return (<BookView key={index} book={book} addToOrder={this.props.addToOrder}/>)
            });
        return(
            <div className='col-4 inventory'>
                {bookListing}
            </div>
        );
    };
}

export default Inventory;