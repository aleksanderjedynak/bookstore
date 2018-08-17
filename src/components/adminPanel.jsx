import React from 'react';
import { fbase, firebaseApp} from "../fbase";
import LoginForm from './loginForm'
import BookForm from './bookForm'

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
                console.log("OK!!!");
            } )
            .catch( () => {
                console.log('Unable to authenticate');
            } );
    };

    render(){
        return(
            <div className='container adminPanel'>
                { !this.state.loggedIn &&
                <LoginForm
                    authenticate={this.authenticate}
                    handleLoginChange={this.handleLoginChange}
                />}
                { this.state.loggedIn &&
                <BookForm
                    handleAddNewBook={this.handleAddNewBook}
                    handleChange={this.handleChange}
                /> }
            </div>
        );
    };
}

export default AdminPanel;
