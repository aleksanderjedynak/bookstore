import React from 'react';
import Order from './order';
import Inventory from './inventory';
import Header from './header';
import Footer from './footer';

class App extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            order: [],
        };
    }

    addToOrder = (book) => {
        this.setState({
            order: [...this.state.order, book],
        });
    };

    removeFromOrder = (title) => {
        this.setState({
            order: this.state.order.filter( book => title!==book.name)
        });
    };


    render(){
        return(
            <div>
                <div className='app container'>
                    <Header />
                    <div className='row'>
                        <Order order={this.state.order} removeFromOrder={this.removeFromOrder}/>
                        <Inventory books={this.state.books} addToOrder={this.addToOrder}/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    };
}

export default App;