/**
  1. It should be a single page with book details, the main page should have a book list
    showing book name, price, category and a delete button at the end for each book.
    There should be an add button at the top so the user can add a book.
  
  2. Once click add a book button, it should popup a page, let the user add a book (
    name, price, category and description ).
  
  3. The book should be clickable, if the user clicks the book, it will show a popup page,
    letting the user be able to modify the book name, price, category and description. After
    modification: the book details should be updated in the main page.

  4. Once clicked delete button, the book should be deleted from the main page/
*/

import './App.css';
import Books from "./components/Books";
import AddBook from './components/AddBook';
import Popup from 'reactjs-popup';

function App() {

  // Dummy {book} to pass down as prop when the 'Add Book' button is clicked
  // this will be the initial state the 'AddBook' component load
  const book = {
    name:'',
    price: 0,
    description: '',
    category: '',
    image: ''
  }
  
  return (
    <div className="App wrapper">
      <header>
        <h1>Bookstore</h1>
        <Popup
          trigger={<button type="button">Add book</button>}
          position="top left"
          modal
        >
          <AddBook action={"Add Book"} book={ book }/>
        </Popup>
      </header>
      <Books />
    </div>
  );
}

export default App;
