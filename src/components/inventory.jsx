import React from 'react';

class Inventory extends React.Component {
    constructor( props ) {
        super( props );

    }


    render(){
        return(
            <div className='col-4 inventory'>
                <i>Inventory</i>
            </div>
        );
    };
}

export default Inventory;