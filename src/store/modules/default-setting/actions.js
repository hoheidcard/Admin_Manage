import { errorHandler, successHandler } from "../../../services/_helper";
import { apiServices } from "../../../services/api.service";

export const getDefaultSetting = async (
  { commit },
  { settingType, settingFor }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getDefaultSetting(settingType, settingFor).then(
    (response) => {
      commit("SET_DATA", response.data);
      commit("SET_LOADER", false, { root: true });
    },
    (error) => {
      commit("SET_DATA", []);
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const createDefaultSetting = async ({ commit, state }, payload) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.createDefaultSetting(payload).then(
    (response) => {
      payload.id = response.data.id;
      commit("ADD_DATA", payload);
      state.createModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Added Successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const updateDefaultSetting = async (
  { commit, state },
  { id, payload }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateDefaultSetting(id, payload).then(
    (response) => {
      commit("UPDATE_DATA", { id, payload });
      state.createModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Updated Successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const bulkDefaultSetting = async ({ commit }, payload) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.bulkDefaultSetting(payload).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      successHandler("Updated Successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const deleteDefaultSetting = async ({ commit, state }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.deleteDefaultSetting(id).then(
    (response) => {
      commit("DELETE_DATA", id);
      state.deleteModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Deleted Successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
