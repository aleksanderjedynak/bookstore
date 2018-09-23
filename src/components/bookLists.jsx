import React from 'react';
import { Link } from "react-router-dom";

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
                                <li key={index}>Name:<strong>{book.name}</strong> Author:{book.author}</li>
                        )}</ul>) :
                    (<div>nie ma nic</div>)}
            </React.Fragment>
        )
    }
}

export default BookLists;