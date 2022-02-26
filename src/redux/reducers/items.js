export const SET_ITEMS = 'SET_ITEMS';
export const SET_LOADING = 'SET_LOADING';
export const SET_CURRENT = 'SET_CURRENT';
export const SET_DELETE = 'SET_DELETE';
export const SET_MODAL = 'SET_MODAL';
export const SET_SORT = 'SET_SORT';

const initialState = {
  items: [],
  loading: false,
  currentPage: 1,
  itemsPerPage: 27,
  modal: false,
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: [...action.payload] };

    case SET_LOADING:
      return { ...state, loading: action.payload };

    case SET_CURRENT:
      return { ...state, currentPage: action.payload };

    case SET_DELETE:
      const newItems = state.items.filter((item) => {
        return item.id !== action.payload;
      });
      return { ...state, items: [...newItems] };

    case SET_MODAL:
      return { ...state, modal: action.payload };

    case SET_SORT:
      const oldArr = state.items.filter((item) => {
        return item.albumId !== action.payload;
      });
      const newArr = state.items.filter((item) => {
        return item.albumId === action.payload;
      });
      return { ...state, items: [...newArr, ...oldArr] };

    default:
      return state;
  }
};

export default items;

export const setItems = (items) => {
  return {
    type: SET_ITEMS,
    payload: items,
  };
};

export const setLoading = (value) => {
  return {
    type: SET_LOADING,
    payload: value,
  };
};

export const setCurrentPage = (pageNumber) => {
  return {
    type: SET_CURRENT,
    payload: pageNumber,
  };
};

export const setDelete = (id) => {
  return {
    type: SET_DELETE,
    payload: id,
  };
};

export const setModal = (value) => {
  return {
    type: SET_MODAL,
    payload: value,
  };
};

export const setSort = (albumId) => {
  return {
    type: SET_SORT,
    payload: albumId,
  };
};
