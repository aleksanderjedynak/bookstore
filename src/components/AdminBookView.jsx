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
                    <div className="btn-toolbar" role="group">
                        <div className="btn-group mr-1" role="group">
                            <button className='btn btn-dark float-right'
                                    onClick={() => this.props.editFromInventory(this.props.book)}
                            >Edit
                            </button>
                        </div>
                        <div className="btn-group" role="group">
                            <button className='btn btn-danger float-right'
                                    onClick={() => this.props.removeFromInventory(this.props.book.name)}
                            >X
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default AdminBookView;