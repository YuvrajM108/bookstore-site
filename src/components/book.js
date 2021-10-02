import React from 'react';
import PropTypes from 'prop-types';
import pieChart from '../images/progress.jpg';

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
      <img src={pieChart} alt="Progress Chart" width="170px" height="150px" />
      <h1 className="book-percentage">60%</h1>
    </div>
    <div className="item-right">
      <div className="chapter-details">
        <h4 className="chapter-heading">CURRENT CHAPTER</h4>
        <h3 className="chapter-name">Chapter 12</h3>
      </div>
      <button type="button" className="update-progress">UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBookFunc: PropTypes.func.isRequired,
};

export default Book;
