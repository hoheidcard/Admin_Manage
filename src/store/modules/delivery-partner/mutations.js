export const SET_DATA = (state, data) => {
  state.data = data.result;
  state.total = data.total;
  state.data.forEach(element => {
    element['name'] = element.title
  });
};
export const ADD_DATA = (state, data) => {
  if (state.data?.length < 10) {
    state.data.push(data);
  }
  state.total = state.total + 1;
};
export const DELETE_DATA = (state, data) => {
  const objIndex = state.data.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.data.splice(objIndex, 1);
    state.total = state.total - 1;
  }
};
