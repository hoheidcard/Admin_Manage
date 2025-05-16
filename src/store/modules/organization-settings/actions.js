import { errorHandler, successHandler } from "../../../services/_helper";
import { apiServices } from "../../../services/api.service";

export const getOneOrganizationSettings = async (
  { commit, dispatch },
  { id }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getOneOrganizationSettings(id).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      commit("ORGANIZATION_SETTINGS_DETAILS", response.data);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const updateCsvField = async (
  { commit, state },
  { id, csvFields, staffCsvFields }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateCsvField(id, csvFields, staffCsvFields).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      // commit("UPDATE_CLASS", response.data)
      successHandler("Update Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
/****** CLASS ******/
export const addAsignClass = async (
  { commit, state },
  {
    classListId,
    classDivId,
    staffDetailId,
    coOrdinatorId,
    teacher,
    coOrdinator,
    section,
    subjectId,
    subject,
    type,
    time_start,
    time_end,
  }
) => {
  console.log(classListId, classDivId, staffDetailId, coOrdinatorId, subjectId, type, time_start, time_end)

  commit("SET_LOADER", true, { root: true });
  await apiServices
    .addAsignClass(
      classListId,
      classDivId,
      staffDetailId,
      coOrdinatorId,
      subjectId,
      type,
      time_start,
      time_end
    )
    .then(
      (response) => {
        state.asignModal = false;
        commit("SET_LOADER", false, { root: true });
        successHandler("Added Successfully");
        commit("ADD_ASIGN_CLASS", {
          id: response.data.id,
          classListId,
          classDivId,
          staffDetailId,
          coOrdinatorId,
          teacher,
          coOrdinator,
          section,
          subjectId,
          subject,
          type,
          time_start,
          time_end,
        });
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};
export const deleteAsignClass = async (
  { commit, state },
  { id, classListId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.deleteAsignClass(id).then(
    (response) => {
      state.asignModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Added Successfully");
      commit("DELETE_ASIGN_CLASS", { id, classListId });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const addClass = async (
  { commit, state },
  { name, priority, settingId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.addClass(name, priority, settingId).then(
    (response) => {
      state.addModal = false;
      response.data["name"] = name;
      commit("SET_LOADER", false, { root: true });
      successHandler("Added Successfully");
      commit("ADD_CLASS", response.data);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const updateClass = async (
  { commit, state },
  { id, name, priority, settingId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateClass(id, name, priority, settingId).then(
    (response) => {
      state.addModal = false;
      commit("SET_LOADER", false, { root: true });
      commit("UPDATE_CLASS", response.data);
      successHandler("Update Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const deleteClass = async ({ commit, state }, { id, status }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.deleteClass(id, status).then(
    (response) => {
      state.confirmModal = false;
      response.data["id"] = id;
      commit("SET_LOADER", false, { root: true });
      commit("DELETE_CLASS", response.data);
      successHandler("Deleted Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

/****** END CLASS ******/
/****** DIVISION ******/
export const addDivision = async (
  { commit, state },
  { name, priority, settingId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.addDivision(name, priority, settingId).then(
    (response) => {
      state.addModal = false;
      response.data["name"] = name;
      commit("SET_LOADER", false, { root: true });
      successHandler("Added Successfully");
      commit("ADD_DIVISION", response.data);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const updateDivision = async (
  { commit, state },
  { id, name, priority, settingId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateDivision(id, name, priority, settingId).then(
    (response) => {
      state.addModal = false;
      commit("SET_LOADER", false, { root: true });
      commit("UPDATE_DIVISION", response.data);
      successHandler("Update Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const deleteDivision = async ({ commit, state }, { id, status }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.deleteDivision(id, status).then(
    (response) => {
      state.confirmModal = false;
      response.data["id"] = id;
      commit("SET_LOADER", false, { root: true });
      commit("DELETE_DIVISION", response.data);
      successHandler("Deleted Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
/****** END DIVISION ******/
/****** BOOK CATEGORY ******/
export const addBookCategory = async (
  { commit, state },
  { name, settingId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.addBookCategory(name, settingId).then(
    (response) => {
      state.addModal = false;
      response.data["name"] = name;
      commit("SET_LOADER", false, { root: true });
      successHandler("Added Successfully");
      commit("ADD_BOOK_CATEGORY", response.data);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const updateBookCategory = async (
  { commit, state },
  { id, name, settingId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateBookCategory(id, name, settingId).then(
    (response) => {
      state.addModal = false;
      commit("SET_LOADER", false, { root: true });
      commit("UPDATE_BOOK_CATEGORY", response.data);
      successHandler("Update Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const deleteBookCategory = async ({ commit, state }, { id, status }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.deleteBookCategory(id, status).then(
    (response) => {
      state.confirmModal = false;
      response.data["id"] = id;
      commit("SET_LOADER", false, { root: true });
      commit("DELETE_BOOK_CATEGORY", response.data);
      successHandler("Deleted Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
/****** END BOOK CATEGORY ******/

/****** DEPARTMENT ******/
export const addDepartment = async ({ commit, state }, { name, settingId }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.addDepartment(name, settingId).then(
    (response) => {
      state.addModal = false;
      response.data["name"] = name;
      commit("SET_LOADER", false, { root: true });
      successHandler("Added Successfully");
      commit("ADD_DEPARTMENT", response.data);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const updateDepartment = async (
  { commit, state },
  { id, name, settingId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateDepartment(id, name, settingId).then(
    (response) => {
      state.addModal = false;
      commit("SET_LOADER", false, { root: true });
      commit("UPDATE_DEPARTMENT", response.data);
      successHandler("Update Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const deleteDepartment = async ({ commit, state }, { id, status }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.deleteDepartment(id, status).then(
    (response) => {
      state.confirmModal = false;
      response.data["id"] = id;
      commit("SET_LOADER", false, { root: true });
      commit("DELETE_DEPARTMENT", response.data);
      successHandler("Deleted Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
/****** END DEPARTMENT ******/

/****** DESIGNATION ******/
export const addDesignation = async (
  { commit, state },
  { name, priority, settingId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.addDesignationByAdmin(name, priority, settingId).then(
    (response) => {
      state.addModal = false;
      response.data["name"] = name;
      commit("SET_LOADER", false, { root: true });
      successHandler("Added Successfully");
      commit("ADD_DESIGNATION", response.data);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const updateDesignation = async (
  { commit, state },
  { id, name, priority, settingId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .updateDesignationByAdmin(id, name, priority, settingId)
    .then(
      (response) => {
        state.addModal = false;
        commit("SET_LOADER", false, { root: true });
        commit("UPDATE_DESIGNATION", response.data);
        successHandler("Update Successfully");
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};
export const deleteDesignation = async ({ commit, state }, { id, status }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.deleteDesignation(id, status).then(
    (response) => {
      state.confirmModal = false;
      response.data["id"] = id;
      commit("SET_LOADER", false, { root: true });
      commit("DELETE_DESIGNATION", response.data);
      successHandler("Deleted Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
/****** END DESIGNATION ******/

/****** HOUSE ZONE ******/
export const addHouseZone = async ({ commit, state }, { name, settingId }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.addHouseZone(name, settingId).then(
    (response) => {
      state.addModal = false;
      response.data["name"] = name;
      commit("SET_LOADER", false, { root: true });
      successHandler("Added Successfully");
      commit("ADD_HOUSE_ZONE", response.data);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const updateHouseZone = async (
  { commit, state },
  { id, name, settingId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateHouseZone(id, name, settingId).then(
    (response) => {
      state.addModal = false;
      commit("SET_LOADER", false, { root: true });
      commit("UPDATE_HOUSE_ZONE", response.data);
      successHandler("Update Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const deleteHouseZone = async ({ commit, state }, { id, status }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.deleteHouseZone(id, status).then(
    (response) => {
      state.confirmModal = false;
      response.data["id"] = id;
      commit("SET_LOADER", false, { root: true });
      commit("DELETE_HOUSE_ZONE", response.data);
      successHandler("Deleted Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
/****** END HOUSE ZONE ******/

/****** SUBJECT ******/
export const addSubject = async ({ commit, state }, { name, settingId }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.addSubject(name, settingId).then(
    (response) => {
      state.addModal = false;
      response.data["name"] = name;
      commit("SET_LOADER", false, { root: true });
      successHandler("Added Successfully");
      commit("ADD_SUBJECT", response.data);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const updateSubject = async (
  { commit, state },
  { id, name, settingId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateSubject(id, name, settingId).then(
    (response) => {
      state.addModal = false;
      commit("SET_LOADER", false, { root: true });
      commit("UPDATE_SUBJECT", response.data);
      successHandler("Update Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const deleteSubject = async ({ commit, state }, { id, status }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.deleteSubject(id, status).then(
    (response) => {
      state.confirmModal = false;
      response.data["id"] = id;
      commit("SET_LOADER", false, { root: true });
      commit("DELETE_SUBJECT", response.data);
      successHandler("Deleted Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
/****** END SUBJECT ******/
export const createStudentOrder = async (
  { commit, state },
  {
    classes,
    deliveryDate,
    deliveryAddress,
    contactNumber,
    qty,
    parentCard,
    deliveryPartnerId,
    settingId
  }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .createStudentOrder(
      classes,
      deliveryDate,
      deliveryAddress,
      contactNumber,
      qty,
      parentCard,
      deliveryPartnerId,
      settingId
    )
    .then(
      (response) => {
        state.orderModal = false;
        commit("SET_LOADER", false, { root: true });
        successHandler("Order created Successfully");
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};

export const assignClassProduct = async ({ commit, state }, payload) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.assignClassProduct(payload).then(
    (response) => {
      state.productModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Product assigned Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const assignDesignationProduct = async ({ commit, state }, payload) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.assignDesignationProduct(payload).then(
    (response) => {
      state.productModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Product assigned Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const assignParentProduct = async ({ commit, state }, payload) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.assignClassParentProduct(payload).then(
    (response) => {
      state.productModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Product assigned Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const assignHouseProduct = async ({ commit, state }, payload) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.assignHouseProduct(payload).then(
    (response) => {
      state.productModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Product assigned Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
