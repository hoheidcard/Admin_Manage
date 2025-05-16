import {
  errorHandler,
  errorMessage,
  successHandler,
} from "../../../services/_helper";
import { apiServices } from "../../../services/api.service";

export const getOrders = async (
  { commit },
  { limit, offset, keyword, status, fromDate, toDate, filterType }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .getOrders(limit, offset, keyword, status, fromDate, toDate, filterType)
    .then(
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

export const getOrder = async ({ commit }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getOrder(id).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      commit("SET_DETAIL", response.data);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      commit("SET_DETAIL", null);
      errorHandler(error.response);
    }
  );
};

export const updateCardOrderStatus = async (
  { commit, state },
  { id, status }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateCardOrderStatus(id, status).then(
    (response) => {
      state.statusModal = false;
      commit("SET_LOADER", false, { root: true });
      commit("UPDATE_STATUS", { id, status });
      successHandler(" Status update successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const assignOrderToUpper = async ({ commit, state }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.assignSchoolToUpper(id).then(
    (response) => {
      state.confirmModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Order submitted. Thank You.");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const downloadStaffCSVByOrganizationId = async (
  { commit, state },
  { id }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.downloadStaffCSVByOrganizationId(id).then(
    (response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${id}.csv`);
      document.body.appendChild(link);
      link.click();
      // state.confirmModal = false;
      commit("SET_LOADER", false, { root: true });
      // successHandler("Order submitted. Thank You.");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorMessage("Either no staff or csv not selected!");
    }
  );
};

export const downloadStudentCSVByOrganizationId = async (
  { commit },
  { id, classess }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.downloadStudentCSVByOrganizationId(id, classess).then(
    (response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${id}.csv`);
      document.body.appendChild(link);
      link.click();
      // state.confirmModal = false;
      commit("SET_LOADER", false, { root: true });
      // successHandler("Order submitted. Thank You.");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorMessage("Either no student or csv not selected!");
    }
  );
};

export const downloadStaffCSVByOrderId = async ({ commit }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.downloadStaffCSVByOrderId(id).then(
    (response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${id}.csv`);
      document.body.appendChild(link);
      link.click();
      // state.confirmModal = false;
      commit("SET_LOADER", false, { root: true });
      // successHandler("Order submitted. Thank You.");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorMessage("Either no staff or csv not selected!!");
    }
  );
};

export const downloadStudentCSVByOrderId = async ({ commit }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.downloadStudentCSVByOrderId(id).then(
    (response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${id}.csv`);
      document.body.appendChild(link);
      link.click();
      // state.confirmModal = false;
      commit("SET_LOADER", false, { root: true });
      // successHandler("Order submitted. Thank You.");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorMessage("Either no student or csv not selected!!");
    }
  );
};

export const downloadStaffFileByOrganizationId = async ({ commit }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.downloadStaffFileByOrganizationId(id).then(
    (response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${id}.zip`);
      document.body.appendChild(link);
      link.click();
      // state.confirmModal = false;
      commit("SET_LOADER", false, { root: true });
      // successHandler("Order submitted. Thank You.");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorMessage("Try after some time!");
    }
  );
};

export const downloadStudentFileByOrganizationId = async (
  { commit },
  { id, classess }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.downloadStudentFileByOrganizationId(id, classess).then(
    (response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${id}.zip`);
      document.body.appendChild(link);
      link.click();
      // state.confirmModal = false;
      commit("SET_LOADER", false, { root: true });
      // successHandler("Order submitted. Thank You.");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorMessage("Try after some time!");
    }
  );
};

export const downloadStaffFileByOrderId = async ({ commit }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.downloadStaffFileByOrderId(id).then(
    (response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${id}.zip`);
      document.body.appendChild(link);
      link.click();
      // state.confirmModal = false;
      commit("SET_LOADER", false, { root: true });
      // successHandler("Order submitted. Thank You.");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorMessage("Try after some time!");
    }
  );
};

export const downloadStudentFileByOrderId = async ({ commit }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.downloadStudentFileByOrderId(id).then(
    (response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${id}.zip`);
      document.body.appendChild(link);
      link.click();
      // state.confirmModal = false;
      commit("SET_LOADER", false, { root: true });
      // successHandler("Order submitted. Thank You.");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorMessage("Try after some time!");
    }
  );
};
