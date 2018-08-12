import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            bookstoreNeme: "Black Books",
            value: true,
        }
    };

    handlerClick = () => {
        if(this.state.value) {
            this.setState({
                bookstoreNeme: "White Books",
                value: false,
            });
        }else{
            this.setState({
                bookstoreNeme: "Black Books",
                value: true,
            });
        }
    };

    render(){
        let value = this.state.bookstoreNeme;

        return(
            <div className='row header' onClick={this.handlerClick}>
                <h1 className='col-8'>{value}</h1>
                <div className='col-4'>
                    <Link to='/admin' className='float-right'>
                        <button className='btn btn-warning'>
                            Administrator Panel
                        </button>
                    </Link>
                </div>
            </div>
        );
    };
}

export default Header;