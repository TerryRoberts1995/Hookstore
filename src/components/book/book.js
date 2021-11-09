import React from 'react';

export default function Book(props) {
    const {title, author, review, genre, id} = props.book;

    return (
        <div className="book-container">
            <div className="title">{title}</div>
            <div className="author">{author}</div>
            <div className='genre'>{genre}</div>
            <div className='review'>{review}</div>

            <button onClick={() => props.handleDeleteClick(id)}>Delete</button>
            <button onClick={() => props.handleEditClick(props.book)}>Edit</button>
        </div>
    );
}