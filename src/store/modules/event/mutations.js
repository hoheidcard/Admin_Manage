export const SET_LOAD_MORE = (state, status) => {
  state.loadMore = status;
};

export const SET_DATA_LOADER = (state, status) => {
  state.dataLoader = status;
};

export const EVENT_DATA = (state, data) => {
  state.eventData = data.result;
};

export const ADD_EVENT_DATA = (state, data) => {
  state.eventData.push(data);
};
export const UPDATE_EVENT_DATA = (state, data) => {
  const objIndex = state.eventData.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.eventData[objIndex]=data
  }
};
export const DELETE_EVENT = (state, data) => {
  const objIndex = state.eventData.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.eventData.splice(objIndex, 1)
  }
}

