import React from 'react';

const bookList = props => {
    const bookDetail = props.books.map(book => 
    <li key={book.isbn} className="li-book"><strong>{book.isbn}  {book.title}</strong>, {book.author}</li>
    )


return (
    <ul>
        {bookDetail}
    </ul>
);

};

export default bookList;