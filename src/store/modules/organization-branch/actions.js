import { apiServices } from "../../../services/api.service";
import { successHandler, errorHandler } from "../../../services/_helper";
import router from "../../../router";

export const getOrganizationBranch = async (
  { commit, dispatch },
  { id, limit, offset, keyword, status, roles }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .getOrganizationBranch(id, limit, offset, keyword, status, roles)
    .then(
      (response) => {
        commit("SET_LOADER", false, { root: true });
        commit("ORGANIZATION_BRANCH_DATA", response.data);
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};

export const addOrganizationBranch = async (
  { commit, state },
  {
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
    accountId,
    settingId,
    organizationId,
    roles,
  }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .addOrganizationBranch(
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
      accountId,
      settingId,
      organizationId,
      roles
    )
    .then(
      (response) => {
        state.organizationModal = false;
        commit("SET_LOADER", false, { root: true });
        successHandler("Added Successfully");
        commit("ADD_BRANCH_ORGANIZATION", response.data);
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};

export const updateOrganizationBranchStatus = async (
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
