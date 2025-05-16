export const SET_DATA = (state, data) => {
  state.data = data.result;
  state.total = data.total;
};

export const SET_DETAIL = (state, data) => {
  state.detail = data;
};

export const UPDATE_STATUS = (state, data) => {
  const objIndex = state.data.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.data[objIndex].status = data.status;
  }
};
