import React from 'react';

class Inventory extends React.Component {
    constructor( props ) {
        super( props );

    }


    render(){
        return(
            <div className='col-4 inventory'>
                { this.props.books.map( (book) => {
                    return (<div>{book.name}</div>)})
                }
            </div>
        );
    };
}

export default Inventory;