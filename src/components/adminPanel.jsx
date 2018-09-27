import React from 'react';
import { fbase, firebaseApp } from "../fbase";
import LoginForm from './loginForm'
import BookForm from './bookForm'

class AdminPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            books: [],
            editForm: false,
            editBook: {},
        };
    };

    handleLoggedIn = (value) => {
        this.setState({
            loggedIn: value,
        });
    };

    handleSignOut =() => {

        firebaseApp.auth().signOut()
            .then(
                () => {
                    this.setState({
                        loggedIn: !this.state.loggedIn,
                    });
                    console.log('Signed Out');
                }).catch(
            () => {
                console.log('Error');
            }
        );
    };

    addNewBook = (book) => {
        if(this.state.editForm){
            const editBooks = this.state.books.filter( book => this.state.editBook.name!==book.name );
            this.setState({
                books: [...editBooks,book],
                editForm: false,
            })
        } else{
            this.setState({
                books: [...this.state.books, book]
            });
        }
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

    removeFromInventory = (title) => {
        this.setState({
            books : this.state.books.filter( book => title!==book.name )
        })
    };

    editFromInventory = (bookToEdit) => {
        this.setState({
            editBook : bookToEdit,
            editForm: true,
        })
    };

    render(){
        return(
            <div className='container adminPanel'>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <h1>Admin Panel</h1>
                    </div>
                </div>
                { !this.state.loggedIn ? (<LoginForm handleLoggedIn={this.handleLoggedIn}/>) :
                    (<React.Fragment>
                        <div className="row">
                            <div className="col-12">
                                <button
                                    type='button'
                                    className='btn btn-danger float-right'
                                    onClick={this.handleSignOut}
                                >Log out
                                </button>
                            </div>
                        </div>
                        <BookForm
                            books={this.state.books}
                            addNewBook={this.addNewBook}
                            removeFromInventory={this.removeFromInventory}
                            editFromInventory={this.editFromInventory}
                            editForm={this.state.editForm}
                            editBook={this.state.editBook}
                        />
                    </React.Fragment>)
                }
            </div>
        );
    };
}

export default AdminPanel;
