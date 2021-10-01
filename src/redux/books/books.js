import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

const initialState = {
  loading: false,
  books: [],
  error: '',
};
const requestURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PARTzQFiUGxxJHdSROzm/books';

export const addBook = (book) => {
  return (dispatch) => {
    axios.post(requestURL, { book })
    .then(response => {
        dispatch({
          type: ADD_BOOK,
          payload: response.data,
        })
        .catch(error => {
          console.log(error);
        });
      });
  };
};

export const removeBook = (book) => {
  return (dispatch) => {
    axios.delete(`${requestURL}/${book.item_id}`)
      .then(() => {
        dispatch({
          type: REMOVE_BOOK,
          book,
        });
      })
  };
};

// export const fetchApp = () => {
//     axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/')
//       .then(response => console.log(response.data));
// };

const fetchBooksRequest = () => {
  return {
    type: FETCH_BOOKS_REQUEST,
  };
};

const fetchBooksSuccess = (books) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: books,
  };
};

const fetchBooksFailure = (error) => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error,
  };
};

export const fetchBooks = () => {
  return (dispatch) => {
    dispatch(fetchBooksRequest);
    axios.get(requestURL)
      .then(response => {
        const books = response.data;
        dispatch(fetchBooksSuccess(books));
      })
      .catch(error => {
        const errMsg = error.message;
        dispatch(fetchBooksFailure(errMsg));
      })
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      const books = state.books.concat(action.payload);
      return {...state, books};
    case REMOVE_BOOK:
      const filteredBooks = state.books.filter((book) => book.item_id !== action.book.item_id);
      return {...state, books: filteredBooks};
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        error: '',
      };
    case FETCH_BOOKS_FAILURE:
      return {
        loading: false,
        books: [],
        error: action.payload,
      }
    default:
      return state;
  }
};

export default reducer;
