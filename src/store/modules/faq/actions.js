import { apiServices } from '../../../services/api.service';
import { successHandler, errorHandler } from '../../../services/_helper';
import router from '../../../router';

export const getFaq = async ({ commit, dispatch }, { limit,offset,keyword,status }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.getFaq(limit,offset,keyword,status).then(
		(response) => {
			
			commit("SET_LOADER", false, { root: true });
			commit("FAQ_DATA",response.data)
		},
		(error) => {
			commit("SET_LOADER", false, { root: true });
			errorHandler(error.response)
		}
	);
};

export const addFaq = async ({ commit, state }, { question,answer,changeStatus }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.addFaq(question,answer).then(
		(response) => {
			
			response.data['question']=question
			response.data['answer']=answer
			response.data['changeStatus']=changeStatus
			state.faqModal=false
			commit("SET_LOADER", false, { root: true });
			successHandler('Added Successfully')
			commit("ADD_FAQ_DATA",response.data)
		},
		(error) => {
			commit("SET_LOADER", false, { root: true });
			errorHandler(error.response)
		}
	);
};
export const updateFaq = async ({ commit, state }, { id,answer }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.updateFaq(id,answer).then(
		(response) => {
			
			state.faqModal=false
			commit("SET_LOADER", false, { root: true });
			successHandler('Update Successfully')
			commit("UPDATE_FAQ_DATA",response.data)
		},
		(error) => {
			commit("SET_LOADER", false, { root: true });
			errorHandler(error.response)
		}
	);
};

export const updateFaqStatus = async ({ commit, state }, { id,status }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.updateFaqStatus(id,status).then(
		(response) => {
			
			state.statusModal=false
			commit("SET_LOADER", false, { root: true });
			successHandler('Update Successfully')
			commit("UPDATE_FAQ_STATUS",{id,status})
		},
		(error) => {
			commit("SET_LOADER", false, { root: true });
			errorHandler(error.response)
		}
	);
};
