import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({
  submitBookFunc,
}) => {
  const valRef = useRef([]);
  const val = ['title', 'author', 'genre'];
  useEffect(() => {
    if (val.length !== 0) {
      valRef.current[0].focus();
    }
  }, [val]);

  const addBook = (e) => {
    e.preventDefault();
    if (valRef.current[0].value && valRef.current[1].value && valRef.current[2].value) {
      const newBook = {
        title: valRef.current[0].value,
        author: valRef.current[1].value,
        genre: valRef.current[2].value,
      };
      submitBookFunc(newBook);
      valRef.current[0].value = '';
      valRef.current[1].value = '';
      valRef.current[2].value = '';
    }
  };

  return (
    <div className="form-section">
      <h3>ADD NEW BOOK</h3>
      <form className="new-book-form" onSubmit={addBook}>
        <input className="new-book-field" placeholder="Book title" ref={(el) => { valRef.current[0] = el; }} />
        <input className="new-book-field" placeholder="Book author" ref={(el) => { valRef.current[1] = el; }} />
        <input className="new-book-field" placeholder="Book genre" ref={(el) => { valRef.current[2] = el; }} />
        <button type="submit" className="submit-book">ADD BOOK</button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  submitBookFunc: PropTypes.func.isRequired,
};

export default BookForm;
