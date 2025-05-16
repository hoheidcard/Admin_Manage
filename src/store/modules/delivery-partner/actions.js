import { errorHandler, successHandler } from "../../../services/_helper";
import { apiServices } from "../../../services/api.service";

export const getDeliveryPartners = async ({ commit }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getDeliveryPartners().then(
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

export const createDeliveryPartner = async ({ commit, state }, { title }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.createDeliveryPartner(title).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      state.addModal = false
      commit("ADD_DATA", { id: response.data.id, title });
      successHandler("New delivery partner added");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

// export const updateIdCardStock = async ({ commit }, { id, title }) => {
//   commit("SET_LOADER", true, { root: true });
//   await apiServices.updateIdCardStock(id, title).then(
//     (response) => {
//       commit("SET_LOADER", false, { root: true });
//       commit("UPDATE_DATA", { id, title });
//     },
//     (error) => {
//       commit("SET_LOADER", false, { root: true });
//       errorHandler(error.response);
//     }
//   );
// };

export const updateIdCardStockStatus = async ({ commit, state }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.deleteDeliveryPartner(id).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      commit("DELETE_DATA", { id });
      state.confirmModal = false;
      successHandler("Delivery partner deleted");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
