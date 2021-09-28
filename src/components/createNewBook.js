const BookForm = () => (
  <div className="form-section">
    <h3>ADD NEW BOOK</h3>
    <form className="new-book-form">
      <input className="new-book-field" placeholder="Book title"></input>
      <input className="new-book-field" placeholder="Book author"></input>
      <select className="new-book-field" placeholder="Category">
        <option value="tragedy">Tragedy</option>
        <option value="fiction">Fiction</option>
        <option value="action">Action</option>
      </select>
      <button type="submit" className="submit-book">ADD BOOK</button>
    </form>
  </div>
);

export default BookForm;
