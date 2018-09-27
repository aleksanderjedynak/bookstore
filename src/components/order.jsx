import React from 'react';
import OrderView from './orderView'

class Order extends React.Component {
    render(){

        const orderBooks = this.props.order.map( (order ,index)=> {

            return (<OrderView book={order} key={index} removeFromOrder={this.props.removeFromOrder}/>);
        });

        return(
            <div className='col-6'>
                <h2>Your order:</h2>
                {orderBooks}
            </div>
        );
    };
}

export default Order;