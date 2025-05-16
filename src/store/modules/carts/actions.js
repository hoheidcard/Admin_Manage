import { errorHandler, successHandler } from "../../../services/_helper";
import { apiServices } from "../../../services/api.service";

export const all = async (
  { commit },
  {
    limit,
    offset,
    keyword,
    status,
    paymentStatus,
    paymentMode,
    fromDate,
    toDate,
  }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .getCarts(
      limit,
      offset,
      keyword,
      status,
      paymentStatus,
      paymentMode,
      fromDate,
      toDate
    )
    .then(
      (response) => {
        console.log(response);
        commit("SET_LOADER", false, { root: true });
        commit("SET_DATA", response.data);
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};

export const one = async ({ commit }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getCategory(id).then(
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

export const invoice = async ({ commit, state }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getInvoice(id).then(
    (response) => {
      state.addModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Invoiced downloaded successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const status = async (
  { commit, state },
  { id, status, cgst, igst, sgst, shipping, addDiscount }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .updateCartStatus(id, status, cgst, igst, sgst, shipping, addDiscount)
    .then(
      (response) => {
        state.statusModal = false;
        commit("SET_LOADER", false, { root: true });
        commit("UPDATE_STATUS", { id, status, cgst, igst, sgst });
        successHandler("Order status updated successfully!");
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};

export const downloadInvoice = async ({ commit }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.downloadInvoice(id).then(
    (response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${id}.pdf`);
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
