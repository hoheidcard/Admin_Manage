export const SET_DATA = (state, data) => {
  state.data = data.result;
  state.total = data.total;
};
export const SET_DETAIL = (state, data) => {
  state.detail = data;
};
export const ADD_DATA = (state, data) => {
  if (state.data?.length < 10) {
    state.data.push(data);
  }
  state.total = state.total + 1;
};
export const UPDATE_DATA = (state, data) => {
  const objIndex = state.data.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.data[objIndex].title = data.title;
  }
};
export const UPDATE_IMAGE = (state, data) => {
  const objIndex = state.data.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.data[objIndex].image = data.image;
  }
};
export const UPDATE_STATUS = (state, data) => {
  const objIndex = state.data.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.data[objIndex].status = data.status;
  }
};
