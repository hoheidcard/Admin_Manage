import { apiServices } from "../../../services/api.service";
import { successHandler, errorHandler } from "../../../services/_helper";
import router from "../../../router";

export const getPartners = async (
  { commit, dispatch },
  { limit, offset, keyword, status, roles }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getPartners(limit, offset, keyword, status, roles).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      commit("PARTNERS_DATA", response.data);
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
export const addPartners = async (
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
  }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .addPartners(
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
      singleMultiType
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

export const updatePartnersStatus = async (
  { commit, state },
  { id, status }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updatePartnersStatus(id, status).then(
    (response) => {
      state.statusModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Update Successfully");
      commit("UPDATE_PARTNERS_STATUS", { id, status });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const updatePartnerImage = async ({ commit }, { id, file }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updatePartnerImage(id, file).then(
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
