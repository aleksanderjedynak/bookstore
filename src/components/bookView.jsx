import React from 'react';

class BookView extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <b>Name:{this.props.book.name} </b>
                <i>Author:{this.props.book.author} </i>
                <i>Description:{this.props.book.description}</i>
            </div>
            );
    }
}

export default BookView;