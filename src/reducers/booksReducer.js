/* ADD, DELETE OR UPDATE A BOOK */ 
import books from "../books";
import AddBook from "../components/AddBook";

const addBook = (state, thisBook) => {
    const booksArray = [...state];
    booksArray.push(thisBook.payload);
    return booksArray;
}

const deleteBook = (state, bookIndex) => {
    const copyOfBooks = [...state];

    copyOfBooks.splice(bookIndex, 1);
    return copyOfBooks;
}

// find the book in state that has the matching name value and update
    // 
const updateBook = (state, newBook, previousBookIndex) => {
    const copyOfBooks = [...state];

    copyOfBooks.splice(previousBookIndex, 1, newBook);
    return copyOfBooks;
}

const booksReducer = (state = books, action) => {
    switch(action.type){
        case 'ADD_BOOK':{
            return addBook(state, action)
        }
        case 'DELETE_BOOK':
            return deleteBook(state, action.payload)
        case 'UPDATE_BOOK':
            return updateBook(state, action.payload[0], action.payload[1])
        default:
            return state
    }
}

export default booksReducer;