import React from 'react';
import { fbase, firebaseApp} from "../fbase";

class AdminPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            book: {
                name: "",
                author: "",
                description: "",
                bookOnStock: false,
                image: "",
            },
            books: [],
            loggedIn: false,
            email: "",
            password: "",
        };
    }

    handleLoginChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
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
            },
        });
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

    authenticate = (event) => {
        event.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then( () => {
                this.setState({
                    loggedIn: true,
                });
            } )
            .catch( () => {
                console.log('Unable to authenticate');
            } );
    };

    render(){
        return(
            <div className='col-4 adminPanel'>
                { !this.state.loggedIn &&
                <form onSubmit={this.authenticate}>
                    <input
                        type="text"
                        placeholder='email'
                        id='email'
                        name='email'
                        className='form-control'
                        onChange={this.handleLoginChange}
                        value={this.state.email}
                    />
                    <input
                        type="password"
                        id='password'
                        name='password'
                        className='form-control'
                        placeholder='password'
                        onChange={this.handleLoginChange}
                        value={this.state.password}
                    />
                    <button type='submit' className='btn btn-primary'>log in</button>
                </form>
                }
                { this.state.loggedIn && <form onSubmit={this.handleAddNewBook}>
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
                    <button type='submit' className='btn btn-primary'>Add</button>
                </form>}
            </div>
        );
    };
}

export default AdminPanel;
