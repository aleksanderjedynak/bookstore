import React from 'react';

class Order extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='col-4 order'>
                <i>Order</i>
            </div>
        );
    };
}

export default Order;