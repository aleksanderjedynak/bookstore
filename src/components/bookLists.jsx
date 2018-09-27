import React from 'react';
import { Link } from "react-router-dom";
import AdminBookView from "./AdminBookView"

class BookLists extends React.Component{

    render(){
        return(
            <React.Fragment>
                <h1 className='bookLists'>List Book</h1>
                <Link to='/'>
                    <button className='btn btn-outline-info'>
                        Go to lists
                    </button>
                </Link>
                { this.props.books.length > 0 ?
                    (<ul>
                        {this.props.books.map(
                            (book, index) =>
                                <AdminBookView
                                    book={book}
                                    key={index}
                                    removeFromInventory={this.props.removeFromInventory}
                                    editFromInventory={this.props.editFromInventory}
                                />
                        )}</ul>) : null}
            </React.Fragment>
        )
    }
}

export default BookLists;