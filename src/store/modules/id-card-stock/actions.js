import { errorHandler, successHandler } from "../../../services/_helper";
import { apiServices } from "../../../services/api.service";

export const getIdCardStocksByStatus = async (
  { commit },
  { limit, offset, keyword, status }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .getIdCardStocksByStatus(limit, offset, keyword, status)
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

export const getIdCardStocks = async (
  { commit },
  { limit, offset, keyword }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getIdCardStocks(limit, offset, keyword).then(
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

export const getIdCardStock = async ({ commit }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getIdCardStock(id).then(
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

export const getEditor = async ({ commit }, { id, settingId, type, sp }) => {
  commit("SET_LOADER", true, { root: true });
  return apiServices.getEditor(id, settingId, type, sp).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      return Promise.resolve(response);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      return Promise.reject(error);
    }
  );
};

export const findMaxDetailStaff = async ({ commit }, { settingId }) => {
  commit("SET_LOADER", true, { root: true });
  return apiServices.findMaxDetailStaff(settingId).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      return Promise.resolve(response);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      return Promise.reject(error);
    }
  );
};

export const findMaxDetailStudent = async ({ commit }, { settingId }) => {
  commit("SET_LOADER", true, { root: true });
  return apiServices.findMaxDetailStudent(settingId).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      return Promise.resolve(response);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      return Promise.reject(error);
    }
  );
};

export const createIdCardStock = async (
  { commit, state },
  {
    code,
    title,
    shortDesc,
    desc,
    price,
    discount,
    discountedPrice,
    finalPrice,
    partnerDiscount,
    additionalDiscount,
    productVariant,
    categoryId,
  }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .createIdCardStock(
      code,
      title,
      shortDesc,
      desc,
      price,
      discount,
      discountedPrice,
      finalPrice,
      partnerDiscount,
      additionalDiscount,
      productVariant,
      categoryId
    )
    .then(
      (response) => {
        state.addModal = false;
        commit("SET_LOADER", false, { root: true });
        // commit("ADD_DATA", { id: response.data.id, title });
        successHandler("Product created successfully!");
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};

export const updateIdCardStock = async (
  { commit, state },
  {
    id,
    code,
    title,
    shortDesc,
    desc,
    price,
    discount,
    discountedPrice,
    finalPrice,
    partnerDiscount,
    additionalDiscount,
    productVariant,
    categoryId,
  }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .updateIdCardStock(
      id,
      code,
      title,
      shortDesc,
      desc,
      price,
      discount,
      discountedPrice,
      finalPrice,
      partnerDiscount,
      additionalDiscount,
      productVariant,
      categoryId
    )
    .then(
      (response) => {
        state.addModal = false;
        commit("SET_LOADER", false, { root: true });
        commit("UPDATE_DATA", {
          id,
          code,
          title,
          shortDesc,
          desc,
          price,
          discount,
          discountedPrice,
          finalPrice,
          partnerDiscount,
          additionalDiscount,
          productVariant,
          categoryId,
        });
        successHandler("Product updated successfully!");
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};

export const updateIdCardStockImage = async (
  { commit, state },
  { id, file }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateIdCardStockImage(id, file).then(
    (response) => {
      state.imageModal = false;
      commit("SET_LOADER", false, { root: true });
      commit("UPDATE_IMAGE", { id, image: response.data.image });
      successHandler("Product image updated successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const updateIdCardStockStatus = async (
  { commit, state },
  { id, status }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateIdCardStockStatus(id, status).then(
    (response) => {
      state.statusModal = false;
      commit("SET_LOADER", false, { root: true });
      commit("UPDATE_STATUS", { id, status });
      successHandler("Product status updated successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const deleteIdCardStockImage = async ({ commit }, { id, rowId }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.deleteIdCardStockImage(id).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      commit("DELETE_IMAGE", { id, rowId });
      successHandler("Product image deleted successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const uploadIdCardStockImage = async (
  { commit, state },
  { id, file, image }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.uploadIdCardStockImage(id, file).then(
    (response) => {
      console.log(response);
      response.data["file"] = image;
      commit("PUSH_IMAGE", {
        id,
        productImage: response.data,
      });

      commit("SET_LOADER", false, { root: true });
      successHandler("Product image updated successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const updateProduct = async ({ commit }, { id, card }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateIdCardEditor(id, card).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      successHandler("Product updated successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const updateIdCardHouse = async (
  { commit },
  { id, card, settingId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateIdCardHouse(id, card, settingId).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      successHandler("Product updated successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const updateIdCardParent = async (
  { commit },
  { id, card, settingId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateIdCardParent(id, card, settingId).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      successHandler("Product updated successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const updateIdCardClassStudent = async (
  { commit },
  { id, card, settingId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateIdCardClassStudent(id, card, settingId).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      successHandler("Product updated successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const updateIdCardDesignation = async (
  { commit },
  { id, card, settingId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateIdCardDesignation(id, card, settingId).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      successHandler("Product updated successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
