import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { deleteThisBook } from "../actions";
import Button from './Button';
import AddBook from "./AddBook";
import Modal from './Modal';

 const Books = () => {

    // gets all the books from redux state and assign them to a local array
    const booksArr = useSelector(state => [...state]);
    const dispatch = useDispatch();

    // dispatch the (index) of the book to be deleted
    const deleteBook = (index) => {
        dispatch(deleteThisBook(index))
    }

    return (
        <>
            {
                booksArr.map((book, index) => {
                    return(
                        <article key={index}>
                            <figure>
                                
                                {/* Modal for user input */}
                                <Modal >
                                    <img src={book.image} alt={book.name} />
                                    <AddBook book={book} action={"Update Book"} bookIndex={index} />
                                </Modal>
                            </figure>
                            <div>
                                <h3>Name: { book.name }</h3>
                                <h4>Price: { book.price }</h4>
                                <h5>Category: { book.category }</h5>
                                <p>{ book.description }</p>
                                
                                <Button 
                                    buttonName={'Delete'} 
                                    handleDelete={ deleteBook } 
                                    bookId={ index } 
                                />
                            </div>
                        </article>
                    )
                })
            }
        </>
    )
}

export default Books;
