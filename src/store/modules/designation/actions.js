import { errorHandler, successHandler } from "../../../services/_helper";
import { apiServices } from "../../../services/api.service";

export const getDesignation = async (
  { commit, dispatch },
  { limit, offset, keyword }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getDesignation(limit, offset, keyword).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      commit("DESIGNATION_DATA", response.data);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const getMyDesignation = async ({ commit, dispatch }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getMyDesignation().then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      commit("DESIGNATION_DATA", response.data);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const getMyDesignationBySetting = async ({ commit }, { settingId }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getMyDesignationBySetting(settingId).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      commit("DESIGNATION_DATA", response.data);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const addDesignation = async ({ commit, state }, { name, priority }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.addDesignation(name, priority).then(
    (response) => {
      state.designationModal = false;
      response.data["name"] = name;
      commit("SET_LOADER", false, { root: true });
      successHandler("Added Successfully");
      commit("ADD_DESIGNATION", response.data);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const addOtherDesignation = async (
  { commit, state },
  { settingId, name, priority }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.addOtherDesignation(settingId, name, priority).then(
    (response) => {
      state.designationModal = false;
      response.data["name"] = name;
      commit("SET_LOADER", false, { root: true });
      successHandler("Added Successfully");
      commit("ADD_DESIGNATION", response.data);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const updateDesignation = async (
  { commit, state },
  { id, name, priority }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateDesignation(id, name, priority).then(
    (response) => {
      state.designationModal = false;
      commit("SET_LOADER", false, { root: true });
      commit("UPDATE_DESIGNATION", response.data);
      successHandler("Update Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const deleteDesignation = async ({ commit, state }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.deleteDesignation(id).then(
    (response) => {
      state.confirmModal = false;
      response.data["id"] = id;
      commit("SET_LOADER", false, { root: true });
      commit("DELETE_DESIGNATION", response.data);
      successHandler("Deleted Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
