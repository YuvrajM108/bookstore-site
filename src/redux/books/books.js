import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';

const initialState = [];

const requestURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PARTzQFiUGxxJHdSROzm/books';

export const addBook = (book) => async (dispatch) => {
  const res = await axios.post(requestURL, {
    item_id: book.item_id,
    title: book.title,
    category: book.category,
  });
  const result = res.data;
  if (result === 'Created') {
    dispatch({
      type: ADD_BOOK,
      book,
    });
  }
};

export const removeBook = (bookId) => async (dispatch) => {
  const res = await axios.delete(`${requestURL}/${bookId}`);
  const resposeData = await res.data;
  if (resposeData) {
    dispatch({
      type: REMOVE_BOOK,
      bookId,
    });
  }
};

const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const fetchBooks = () => async (dispatch) => {
  const res = await axios.get(requestURL);
  const resposeData = res.data;
  if (resposeData) {
    const bookArr = Object.entries(resposeData);
    const arrayOfBooks = [];
    bookArr.forEach(([key, value]) => {
      const listItem = { ...value, item_id: key };
      const listObj = Object.values(listItem);
      arrayOfBooks.push({ ...listObj[0], item_id: listObj[1] });
    });
    dispatch(fetchBooksSuccess(arrayOfBooks));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.bookId);
    case FETCH_BOOKS_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
