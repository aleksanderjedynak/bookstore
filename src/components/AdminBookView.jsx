import React from 'react';

class AdminBookView extends React.Component{

    render(){
        return(
            <div className='adminBookView row'>
                <div className='col-8'>
                    <b>
                        Name:<strong>{this.props.book.name}</strong> Author:{this.props.book.author}
                    </b>
                </div>
                <div className='col-4'>
                    <button className='btn btn-danger float-right'
                            onClick={() => this.props.removeFromInventory(this.props.book.name)}
                    >Remove
                    </button>
                </div>

            </div>
            );
    }
}

export default AdminBookView;