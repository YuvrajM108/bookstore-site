import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  title,
  category,
  removeBookFunc,
}) => (
  <div className="item">
    <div className="item-left">
      <div className="book-details">
        <h5 className="book-category">{category}</h5>
        <h2 className="book-title">{title}</h2>
      </div>
      <div className="book-links">
        <button type="button" className="book-link" onClick={removeBookFunc}>Remove</button>
      </div>
    </div>
    <div className="book-progress">
      <h1 className="book-percentage">60%</h1>
    </div>
    <div className="item-right">
      <div className="chapter-details">
        <div className="chapter-heading">CURRENT CHAPTER</div>
        <div className="chapeter-name">Chapter 3</div>
      </div>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBookFunc: PropTypes.func.isRequired,
};

export default Book;
