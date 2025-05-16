import { errorHandler, successHandler } from "../../../services/_helper";
import { apiServices } from "../../../services/api.service";

export const getCategoryByStatus = async (
  { commit },
  { limit, offset, keyword, status }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getCategoryByStatus(limit, offset, keyword, status).then(
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

export const getCategory = async ({ commit }, { limit, offset, keyword }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getCategory(limit, offset, keyword).then(
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

export const createCategory = async ({ commit, state }, { title, desc }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.createCategory(title, desc).then(
    (response) => {
      state.addModal = false;
      commit("SET_LOADER", false, { root: true });
      // commit("ADD_DATA", { id: response.data.id, title });
      successHandler("Category created successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const updateCategory = async (
  { commit, state },
  { id, title, desc }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateCategory(id, title, desc).then(
    (response) => {
      state.addModal = false;
      commit("SET_LOADER", false, { root: true });
      commit("UPDATE_DATA", { id, title, desc });
      successHandler("Category updated successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const updateCategoryImage = async ({ commit, state }, { id, file }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateCategoryImage(id, file).then(
    (response) => {
      state.imageModal = false;
      commit("SET_LOADER", false, { root: true });
      commit("UPDATE_IMAGE", { id, image: response.data.image });
      successHandler("Category image updated successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const updateCategorytatus = async (
  { commit, state },
  { id, status }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateCategoryStatus(id, status).then(
    (response) => {
      state.statusModal = false;
      commit("SET_LOADER", false, { root: true });
      commit("UPDATE_STATUS", { id, status });
      successHandler("Category status updated successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
