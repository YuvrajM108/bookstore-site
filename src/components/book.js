import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  title,
  author,
  genre,
  removeBookFunc,
}) => (
  <div className="item">
    <div className="item-left">
      <div className="book-details">
        <h5 className="book-genre">{genre}</h5>
        <h2 className="book-title">{title}</h2>
        <h3 className="book-author">{author}</h3>
      </div>
      <div className="book-links">
        <a className="book-link" href="/#">Comments</a>
        <a className="book-link" href="/#" onClick={removeBookFunc}>Remove</a>
        <a className="book-link" href="/#">Edit</a>
      </div>
    </div>
    <div className="book-progress">
      <h1 className>60%</h1>
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
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  removeBookFunc: PropTypes.func.isRequired,
};

export default Book;
