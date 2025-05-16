export const SET_LOAD_MORE = (state, status) => {
  state.loadMore = status;
};
export const SET_LOADER_BUTTON = (state, status) => {
  state.loaderButton = status;
};
export const SET_DATA_LOADER = (state, status) => {
  state.dataLoader = status;
};
export const ALL_BOOKS_DATA = (state, data) => {
  state.bookData = data.result;
  state.totalBook = data.total;
};

export const UPDATE_BOOKS = (state, data) => {
  const objIndex = state.bookData.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.bookData[objIndex] = data
  }
};

export const UPDATE_BOOKS_STATUS = (state, data) => {
  const objIndex = state.bookData.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.bookData[objIndex].status = data.status
  }
};

export const UPDATE_IMAGE = (state, data) => {
  const objIndex = state.bookData.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.bookData[objIndex].image = data.image
  }
};
