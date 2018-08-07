import React from 'react';

class OrderView extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <b>{this.props.book.name} </b>
                <button className='btn btn-danger'
                        onClick={() => this.props.removeFromOrder(this.props.book.name)}
                >Remove from Order</button>
            </div>
            );
    }
}

export default OrderView;