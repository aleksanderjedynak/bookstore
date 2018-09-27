import React from 'react';

class BookView extends React.Component{
    render(){

        let boxWithOnStock = [
            (<div className="col-6">
                <b>Name:{this.props.book.name}</b>
            </div>),
            (<div className="col-6">
                <i>Author:{this.props.book.author} </i>
            </div>),
            (<div className="col-12">
                <i>Description:{this.props.book.description}</i>
            </div>),
            (<div className="col-12">
                <button
                    className={`btn ${this.props.book.bookOnStock ? 'btn-info' : 'disabled'} `}
                    onClick={ () => this.props.book.bookOnStock && this.props.addToOrder(this.props.book) }>
                    Add to Order
                </button>
                {this.props.book.select &&
                (<button
                        type="button"
                        className="btn btn-primary float-right"
                    >genre:
                        <span className="badge badge-light">
                                {this.props.book.select}
                            </span>
                        <span className="sr-only">unread messages</span>
                    </button>
                )}
            </div>)
        ].concat(
            this.props.book.price ?
            (<div className="col-12">
                    <button className="btn btn-secondary  btn-sm float-right">
                        {this.props.book.price} zł
                    </button>
            </div>) : []);

        return(
            <div className="row bookView">
                {this.props.book.bookOnStock ? boxWithOnStock : boxWithOnStock[0]}
            </div>
        );
    }
}

export default BookView;