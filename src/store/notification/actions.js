export const notify = ({ commit }, notification) => {
  commit('PUSH_NOTIFICATION', notification)
}

export const removeNotification = ({ commit }) => {
  commit('REMOVE_NOTIFICATION', null)
}

export const asideMobileToggle = ({ commit, state }, payload = null) => {
	const isShow = payload !== null ? payload : !state.isAsideMobileExpanded;

	document.getElementById('app').classList[isShow ? 'add' : 'remove']('ml-60', 'lg:ml-0');

	document.documentElement.classList[isShow ? 'add' : 'remove']('m-clipped');

	commit('basic', {
		key: 'isAsideMobileExpanded',
		value: isShow,
	});
};

export const asideLgToggle = ({ commit, state }, payload = null) => {
	commit('basic', {
		key: 'isAsideLgActive',
		value: payload !== null ? payload : !state.isAsideLgActive,
	});
};

export const fullScreenToggle = ({ commit, state }, value) => {
	commit('basic', { key: 'isFullScreen', value });

	document.documentElement.classList[value ? 'add' : 'remove']('full-screen');
};
