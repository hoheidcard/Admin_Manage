import { errorHandler, successHandler } from "../../../services/_helper";
import { apiServices } from "../../../services/api.service";

export const getBannersByStatus = async (
  { commit },
  { limit, offset, keyword, status }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getBannersByStatus(limit, offset, keyword, status).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      commit("SET_DATA", response.data);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const createBannerImage = async ({ commit, state }, { type,date, file }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.createBannerImage(type, date, file).then(
    (response) => {
      state.addModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Banner image uploaded successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const updateBannerImage = async ({ commit, state }, { id, file }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateBannerImage(id, file).then(
    (response) => {
      state.imageModal = false;
      commit("SET_LOADER", false, { root: true });
      commit("UPDATE_IMAGE", { id, image: response.data.image });
      successHandler("Banner image updated successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const updateBannertatus = async ({ commit, state }, { id, status }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateBannerStatus(id, status).then(
    (response) => {
      state.statusModal = false;
      commit("SET_LOADER", false, { root: true });
      commit("UPDATE_STATUS", { id, status });
      successHandler("Banner status updated successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
