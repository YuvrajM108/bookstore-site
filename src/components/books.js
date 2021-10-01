import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import BookForm from './createNewBook';
import Book from './book';
import { addBook, removeBook, fetchBooks } from '../redux/books/books';
import store from '../redux/configureStore';

const Books = () => {
  const dispatch = useDispatch();
  const [bookData, setBookData] = useState(store.getState().booksReducer);
  const bookList = bookData.books;

  useEffect(() => {
    fetchBooks();
  }, []);

  const submitBook = (book) => {
    const newBook = {
      item_id: uuidv4(),
      title: book.title,
      //author: book.author,
      category: book.category,
    };
    dispatch(addBook(newBook));
    setBookData((prevState) => prevState.books.concat(newBook));
    //fetchApp();
  };

  const deleteBook = (book) => {
    dispatch(removeBook(book));
    const newBook = bookList.filter((item) => item.item_id !== book.item_id);
    setBookData({
      loading: false,
      books: newBook,
      error: '',
    });
  };

  return bookData.loading ? (
    <h2>Loading Books...</h2>
  ) : bookData.error ? (
    <h2>{bookData.error}</h2>
  ) : (
    <main className="catalog">
      <div>
        { bookData &&
          bookData.books &&
          bookData.books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            genre={book.genre}
            removeBookFunc={() => {
              deleteBook(book);
            }}
          />
        )) }
      </div>
      <BookForm submitBookFunc={submitBook} />
    </main>
  );
};

export default connect(null, { addBook })(Books);
