import React from 'react';
import OrderView from './orderView'

class Order extends React.Component {
    render(){
        let orderPrice = 0;
        const orderBooks = this.props.order.map( (order ,index)=> {
            orderPrice += isNaN(parseInt(order.price)) ? 0 : parseInt(order.price);
            return (<OrderView book={order} key={index} removeFromOrder={this.props.removeFromOrder}/>);
        });
        return(
            <div className='col-6'>
                <div className='row'>
                    <div className='col-6'>
                        <h2>Your order:</h2>
                    </div>
                    {orderPrice > 0&&
                        (<div className='col-6 '>
                            <div className='float-right'>
                                <u>Your price: </u>
                                <strong>{orderPrice}</strong>
                            </div>
                        </div>)
                    }
                </div>
                {orderBooks}
            </div>
        );
    };
}

export default Order;