export const PUSH_NOTIFICATION = (state, notification) => {
  state.notification = notification
}

export const REMOVE_NOTIFICATION = (state, data) => {
  state.notification = data
}

/* A fit-them-all commit */
export const basic = (state, payload) => {
	state[payload.key] = payload.value;
};

export const SET_LOADER = (state, status) => {
  state.loader = status;
};
