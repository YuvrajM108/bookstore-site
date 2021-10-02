import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import BookForm from './createNewBook';
import Book from './book';
import { addBook, removeBook, fetchBooks } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const submitBook = (book) => {
    const newBook = {
      item_id: uuidv4(),
      title: book.title,
      category: book.category,
    };
    dispatch(addBook(newBook));
  };

  const deleteBook = (book) => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <main className="catalog">
      <div>
        { bookList.map((book) => (
          <Book
            key={bookList.indexOf(book)}
            title={book.title}
            category={book.category}
            removeBookFunc={() => { deleteBook(book); }}
          />
        )) }
      </div>
      <BookForm submitBookFunc={submitBook} />
    </main>
  );
};

export default connect(null, { addBook, removeBook })(Books);
