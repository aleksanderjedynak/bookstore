import React from 'react';

class OrderView extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='orderView row'>
                <div className='col-6'>
                    <b>
                        <span>{this.props.book.name}</span>
                    </b>
                </div>
                <div className='col-6'>
                    <button className='btn btn-danger float-right'
                            onClick={() => this.props.removeFromOrder(this.props.book.name)}
                    >Remove from Order
                    </button>
                </div>

            </div>
            );
    }
}

export default OrderView;