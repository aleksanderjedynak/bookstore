import React from 'react';
import { fbase } from "../fbase";

class BookForm extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            book: {
                name: "",
                author: "",
                description: "",
                bookOnStock: false,
                image: "",
                select: 2,
            },
            books: [],

        };
    };

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
    };

    handleChangeSelect = (event) =>{
        let newBook = {
            ...this.state.book,
            [event.target.name]: event.target.value,
        };
        this.setState({
            book: newBook,
        });
    };

    handleAddNewBook = (event) => {

        event.preventDefault();
        let newBook = { ...this.state.book };
        this.setState({
            books: [...this.state.books, newBook],
            book: {
                name: "",
                author: "",
                description: "",
                bookOnStock: false,
                image: "",
                select: 2,
            },
        });
    };

    handleChange = (event) => {
        let newBook;

        if(event.target.name === "bookOnStock"){
            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.checked,
            };
        } else{
            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.value,
            };
        }

        this.setState({
            book: newBook,
        });
    };

    render() {
        return (
            <div className='row'>
                <div className='col-6'>
                    <h1>List Book</h1>

                </div>
                <div className='col-6'>
                    <h1>New Book</h1>
                    <form onSubmit={(event) => this.handleAddNewBook(event)}>
                        <div className='form-group'>
                            <input
                                value={this.state.book.name}
                                type="text"
                                placeholder='Book name'
                                id='name'
                                name='name'
                                className='form-control'
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                value={this.state.book.author}
                                type="text"
                                placeholder='Book author'
                                id='author'
                                name='author'
                                className='form-control'
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='form-group'>
                        <textarea
                            value={this.state.book.description}
                            placeholder='Book description'
                            id='description'
                            name='description'
                            className='form-control'
                            onChange={this.handleChange}
                        />
                        </div>
                        <div className='form-check'>
                            <input
                                checked={this.state.book.bookOnStock}
                                type="checkbox"
                                id='bookOnStock'
                                name='bookOnStock'
                                className='form-check-input'
                                onChange={this.handleChange}
                            />
                            <label htmlFor="bookOnStock" className='form-check-label'>On stock</label>
                        </div>
                        <div className='form-group'>
                            <input
                                value={this.state.book.image}
                                type="text"
                                placeholder='Book image'
                                id='image'
                                name='image'
                                className='form-control'
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Pick your favorite genre:
                                <select name='select' value={this.state.book.select} onChange={this.handleChangeSelect}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </label>
                        </div>
                        <button type='submit' className='btn btn-primary'>Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default BookForm;