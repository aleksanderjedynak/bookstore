import React from 'react';

class BookView extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row bookView">
                <div className="col-6">
                    <b>Name:{this.props.book.name} </b>
                </div>
                <div className="col-6">
                    <i>Author:{this.props.book.author} </i>
                </div>

                <div className="col-12">
                    <i>Description:{this.props.book.description}</i>
                </div>
                <div className="col-6">
                    <button
                        className='btn btn-info'
                        onClick={ () => this.props.addToOrder(this.props.book) }>
                        Add to Order
                    </button>
                </div>

            </div>
            );
    }
}

export default BookView;