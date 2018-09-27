import React from 'react';

class OrderView extends React.Component{
    render(){
        return(
            <div className='orderView row'>
                <div className='col-8'>
                    <b>
                        <span>{this.props.book.name}</span>
                    </b>
                </div>
                <div className='col-3'>
                    <span className='float-right'>{this.props.book.price || "not available"}</span>
                </div>
                <div className='col-1'>
                    <button className='btn btn-sm btn-danger float-right'
                            onClick={() => this.props.removeFromOrder(this.props.book.name)}
                    >X
                    </button>
                </div>

            </div>
            );
    }
}

export default OrderView;