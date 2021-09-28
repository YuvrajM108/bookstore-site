import BookForm from './createNewBook';

const Books = () => (
  <main className="catalog">
    <div className="item">
      <div className="item-left">
        <div className="book-details">
          <h5 className="book-genre">TRAGEDY</h5>
          <h2 className="book-title">Macbeth</h2>
          <h3 className="book-author">William Shakespeare</h3>
        </div>
        <div className="book-links">
          <a className="book-link" href="/#">Comments</a>
          <a className="book-link" href="/#">Remove</a>
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
    <BookForm />
  </main>
);

export default Books;
