import React from 'react';

class LoginForm extends React.Component{

    render(){
        return(
            <div className="row justify-content-center">
                <div className="col-4">
                    <form onSubmit={(event) =>(this.props.authenticate(event))}>
                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                type="text"
                                placeholder='email'
                                id='email'
                                name='email'
                                className='form-control'
                                onChange={this.props.handleLoginChange}
                                value={this.props.email}
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
                                onChange={this.props.handleLoginChange}
                                value={this.props.password}
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