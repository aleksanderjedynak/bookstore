import React from 'react';

class BookForm extends React.Component{
    render() {
        return (
            <div className='row justify-content-star'>
                <div className='col-4'>
                    <form onSubmit={(event) => this.props.handleAddNewBook(event)}>
                        <div className='form-group'>
                            <input
                                value={this.props.book.name}
                                type="text"
                                placeholder='Book name'
                                id='name'
                                name='name'
                                className='form-control'
                                onChange={this.props.handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                value={this.props.book.author}
                                type="text"
                                placeholder='Book author'
                                id='author'
                                name='author'
                                className='form-control'
                                onChange={this.props.handleChange}
                            />
                        </div>
                        <div className='form-group'>
                        <textarea
                            value={this.props.book.description}
                            placeholder='Book description'
                            id='description'
                            name='description'
                            className='form-control'
                            onChange={this.props.handleChange}
                        />
                        </div>
                        <div className='form-check'>
                            <input
                                checked={this.props.book.bookOnStock}
                                type="checkbox"
                                id='bookOnStock'
                                name='bookOnStock'
                                className='form-check-input'
                                onChange={this.props.handleChange}
                            />
                            <label htmlFor="bookOnStock" className='form-check-label'>On stock</label>
                        </div>
                        <div className='form-group'>
                            <input
                                value={this.props.book.image}
                                type="text"
                                placeholder='Book image'
                                id='image'
                                name='image'
                                className='form-control'
                                onChange={this.props.handleChange}
                            />
                        </div>
                        <button type='submit' className='btn btn-primary'>Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default BookForm;