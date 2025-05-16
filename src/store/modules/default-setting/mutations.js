export const SET_DATA = (state, data) => {
  state.data = data.result;
};

export const ADD_DATA = (state, data) => {
  state.data.push(data);
};

export const UPDATE_DATA = (state, data) => {
  const objIndex = state.data.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.data[objIndex].name = data.payload.name;
    state.data[objIndex].priority = data.payload.priority;
  }
};

export const DELETE_DATA = (state, id) => {
  const objIndex = state.data.findIndex((obj) => obj.id === id);
  if (objIndex >= 0) {
    state.data.splice(objIndex, 1);
  }
};
