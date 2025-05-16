import moment from "moment";
import router from "../../../router";
import { errorHandler, successHandler } from "../../../services/_helper";
import { apiServices } from "../../../services/api.service";

export const getBranchStaff = async (
  { commit, dispatch },
  { limit, offset, keyword, status, type, organizationDetailId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .getBranchStaff(limit, offset, keyword, status, type, organizationDetailId)
    .then(
      (response) => {
        commit("ALL_ORGANIZATION_STAFF", response.data);
        commit("SET_LOADER", false, { root: true });
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};
export const getOneStaff = async ({ commit, dispatch }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getOneStaff(id).then(
    (response) => {
      commit("STAFF_DETAILS", response.data);
      commit("SET_LOADER", false, { root: true });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const getStaffList = async (
  { commit },
  { limit, offset, keyword, status, settingId }
) => {
  await apiServices
    .getStaffList(limit, offset, keyword, status, settingId)
    .then(
      (response) => {
        commit("ALL_ORGANIZATION_STAFF_LIST", response.data);
      },
      (error) => {
        errorHandler(error.response);
      }
    );
};
export const addStaff = async (
  { commit, state },
  {
    phoneNumber,
    name,
    emailId,
    gender,
    password,
    dob,
    joiningDate,
    contactNo,
    nationality,
    address,
    city,
    stateName,
    pincode,
    guardianName,
    guardianContactNo,
    designationId,
    organizationDetailId,
    designation,
    spouseName,
    spouseContactNo,
    spouseOccupation,
    spouseIncome,
    accountId,
    settingId,
  }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .addStaff(
      phoneNumber,
      name,
      emailId,
      gender,
      password,
      dob,
      joiningDate,
      contactNo,
      nationality,
      address,
      city,
      stateName,
      pincode,
      guardianName,
      guardianContactNo,
      designationId,
      organizationDetailId,
      spouseName,
      spouseContactNo,
      spouseOccupation,
      spouseIncome,
      accountId,
      settingId
    )
    .then(
      (response) => {
        commit("SET_LOADER", false, { root: true });

        response.data["account"] = { phoneNumber };
        response.data["name"] = name;
        response.data["emailId"] = emailId;
        response.data["gender"] = gender;
        response.data["dob"] = dob;
        response.data["designation"] = { name: designation };
        response.data["designationId"] = designationId;
        commit("ADD_STAFF", response.data);
        commit("SET_LOADER_BUTTON", false);
        router.go(-1);
        successHandler("Staff Added Successfully!");
      },
      (error) => {
        commit("SET_BUTTON", false);
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};
export const updateStaff = async (
  { commit, state },
  { id, name, emailId, gender, dob, designationId, designationName }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .updateStaff(id, name, emailId, gender, dob, designationId)
    .then(
      async (response) => {
        response.data["designation"] = designationName;

        commit("UPDATE_STAFF", response.data);
        state.branchStaffModal = false;
        commit("SET_LOADER", false, { root: true });
        successHandler("Staff Updated Successfully!");
      },
      (error) => {
        errorHandler(error.response);
        commit("SET_LOADER", false, { root: true });
      }
    );
};

export const updatePermission = async ({ commit }, { menu }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updatePermission(menu).then(
    async (response) => {
      successHandler("Permission update successfully!");
      commit("SET_LOADER", false, { root: true });
    },
    (error) => {
      errorHandler(error.response, "User");
      commit("SET_LOADER", false, { root: true });
    }
  );
};

export const updateBranchStaffStatus = async (
  { commit, state },
  { id, status }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateStaffStatus(id, status).then(
    (response) => {
      state.statusModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Update Successfully");
      commit("UPDATE_STAFF_STATUS", { id, status });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

// Staff Class

export const addStaffClass = async (
  { commit, state },
  { classListId, staffDetailId, className }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.addStaffClass(classListId, staffDetailId).then(
    (response) => {
      response.data["classList"] = { name: className };
      response.data["createdAt"] = moment();

      commit("ADD_STAFF_CLASS", response.data);
      state.addClassModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Added Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const updateProfileImage = async ({ commit, state }, { id, file }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateProfileImage(id, file).then(
    (response) => {
      state.profile = response.data.profile;
      successHandler("Update Successfully");
      commit("SET_LOADER", false, { root: true });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const deleteStaffClass = async ({ commit, state }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.deleteStaffClass(id).then(
    (response) => {
      response.data["id"] = id;
      commit("DELETE_STAFF_CLASS", response.data);
      state.confirmModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Delete Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

// Staff Department

export const addStaffDepartment = async (
  { commit, state },
  { departmentId, staffDetailId, deparmentName }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.addStaffDepartment(departmentId, staffDetailId).then(
    (response) => {
      response.data["department"] = { name: deparmentName };
      response.data["createdAt"] = moment();

      commit("ADD_STAFF_DEPARTMENT", response.data);
      state.addDepartmentModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Added Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const deleteStaffDepartment = async ({ commit, state }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.deleteStaffDepartment(id).then(
    (response) => {
      response.data["id"] = id;
      commit("DELETE_STAFF_DEPARTMENT", response.data);
      state.confirmDepartmentModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Delete Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

// Staff Division

export const addStaffDivision = async (
  { commit, state },
  { classDivId, staffDetailId, name }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.addStaffDivision(classDivId, staffDetailId).then(
    (response) => {
      response.data["classDiv"] = { name };
      response.data["createdAt"] = moment();

      commit("ADD_STAFF_DIVISION", response.data);
      state.addDivisionModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Added Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const deleteStaffDivision = async ({ commit, state }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.deleteStaffDivision(id).then(
    (response) => {
      response.data["id"] = id;
      commit("DELETE_STAFF_DIVISION", response.data);
      state.confirmDivisionModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Delete Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

// Staff Division

export const addStaffSubject = async (
  { commit, state },
  { subjectId, staffDetailId, name }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.addStaffSubject(subjectId, staffDetailId).then(
    (response) => {
      response.data["subject"] = { name };
      response.data["createdAt"] = moment();

      commit("ADD_STAFF_SUBJECT", response.data);
      state.addSubjectModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Added Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
export const deleteStaffSubject = async ({ commit, state }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.deleteStaffSubject(id).then(
    (response) => {
      response.data["id"] = id;
      commit("DELETE_STAFF_SUBJECT", response.data);
      state.confirmSubjectModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Delete Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

// Staff Document

export const addStaffDoc = async (
  { commit, state },
  { staffAccountId, staffDetailId, type, documentId, file, imageUrl }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .addStaffDoc(staffAccountId, staffDetailId, type, documentId, file)
    .then(
      (response) => {
        response.data["url"] = imageUrl;
        response.data["type"] = type;
        response.data["documentId"] = documentId;
        response.data["createdAt"] = moment();

        commit("ADD_STAFF_DOC", response.data);
        state.addDocModal = false;
        commit("SET_LOADER", false, { root: true });
        successHandler("Added Successfully");
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};
export const deleteStaffDoc = async (
  { commit, state },
  { id, staffAccountId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.deleteStaffDoc(id, staffAccountId).then(
    (response) => {
      response.data["id"] = id;
      commit("DELETE_STAFF_DOC", response.data);
      state.confirmDocModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Delete Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

// Time Table

export const addTimeTable = async ({ commit }, { data }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.addTimeTable(data).then(
    async (response) => {
      data["id"] = response.data.id;
      data["subject"] = {};
      commit("ADD_PERIOD", data);
      commit("SET_LOADER", false, { root: true });
      successHandler("Period added successfully!");
    },
    (error) => {
      errorHandler(error.response);
      commit("SET_LOADER", false, { root: true });
    }
  );
};

export const scheduleStatus = async ({}, { id, status }) => {
  apiServices.scheduleStatus(id, status);
};

export const updatePeriod = async ({ commit }, { periodId, data }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updatePeriod(periodId, data).then(
    async (response) => {
      commit("UPDATE_PERIOD", { periodId, data, res: response.data });
      commit("SET_LOADER", false, { root: true });
      successHandler("Period Update successfully!");
    },
    (error) => {
      errorHandler(error.response);
      commit("SET_LOADER", false, { root: true });
    }
  );
};
export const deletePeriod = async ({ commit }, { scheduleId, id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.deletePeriod(id).then(
    async (response) => {
      commit("DELETE_PERIOD", { scheduleId, id });
      commit("SET_LOADER", false, { root: true });
      successHandler("Deleted successfully!");
    },
    (error) => {
      errorHandler(error.response);
      commit("SET_LOADER", false, { root: true });
    }
  );
};

export const uploadStaffCsvFile = async (
  { commit },
  { organizationDetailId, settingId, files, onUploadProgress }
) => {
  // commit("SET_LOADER", true, { root: true });
  await apiServices
    .uploadStaffCsvFile(
      organizationDetailId,
      settingId,
      files,
      onUploadProgress
    )
    .then(
      (response) => {
        router.go(-1);
        // commit("SET_LOADER", false, { root: true });
        successHandler(
          `Total ${response.data.new} new staff added and Duplicate record ${response.data.old}`
        );
        // commit("UPDATE_STUDENT_STATUS", { id, status })
      },
      (error) => {
        // commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};

export const createStaffOrder = async (
  { commit, state },
  {
    staff,
    deliveryDate,
    deliveryAddress,
    contactNumber,
    qty,
    deliveryPartnerId,
  }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .createStaffOrder(
      staff,
      deliveryDate,
      deliveryAddress,
      contactNumber,
      qty,
      deliveryPartnerId
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
