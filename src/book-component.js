import React, { Component } from 'react';

import BookDisplayerComponent from './book-displayer-component';

const books = [
    {
        name: "Java",
        author: "James Gosling"
    },
    {
        name: "PHP",
        author: "Vikram Vaswani"
    },
    {
        name: "React",
        author: "Ediciones Aguilar"
    },
    {
        name: "Angular",
        author: "Christoffer"
    },
];
class BookComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {books.map(book => <BookDisplayerComponent book={book} />)}
            </div>
        ) 
    }
}
 
export default BookComponent;