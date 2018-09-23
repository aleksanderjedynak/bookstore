import React from 'react';
import { firebaseApp } from "../fbase";

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""

        };
    };

    handleLoginChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    authenticate = (event) => {
        console.log('[authenticate]',this.props);
        event.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then( () => {
                this.props.handleLoggedIn(true);
                console.log("OK!!!");
            } )
            .catch( () => {
                console.log('Unable to authenticate');
            } );
    };

    render(){
        return(
            <div className="row justify-content-center">
                <div className="col-4">
                    <form onSubmit={(event) =>(this.authenticate(event))}>
                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                type="text"
                                placeholder='email'
                                id='email'
                                name='email'
                                className='form-control'
                                onChange={this.handleLoginChange}
                                value={this.state.email}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                id='password'
                                name='password'
                                className='form-control'
                                placeholder='password'
                                onChange={this.handleLoginChange}
                                value={this.state.password}
                            />
                        </div>
                        <button type='submit' className='btn btn-secondary float-right'>log in</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;