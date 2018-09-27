import React from 'react';
import BookLists from "./bookLists";

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
                price: "",
            },
        };
    };

    componentWillReceiveProps(nextProps) {
        if(this.props.editBook !==nextProps.editBook){
            this.setState({
                book : nextProps.editBook,
            });
        }
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
        this.props.addNewBook(newBook);
        this.setState({
            book: {
                name: "",
                author: "",
                description: "",
                bookOnStock: false,
                image: "",
                select: 2,
                price: "",
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
        const label = this.props.editForm ? "Edit" : "Add";
        return (
            <div className='row'>
                <div className='col-6'>
                    <BookLists
                        books={this.props.books}
                        removeFromInventory={this.props.removeFromInventory}
                        editFromInventory={this.props.editFromInventory}
                    />
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
                        <div className='form-group'>
                            <input
                                value={this.state.book.price}
                                type="number"
                                placeholder='Book price'
                                id='price'
                                name='price'
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
                        <button type='submit' className='btn btn-primary float-right'>{label}</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default BookForm;