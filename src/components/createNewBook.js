import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({
  submitBookFunc,
}) => {
  const valRef = useRef([]);
  const val = ['title', 'category'];
  useEffect(() => {
    if (val.length !== 0) {
      valRef.current[0].focus();
    }
  }, [val]);

  const addBook = (e) => {
    e.preventDefault();
    if (valRef.current[0].value && valRef.current[1].value) {
      const newBook = {
        title: valRef.current[0].value,
        category: valRef.current[1].value,
      };
      submitBookFunc(newBook);
      valRef.current[0].value = '';
      valRef.current[1].value = '';
    }
  };

  return (
    <div className="form-section">
      <h3>ADD NEW BOOK</h3>
      <form className="new-book-form" onSubmit={addBook}>
        <input className="new-book-field" placeholder="Book title" ref={(el) => { valRef.current[0] = el; }} />
        <select className="new-book-field" defaultValue="Category" ref={(el) => { valRef.current[1] = el; }}>
          <option>Fantasy</option>
          <option>Science Fiction</option>
          <option>Poetry</option>
          <option>Philosophy</option>
        </select>
        <button type="submit" className="submit-book">ADD BOOK</button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  submitBookFunc: PropTypes.func.isRequired,
};

export default BookForm;
