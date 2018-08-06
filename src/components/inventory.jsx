import React from 'react';

class Inventory extends React.Component {
    constructor( props ) {
        super( props );

    }


    render(){

        const bookListing = this.props.books.map(
            (book) => {
                return (<div>{book.name}</div>)
            });
        return(
            <div className='col-4 inventory'>
                {bookListing}
            </div>
        );
    };
}

export default Inventory;