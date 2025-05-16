export const SET_LOAD_MORE = (state, status) => {
  state.loadMore = status;
};

export const SET_DATA_LOADER = (state, status) => {
  state.dataLoader = status;
};

export const DESIGNATION_DATA = (state, data) => {
  state.designationData = data.result;
  state.totalDesignation = data.total;
};
export const ADD_DESIGNATION = (state, data) => {
  if (state.designationData?.length < 10) {
    state.designationData.push(data)
  }
  state.totalDesignation = state.totalDesignation + 1
};
export const UPDATE_DESIGNATION = (state, data) => {
  const objIndex = state.designationData.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.designationData[objIndex] = data
  }
};
export const DELETE_DESIGNATION = (state, data) => {
  const objIndex = state.designationData.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.designationData.splice(objIndex,1)
    state.totalDesignation = state.totalDesignation - 1
  }
};
