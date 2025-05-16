import { errorHandler, successHandler } from "../../../services/_helper";
import { apiServices } from "../../../services/api.service";

export const getBlogsByStatus = async ({ commit }, { limit, offset, keyword, status }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getBlogsByStatus(limit, offset, keyword, status).then(
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

export const createBlog = async (
  { commit, state },
  { title, author, desc }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.createBlog(title, author, desc).then(
    (response) => {
      state.addModal = false;
      commit("SET_LOADER", false, { root: true });
      // commit("ADD_DATA", { id: response.data.id, title });
      successHandler("Blog created successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const updateBlog = async (
  { commit, state },
  { id, title, author, desc }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateBlog(id, title, author, desc).then(
    (response) => {
      state.addModal = false;
      commit("SET_LOADER", false, { root: true });
      commit("UPDATE_DATA", { id, title, desc });
      successHandler("Blog updated successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const updateBlogImage = async ({ commit, state }, { id, file }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateBlogImage(id, file).then(
    (response) => {
      state.imageModal = false;
      commit("SET_LOADER", false, { root: true });
      commit("UPDATE_IMAGE", { id, image: response.data.image });
      successHandler("Blog image updated successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const updateBlogtatus = async ({ commit, state }, { id, status }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateBlogStatus(id, status).then(
    (response) => {
      state.statusModal = false;
      commit("SET_LOADER", false, { root: true });
      commit("UPDATE_STATUS", { id, status });
      successHandler("Blog status updated successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
