import { apiServices } from '../../../services/api.service';
import { successHandler, errorHandler } from '../../../services/_helper';
import router from '../../../router';


export const getEvent = async ({ commit, dispatch }, { limit, offset, keyword, fromDate, toDate, eventFor }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.getEvent(limit, offset, keyword, fromDate, toDate, eventFor)
		.then(
			(response) => {
				
				commit("SET_LOADER", false, { root: true });
				commit("EVENT_DATA", response.data)
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
			commit("PAGE_DETAILS", response.data)
		},
		(error) => {
			commit("SET_LOADER", false, { root: true });
			errorHandler(error.response)
		}
	);
};
export const addEvent = async ({ commit, state }, { title, desc, eventDate, fromTime, toTime, eventFor, all, eventIds }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.addEvent(title, desc, eventDate, fromTime, toTime, eventFor, all, eventIds).then(
		(response) => {
			state.createModal=false
			
			response.data['title']=title
			response.data['desc']=desc
			response.data['eventDate']=eventDate
			response.data['fromTime']=fromTime
			response.data['toTime']=toTime
			response.data['all']=all
			commit("SET_LOADER", false, { root: true });
			commit("ADD_EVENT_DATA",response.data)
			successHandler('Added Successfully')
		},
		(error) => {
			commit("SET_LOADER", false, { root: true });
			errorHandler(error.response)
		}
	);
};
export const updateEvent = async ({ commit, state }, { title, desc, eventDate, fromTime, toTime, eventFor, all, eventIds, id }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.updateEvent(title, desc, eventDate, fromTime, toTime, eventFor, all, eventIds,id).then(
		(response) => {
			state.createModal=false
			
			commit("SET_LOADER", false, { root: true });
			commit("UPDATE_EVENT_DATA",response.data)
			successHandler('Update Successfully')
		},
		(error) => {
			commit("SET_LOADER", false, { root: true });
			errorHandler(error.response)
		}
	);
};
export const deleteEvent = async ({ commit, state }, { id }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.deleteEvent(id).then(
		(response) => {
			commit("SET_LOADER", false, { root: true });
			state.confirmModal=false
			commit("DELETE_EVENT", {id})
			successHandler('Deleted Successfully')
		},
		(error) => {
			commit("SET_LOADER", false, { root: true });
			errorHandler(error.response)
		}
	);
};