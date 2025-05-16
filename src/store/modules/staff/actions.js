import { errorHandler, successHandler } from "../../../services/_helper";
import { apiServices } from "../../../services/api.service";

export const getStaff = async (
  { commit, dispatch },
  { limit, offset, keyword, status }
) => {
  commit("SET_LOADER", true, { root: true });
  // commit("SET_LOADER_BUTTON", true);
  await apiServices.getStaff(limit, offset, keyword, status).then(
    (response) => {
      commit("ALL_STAFF", response.data);
      commit("SET_LOADER", false, { root: true });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const getMyStaff = async (
  { commit, dispatch },
  { limit, offset, keyword, status }
) => {
  commit("SET_LOADER", true, { root: true });
  // commit("SET_LOADER_BUTTON", true);
  await apiServices.getMyStaffList(limit, offset, keyword, status).then(
    (response) => {
      commit("ALL_STAFF", response.data);
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
export const addStaff = async (
  { commit, state },
  {
    phoneNumber,
    password,
    name,
    emailId,
    gender,
    dob,
    designationId,
    designationName,
  }
) => {
  commit("SET_LOADER_BUTTON", true);
  await apiServices
    .addMyStaff(
      phoneNumber,
      name,
      emailId,
      gender,
      password,
      dob,
      designationId
    )
    .then(
      (response) => {
        response.data["account"] = { phoneNumber };
        response.data["name"] = name;
        response.data["emailId"] = emailId;
        response.data["gender"] = gender;
        response.data["dob"] = dob;
        response.data["designation"] = { name: designationName };
        response.data["designationId"] = designationId;
        state.staffModal = false;
        commit("ADD_STAFF", response.data);
        commit("SET_LOADER_BUTTON", false);
        successHandler("Staff Added Successfully!");
      },
      (error) => {
        commit("SET_LOADER_BUTTON", false);
        errorHandler(error.response);
      }
    );
};
export const updateStaff = async (
  { commit },
  { id, name, emailId, gender, dob, designationId, designationName }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .updateStaff(id, name, emailId, gender, dob, designationId)
    .then(
      async (response) => {
        response.data["designation"] = designationName;

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

export const updateStaffStatus = async ({ commit, state }, { id, status }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateStaffStatus(id, status).then(
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
