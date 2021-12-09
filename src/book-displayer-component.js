import React, { Component } from 'react';

class BookDisplayerComponent extends Component {

    constructor(props){
        super(props);
    }

  render() {
        return(
            <div>
                <h1>{this.props.book.name}</h1>
                <p>{this.props.book.author}</p>
            </div>
        )
    }
}

export default BookDisplayerComponent;