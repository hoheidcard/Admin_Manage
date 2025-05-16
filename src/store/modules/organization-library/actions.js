import router from "../../../router";
import { errorHandler, successHandler } from "../../../services/_helper";
import { apiServices } from "../../../services/api.service";

export const getBooks = async ({ commit, dispatch }, { limit, offset, keyword, status, organizationDetailId }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getBooks(limit, offset, keyword, status, organizationDetailId).then(
    (response) => {
      
      commit("ALL_BOOKS_DATA", response.data);
      commit("SET_LOADER", false, { root: true });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const getOneStudent = async ({ commit, dispatch }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getOneStudent(id).then(
    (response) => {
      
      commit("STUDENT_DETAILS", response.data);
      commit("SET_LOADER", false, { root: true });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const addBooks = async ({ commit, state }, { name, shortDesc, quantity, author, code, bookCategoryId, classListId, file, organizationDetailId }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.addBooks(name, shortDesc, quantity, author, code, bookCategoryId, classListId, file, organizationDetailId)
    .then((response) => {
      
      state.libraryModal=false
      commit("SET_LOADER", false, { root: true });
      successHandler("Added Successfully!");
    },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};
export const editBooks = async ({ commit, state }, { name, shortDesc, quantity, author, code, bookCategoryId, classListId, organizationDetailId, id,bookCategory,className }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.editBooks(name, shortDesc, quantity, author, code, bookCategoryId, classListId, organizationDetailId, id)
    .then((response) => {
      
      state.libraryModal=false
      response.data["bookCategory"]={id:bookCategoryId,name:bookCategory}
      response.data["classList"]={id:classListId,name:className}
      commit("SET_LOADER", false, { root: true });
      commit("UPDATE_BOOKS",response.data)
      successHandler("Update Successfully!");
    },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};


export const updateBooksStatus = async ({ commit, state }, { id, status }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateBooksStatus(id, status).then(
    (response) => {
      
      state.statusModal = false
      commit("SET_LOADER", false, { root: true });
      successHandler('Update Successfully')
      commit("UPDATE_BOOKS_STATUS", { id, status })
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response)
    }
  );
};

export const updateImage = async ({ commit, state }, { id, file }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateImage(id, file).then(
    (response) => {
      
      state.fileUploadModal = false
      commit("SET_LOADER", false, { root: true });
      successHandler('Update Successfully')
      commit("UPDATE_IMAGE", response.data)
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response)
    }
  );
};
