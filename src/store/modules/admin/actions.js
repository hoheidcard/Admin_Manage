import { errorHandler, successHandler } from "../../../services/_helper";
import { apiServices } from "../../../services/api.service";

export const getAdmin = async (
  { commit, dispatch },
  { limit, offset, keyword, status }
) => {
  commit("SET_LOADER", true, { root: true });
  // commit("SET_LOADER_BUTTON", true);
  await apiServices.getAdmin(limit, offset, keyword, status).then(
    (response) => {
      commit("ALL_ADMIN", response.data);
      commit("SET_LOADER", false, { root: true });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const getOneStaff = async ({ commit, dispatch }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getOneStaff(id).then(
    (response) => {
      commit("STAFF_DETAILS", response.data);
      commit("SET_LOADER", false, { root: true });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const addAdmin = async (
  { commit, state },
  { phoneNumber, password, name, emailId, gender, dob, roles }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .addAdmin(phoneNumber, password, name, emailId, gender, dob, roles)
    .then(
      (response) => {
        commit("SET_LOADER", false, { root: true });
        response.data["phoneNumber"] = phoneNumber;
        response.data["staffDetail"] = { name, emailId, gender, dob, roles };
        state.adminModal = false;
        commit("ADD_ADMIN", response.data);
        successHandler("Added Successfully!");
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};
export const updateAdmin = async (
  { commit },
  { id, name, emailId, gender, dob }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateStaff(id, name, emailId, gender, dob).then(
    async (response) => {
      commit("UPDATE_STAFF", response.data);
      commit("SET_LOADER", false, { root: true });
      successHandler("Staff Updated Successfully!");
    },
    (error) => {
      errorHandler(error.response);
      commit("SET_LOADER", false, { root: true });
    }
  );
};

export const uploadProfileImage = async ({ commit }, { file }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.uploadProfileImage(file).then(
    async (response) => {
      commit("UDATE_IMAGE_PROPOSAL", response.data);
      successHandler("Image uploaded successfully!");
      commit("SET_LOADER", false, { root: true });
    },
    (error) => {
      errorHandler(error.response, "User");
      commit("SET_LOADER", false, { root: true });
    }
  );
};

export const updatePermission = async ({ commit }, { menu }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updatePermission(menu).then(
    async (response) => {
      successHandler("Permission update successfully!");
      commit("SET_LOADER", false, { root: true });
    },
    (error) => {
      errorHandler(error.response, "User");
      commit("SET_LOADER", false, { root: true });
    }
  );
};

export const updateAdminStatus = async ({ commit, state }, { id, status }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateAdminStatus(id, status).then(
    (response) => {
      state.statusModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Update Successfully");
      commit("UPDATE_STAFF_STATUS", { id, status });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
