export const error = async ({ dispatch }, { msg }) => {
  dispatch('notify', { type: 'danger', message: msg }, { root: true });

};
export const success = async ({ dispatch }, { msg }) => {
  dispatch('notify', { type: 'success', message: msg }, { root: true });
};
