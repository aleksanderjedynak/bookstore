import React from 'react';
import OrderView from './orderView'

class Order extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        const orderBooks = this.props.order.map( (order ,index)=> {

            return (<OrderView book={order} key={index} removeFromOrder={this.props.removeFromOrder}/>);
        });

        return(
            <div className='col-4 order'>
                {orderBooks}
            </div>
        );
    };
}

export default Order;