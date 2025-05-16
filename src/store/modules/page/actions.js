import { apiServices } from '../../../services/api.service';
import { successHandler, errorHandler } from '../../../services/_helper';
import router from '../../../router';


export const getPage = async ({ commit, dispatch }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.getPage().then(
		(response) => {
			commit("SET_LOADER", false, { root: true });
			commit("PAGE_DATA",response.data)
		},
		(error) => {
			commit("SET_LOADER", false, { root: true });
			errorHandler(error.response)
		}
	);
};

export const getPageDetails = async ({ commit, dispatch }, { id }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.getPageDetails(id).then(
		(response) => {
			commit("SET_LOADER", false, { root: true });
			commit("PAGE_DETAILS",response.data)
		},
		(error) => {
			commit("SET_LOADER", false, { root: true });
			errorHandler(error.response)
		}
	);
};
export const updatePage = async ({ commit, dispatch }, { id,desc }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.updatePage(id,desc).then(
		(response) => {
			commit("SET_LOADER", false, { root: true });
			commit("PAGE_DATA",response.data)
			successHandler('Update Successfully')
		},
		(error) => {
			commit("SET_LOADER", false, { root: true });
			errorHandler(error.response)
		}
	);
};