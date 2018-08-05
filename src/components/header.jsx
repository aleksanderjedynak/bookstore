import React from 'react';

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
            <div className='row header'>
                <h1 className='col-12'>{value}</h1>
                <div className='btn-group'>
                    <button className='btn btn-success' onClick={this.handlerClick}>Change Name</button>
                </div>
                <br/>
            </div>
        );
    };
}

export default Header;