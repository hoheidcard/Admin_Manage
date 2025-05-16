import { errorHandler } from "../../../services/_helper";
import { apiServices } from "../../../services/api.service";

export const getUsers = async ({ commit }, { limit, offset, keyword }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getUSersList(limit, offset, keyword).then(
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
