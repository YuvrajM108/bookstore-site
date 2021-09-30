import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import BookForm from './createNewBook';
import Book from './book';
import { addBook, removeBook } from '../redux/books/books';
import store from '../redux/configureStore';

const Books = () => {
  const dispatch = useDispatch();
  const [bookList, setBookList] = useState(store.getState().booksReducer);

  const submitBook = (book) => {
    const newBook = { id: uuidv4(),
      title: book.title,
      author: book.author,
      genre: book.genre
    };
    dispatch(addBook(newBook));
    setBookList((prevState) => [...prevState, newBook]);
  };

  const deleteBook = (book) => {
    dispatch(removeBook(book));
    const newBook = bookList.filter((item) => item.id !== book.id);
    setBookList(newBook);
  };

  return(<main className="catalog">
    <div>
    {bookList.map((book) => (<Book key={book.id} title={book.title} author={book.author} genre={book.genre} removeBookFunc={() => {deleteBook(book)}} />))}
    </div>
    <BookForm submitBookFunc={submitBook} />
  </main>
  );
};

export default Books;
