export const SET_LOAD_MORE = (state, status) => {
  state.loadMore = status;
};

export const SET_DATA_LOADER = (state, status) => {
  state.dataLoader = status;
};

export const PAGE_DATA = (state, data) => {
  state.pageData = data;
};
export const PAGE_DETAILS = (state, data) => {
  state.desc = data.desc
  state.id = data.id
  state.title = data.title
}

