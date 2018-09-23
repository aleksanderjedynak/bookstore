import React from 'react';
import { firebaseApp } from "../fbase";
import LoginForm from './loginForm'
import BookForm from './bookForm'

class AdminPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
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
                            book={this.state.book}
                            handleSignOut={this.handleSignOut}
                        />
                    </React.Fragment>)
                }
            </div>
        );
    };
}

export default AdminPanel;
