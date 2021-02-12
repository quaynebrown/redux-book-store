export const addThisBook = (book) => {
    return{
        type: 'ADD_BOOK',
        payload: book
    }
}

export const deleteThisBook = (bookId) => {
    return {
        type: 'DELETE_BOOK',
        payload: bookId
    }
}

// take and array with 2 elements
// the first element is the new book
// the second element is the index of the book the be updated
export const updateThisBook = (books) => {
    return {
        type: 'UPDATE_BOOK',
        payload: books
    }
}