import router from "../../../router";
import { errorHandler, successHandler } from "../../../services/_helper";
import { apiServices } from "../../../services/api.service";

export const getMyClasses = async ({ commit, dispatch }, { settingId }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getMyClasses(settingId).then(
    (response) => {
      commit("ALL_CLASS_DATA", response.data);
      commit("SET_LOADER", false, { root: true });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const getStudent = async (
  { commit, dispatch },
  { limit, offset, keyword, organizationDetailId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .getStudent(limit, offset, keyword, organizationDetailId)
    .then(
      (response) => {
        commit("ALL_STUDENT_DATA", response.data);
        commit("SET_LOADER", false, { root: true });
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};

export const getStudentByClassDiv = async (
  { commit },
  { limit, offset, keyword, organizationDetailId, classListId, classDivId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .getStudentByClassDiv(
      limit,
      offset,
      keyword,
      organizationDetailId,
      classListId,
      classDivId
    )
    .then(
      (response) => {
        commit("ALL_STUDENT_DATA", response.data);
        commit("SET_LOADER", false, { root: true });
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};

export const getStudentForCard = async (
  { commit },
  { organizationId, classId, status }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getStudentForCard(organizationId, classId, status).then(
    (response) => {
      commit("STUDENT_CARD_DATA", response.data);
      commit("SET_LOADER", false, { root: true });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      commit("STUDENT_CARD_DATA", { result: [], total: 0 });
      errorHandler(error.response);
    }
  );
};

export const getStudentFinalForCard = async (
  { commit },
  { organizationId, classId }
) => {
  commit("SET_LOADER", true, { root: true });
  return apiServices.getStudentFinalForCard(organizationId, classId).then(
    (response) => {
      // commit("STUDENT_FINAL_CARD_DATA", response.data);
      commit("SET_LOADER", false, { root: true });
      return Promise.resolve(response);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      // commit("STUDENT_FINAL_CARD_DATA", { result: [], total: 0 });
      errorHandler(error.response);
      return Promise.reject(response);
    }
  );
};

export const getStaffFinalForCard = async (
  { commit },
  { organizationId, classId }
) => {
  commit("SET_LOADER", true, { root: true });
  return apiServices.getStaffFinalForCard(organizationId, classId).then(
    (response) => {
      // commit("STUDENT_FINAL_CARD_DATA", response.data);
      commit("SET_LOADER", false, { root: true });
      return Promise.resolve(response);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      // commit("STUDENT_FINAL_CARD_DATA", { result: [], total: 0 });
      errorHandler(error.response);
      return Promise.reject(response);
    }
  );
};

export const getStudentFinalForCardProfile = async ({ commit }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  return apiServices.getStudentFinalForCardProfile(id).then(
    (response) => {
      // commit("STUDENT_FINAL_CARD_DATA", response.data);
      commit("SET_LOADER", false, { root: true });
      return Promise.resolve(response);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      // commit("STUDENT_FINAL_CARD_DATA", { result: [], total: 0 });
      errorHandler(error.response);
      return Promise.reject(response);
    }
  );
};

export const getStaffFinalForCardProfile = async ({ commit }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  return apiServices.getStaffFinalForCardProfile(id).then(
    (response) => {
      // commit("STUDENT_FINAL_CARD_DATA", response.data);
      commit("SET_LOADER", false, { root: true });
      return Promise.resolve(response);
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      // commit("STUDENT_FINAL_CARD_DATA", { result: [], total: 0 });
      errorHandler(error.response);
      return Promise.reject(response);
    }
  );
};

export const getStudentByClass = async (
  { commit },
  { limit, offset, keyword, organizationId, classId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .getStudentByClass(limit, offset, keyword, organizationId, classId)
    .then(
      (response) => {
        commit("ALL_STUDENT_DATA", response.data);
        commit("SET_LOADER", false, { root: true });
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};
export const getStudentByClassList = async (
  { commit },
  { limit, offset, keyword, organizationId, classId }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .getStudentByClassList(limit, offset, keyword, organizationId, classId)
    .then(
      (response) => {
        commit("ALL_STUDENT_DATA", response.data);
        commit("SET_LOADER", false, { root: true });
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};
export const getOneStudent = async ({ commit }, { id }) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.getOneStudent(id).then(
    (response) => {
      commit("STUDENT_DETAILS", response.data);
      commit("SET_LOADER", false, { root: true });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      commit("UNSTUDENT_DETAILS", null);
      errorHandler(error.response);
    }
  );
};
export const addStudent = async (
  { commit, state },
  {
    name,
    regNo,
    studentNo,
    admissionNo,
    rollNo,
    rfidNo,
    emailId,
    cast,
    religion,
    nationality,
    contactNo,
    address,
    city,
    stateName,
    pincode,
    gender,
    dob,
    fatherName,
    fatherContactNo,
    fatherOccupation,
    fatherIncome,
    motherName,
    motherContactNo,
    motherOccupation,
    motherIncome,
    transport,
    stream,
    canteen,
    library,
    hostel,
    houseZoneId,
    organizationDetailId,
    classDivId,
    classListId,
    settingId,
    PEN,
    UID,
  }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .addStudent(
      name,
      regNo,
      studentNo,
      admissionNo,
      rollNo,
      rfidNo,
      emailId,
      cast,
      religion,
      nationality,
      contactNo,
      address,
      city,
      stateName,
      pincode,
      gender,
      dob,
      fatherName,
      fatherContactNo,
      fatherOccupation,
      fatherIncome,
      motherName,
      motherContactNo,
      motherOccupation,
      motherIncome,
      transport,
      stream,
      canteen,
      library,
      hostel,
      houseZoneId,
      organizationDetailId,
      classDivId,
      classListId,
      settingId,
      PEN,
      UID
    )
    .then(
      (response) => {
        router.go(-1);
        commit("SET_LOADER", false, { root: true });
        successHandler("Added Successfully!");
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};
export const updateStudent = async (
  { commit, state },
  {
    name,
    regNo,
    studentNo,
    admissionNo,
    rollNo,
    rfidNo,
    emailId,
    cast,
    religion,
    nationality,
    contactNo,
    address,
    city,
    stateName,
    pincode,
    gender,
    dob,
    fatherName,
    fatherContactNo,
    fatherOccupation,
    fatherIncome,
    motherName,
    motherContactNo,
    motherOccupation,
    motherIncome,
    transport,
    stream,
    canteen,
    library,
    hostel,
    houseZoneId,
    organizationDetailId,
    classDivId,
    classListId,
    id,
    settingId,
    PEN,
    UID,
  }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices
    .updateStudent(
      name,
      regNo,
      studentNo,
      admissionNo,
      rollNo,
      rfidNo,
      emailId,
      cast,
      religion,
      nationality,
      contactNo,
      address,
      city,
      stateName,
      pincode,
      gender,
      dob,
      fatherName,
      fatherContactNo,
      fatherOccupation,
      fatherIncome,
      motherName,
      motherContactNo,
      motherOccupation,
      motherIncome,
      transport,
      stream,
      canteen,
      library,
      hostel,
      houseZoneId,
      organizationDetailId,
      classDivId,
      classListId,
      id,
      PEN,
      UID
    )
    .then(
      (response) => {
        router.go(-1);
        commit("SET_LOADER", false, { root: true });
        successHandler("Update Successfully!");
      },
      (error) => {
        commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};

export const updateStudentStatus = async (
  { commit, state },
  { id, status }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateStudentStatus(id, status).then(
    (response) => {
      state.statusModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Update Successfully");
      commit("UPDATE_STUDENT_STATUS", { id, status });
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const updateStudentImage = async (
  { commit, state },
  { id, type, orgId, file }
) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateStudentImage(id, type, orgId, file).then(
    (response) => {
      commit("SET_LOADER", false, { root: true });
      if (type === "Student") {
        state.profile = response.data.profile;
      }
      if (type === "Father") {
        state.fatherImage = response.data.fatherImage;
      }
      if (type === "Mother") {
        state.motherImage = response.data.motherImage;
      }
      if (type === "Guardian") {
        state.guardianImage = response.data.guardianImage;
      }
      successHandler("Image Update Successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const uploadStudentCsvFile = async (
  { commit },
  { organizationDetailId, settingId, files, onUploadProgress, type }
) => {
  // commit("SET_LOADER", true, { root: true });
  await apiServices
    .uploadStudentCsvFile(
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
          `Total ${response.data.new} new student added and Duplicate record ${response.data.old}`
        );
        // commit("UPDATE_STUDENT_STATUS", { id, status })
      },
      (error) => {
        // commit("SET_LOADER", false, { root: true });
        errorHandler(error.response);
      }
    );
};

export const updateStudentCard = async ({ commit, state }, payload) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.updateStudentCard(payload).then(
    (response) => {
      state.cardModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Student submitted for id card successfully!");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};

export const promoteClass = async ({ commit, state }, payload) => {
  commit("SET_LOADER", true, { root: true });
  await apiServices.promoteClass(payload).then(
    (response) => {
      state.promoteModal = false;
      commit("SET_LOADER", false, { root: true });
      successHandler("Class promoted successfully");
    },
    (error) => {
      commit("SET_LOADER", false, { root: true });
      errorHandler(error.response);
    }
  );
};
