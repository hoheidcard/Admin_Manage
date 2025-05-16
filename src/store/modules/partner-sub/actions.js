import { apiServices } from "../../../services/api.service";
import { successHandler, errorHandler } from "../../../services/_helper";
import router from "../../../router";

export const getSubPartners = async (
  { commit, dispatch },
  { limit, offset, keyword, status, roles, id }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .getSubPartners(limit, offset, keyword, status, roles, id)
    .then(
      (response) => {
        commit("SET_LOADER", false, { root: true });
        commit("SUB_PARTNERS_DATA", response.data);
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};

export const getOnePartner = async ({ commit, dispatch }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getOnePartner(id).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      commit("PARTNERS_DETAILS", response.data);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const addSubPartners = async (
  { commit, dispatch },
  {
    phoneNumber,
    firmName,
    firmEmail,
    ownerName,
    ownerMobile,
    ownerEmail,
    ownerWhatsApp,
    natureOfBusiness,
    website,
    gstDetail,
    firmShort,
    firmAddress,
    state,
    city,
    pincode,
    roles,
    singleMultiType,
    accountId,
  }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .addSubPartners(
      phoneNumber,
      firmName,
      firmEmail,
      ownerName,
      ownerMobile,
      ownerEmail,
      ownerWhatsApp,
      natureOfBusiness,
      website,
      gstDetail,
      firmShort,
      firmAddress,
      state,
      city,
      pincode,
      roles,
      singleMultiType,
      accountId
    )
    .then(
      (response) => {
        commit("SET_LOADER", false, { root: true });
        router.go(-1);
        successHandler("Added Successfully");
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};

export const editPartners = async (
  { commit, dispatch },
  {
    firmName,
    firmEmail,
    ownerName,
    ownerMobile,
    ownerEmail,
    ownerWhatsApp,
    natureOfBusiness,
    website,
    gstDetail,
    firmShort,
    firmAddress,
    state,
    city,
    pincode,
    roles,
    singleMultiType,
    id,
  }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .editPartners(
      firmName,
      firmEmail,
      ownerName,
      ownerMobile,
      ownerEmail,
      ownerWhatsApp,
      natureOfBusiness,
      website,
      gstDetail,
      firmShort,
      firmAddress,
      state,
      city,
      pincode,
      roles,
      singleMultiType,
      id
    )
    .then(
      (response) => {
        commit("SET_LOADER", false, { root: true });
        router.go(-1);
        successHandler("Update Successfully");
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};

export const updateSubPartnersStatus = async (
  { commit, state },
  { id, status }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updatePartnersStatus(id, status).then(
    (response) => {
      state.statusModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Update Successfully");
      commit("UPDATE_SUB_PARTNERS_STATUS", { id, status });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
