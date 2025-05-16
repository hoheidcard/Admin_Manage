import { errorHandler } from "../../../services/_helper";
import { apiServices } from "../../../services/api.service";

export const getDashboardCount = async (
  { commit },
  { fromDate, toDate, all }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getDashboardCounts(fromDate, toDate, all).then(
    (response) => {
      commit("SET_DATA", response.data);
      commit("SET_LOADER", false, { root: true });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      commit("UNSET_DATA", []);
      errorHandler(error.response);
    }
  );
};

export const getPartners = async (
  { commit, dispatch },
  { limit, offset, keyword, status, fromDate, toDate, roles, all }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .getPartnersByDash(
      limit,
      offset,
      keyword,
      status,
      fromDate,
      toDate,
      roles,
      all
    )
    .then(
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

export const getOrganization = async (
  { commit },
  { limit, offset, keyword, status, fromDate, toDate, roles, all }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .getOrganizationDashboard(
      limit,
      offset,
      keyword,
      status,
      fromDate,
      toDate,
      roles,
      all
    )
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

export const getStudents = async (
  { commit },
  { limit, offset, keyword, status, fromDate, toDate, roles, all }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .getStudentByDash(
      limit,
      offset,
      keyword,
      status,
      fromDate,
      toDate,
      roles,
      all
    )
    .then(
      (response) => {
        commit("SET_LOADER", false, { root: true });
        commit("STUDENT_DATA", response.data);
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};

export const getStaffs = async (
  { commit },
  { limit, offset, keyword, status, fromDate, toDate, roles, all }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .getStaffDashboard(
      limit,
      offset,
      keyword,
      status,
      fromDate,
      toDate,
      roles,
      all
    )
    .then(
      (response) => {
        commit("SET_LOADER", false, { root: true });
        commit("STAFF_DATA", response.data);
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};
