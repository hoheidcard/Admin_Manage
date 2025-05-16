import router from "../../../router";
import { errorHandler, successHandler } from "../../../services/_helper";
import { apiServices } from "../../../services/api.service";

export const getOrganizationByCreator = async (
  { commit },
  { id, limit, offset, keyword, status, roles }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .getOrganizationByCreator(id, limit, offset, keyword, status, roles)
    .then(
      (response) => {
        commit("SET_LOADER", false, { root: true });
        commit("ORGANIZATION_DATA", response.data);
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};

export const getOrganization = async (
  { commit },
  { limit, offset, keyword, status, roles }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getOrganization(limit, offset, keyword, status, roles).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      commit("ORGANIZATION_DATA", response.data);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const getOneOrganization = async ({ commit, dispatch }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getOneOrganization(id).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      commit("ORGANIZATION_DETAILS", response.data);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const getOrganizationByType = async (
  { commit, dispatch },
  { limit, offset, keyword, type }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getOrganizationByType(limit, offset, keyword, type).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      if (type == "PARTNER" || type == "SUB PARTNER") {
        commit("PARTNER_EVENT_LIST", response.data);
      } else {
        commit("ORGANIZATION_EVENT_LIST", response.data);
      }
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const addOrganizationByCreator = async (
  { commit },
  {
    creatorId,
    phoneNumber,
    singleMultiType,
    roles,
    password,
    name,
    address,
    pincode,
    city,
    stateName,
    contactNo,
    whatsApp,
    email,
    ownerName,
    type,
    numberOfBranch,
  }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .addOrganizationByCreator(
      creatorId,
      phoneNumber,
      singleMultiType,
      roles,
      password,
      name,
      address,
      pincode,
      city,
      stateName,
      contactNo,
      whatsApp,
      email,
      ownerName,
      type,
      numberOfBranch
    )
    .then(
      (response) => {
        commit("SET_LOADER", false, { root: true });
        successHandler("Added Successfully");
        router.go(-1);
         // commit("ADD_ORGANIZATION", response.data);
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};

export const addOrganization = async (
  { commit },
  {
    phoneNumber,
    singleMultiType,
    roles,
    password,
    name,
    address,
    pincode,
    city,
    stateName,
    contactNo,
    whatsApp,
    email,
    ownerName,
    type,
    numberOfBranch,
  }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .addOrganization(
      phoneNumber,
      singleMultiType,
      roles,
      password,
      name,
      address,
      pincode,
      city,
      stateName,
      contactNo,
      whatsApp,
      email,
      ownerName,
      type,
      numberOfBranch
    )
    .then(
      (response) => {
        commit("SET_LOADER", false, { root: true });
        successHandler("Added Successfully");
        commit("ADD_ORGANIZATION", response.data);
        router.go(-1);
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};
export const updateOrganization = async (
  { commit, state },
  {
    id,
    name,
    address,
    pincode,
    city,
    stateName,
    contactNo,
    whatsApp,
    email,
    ownerName,
    type,
    numberOfBranch,
  }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .updateOrganization(
      id,
      name,
      address,
      pincode,
      city,
      stateName,
      contactNo,
      whatsApp,
      email,
      ownerName,
      type,
      numberOfBranch
    )
    .then(
      (response) => {
        commit("SET_LOADER", false, { root: true });
        commit("UPDATE_ORGANIZATION", response.data);
        successHandler("Update Successfully");
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};
export const updateOrganizationStatus = async (
  { commit, state },
  { id, status }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateOrganizationStatus(id, status).then(
    (response) => {
      state.statusModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Update Successfully");
      commit("UPDATE_ORGANIZATION_STATUS", { id, status });
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
      commit("DELETE_ORGANIZATION", response.data);
      successHandler("Deleted Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const updateOrganizationImage = async ({ commit }, { id, file }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateOrganizationImage(id, file).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      successHandler("Image updated successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
