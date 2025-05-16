export const SET_LOAD_MORE = (state, status) => {
  state.loadMore = status;
};

export const SET_DATA_LOADER = (state, status) => {
  state.dataLoader = status;
};
export const ORGANIZATION_SETTINGS_DETAILS = (state, data) => {
  state.bookCategory = data.bookCategory;
  state.classDiv = data.classDiv.sort((a, b) => a.priority - b.priority);
  state.classList = data.classList.sort((a, b) => a.priority - b.priority);
  state.classList.forEach((item) => {
    item.classListDiv.sort((a, b) => a.classDiv?.priority - b.classDiv?.priority);
  });
  state.createdAt = data.createdAt;
  state.department = data.department;
  state.designation = data.designation.sort((a, b) => a.priority - b.priority);
  state.houseZone = data.houseZone;
  state.id = data.id;
  state.subject = data.subject;
  state.type = data.type;
  state.updatedAt = data.updatedAt;
  state.studentCsvFields = data.csvFields;
  state.staffCsvFields = data.staffCsvFields;
  state.csvData.forEach((element) => {
    if (data.csvFields) {
      const objIndex = JSON.parse(data.csvFields).findIndex(
        (obj) => obj === element.name
      );
      if (objIndex >= 0) {
        element.status = true;
      }
    }
  });

  state.staffCSVData.forEach((element) => {
    if (data.staffCsvFields) {
      const objIndex = JSON.parse(data.staffCsvFields).findIndex(
        (obj) => obj === element.name
      );
      if (objIndex >= 0) {
        element.status = true;
      }
    }
  });
};
export const ORGANIZATION_BRANCH_DATA = (state, data) => {
  state.organizationBranchData = data.result;
  state.totalOrganizationBranch = data.total;
};
export const ADD_ASIGN_CLASS = (state, data) => {
  const objIndex = state.classList.findIndex(
    (obj) => obj.id === data.classListId
  );
  if (objIndex >= 0) {
    state.classList[objIndex].classListDiv.push({
      id: data.id,
      time_start: data.time_start,
      time_end: data.time_end,
      type: data.type,
      classDiv: { name: data.section },
      staffDetail: { name: data.teacher },
      coOrdinator: { name: data.coOrdinator },
      subject: { name: data.subject },
    });
  }
};
export const DELETE_ASIGN_CLASS = (state, data) => {
  const objIndex = state.classList.findIndex(
    (obj) => obj.id === data.classListId
  );
  if (objIndex >= 0) {
    const Index = state.classList[objIndex].classListDiv.findIndex(
      (obj) => obj.id === data.id
    );
    state.classList[objIndex].classListDiv.splice(Index, 1);
  }
};
export const ADD_BRANCH_ORGANIZATION = (state, data) => {
  if (state.organizationBranchData?.length < 10) {
    state.organizationBranchData.push(data);
  }
  state.totalOrganizationBranch = state.totalOrganizationBranch + 1;
};
export const UPDATE_ORGANIZATION = (state, data) => {
  const objIndex = state.organizationData.findIndex(
    (obj) => obj.id === data.id
  );
  if (objIndex >= 0) {
    state.organizationData[objIndex] = data;
  }
};
export const DELETE_ORGANIZATION = (state, data) => {
  const objIndex = state.organizationData.findIndex(
    (obj) => obj.id === data.id
  );
  if (objIndex >= 0) {
    state.organizationData.splice(objIndex, 1);
    state.totalOrganization = state.totalOrganization - 1;
  }
};
export const UPDATE_ORGANIZATION_STATUS = (state, data) => {
  const objIndex = state.organizationBranchData.findIndex(
    (obj) => obj.id === data.id
  );
  if (objIndex >= 0) {
    state.organizationBranchData[objIndex].status = data.status;
  }
};

export const ADD_CLASS = (state, data) => {
  state.classList.push(data);
};
export const UPDATE_CLASS = (state, data) => {
  const objIndex = state.classList.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.classList[objIndex] = data;
  }
};
export const DELETE_CLASS = (state, data) => {
  const objIndex = state.classList.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.classList.splice(objIndex, 1);
  }
};

export const ADD_DIVISION = (state, data) => {
  state.classDiv.push(data);
};
export const UPDATE_DIVISION = (state, data) => {
  const objIndex = state.classDiv.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.classDiv[objIndex] = data;
  }
};
export const DELETE_DIVISION = (state, data) => {
  const objIndex = state.classDiv.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.classDiv.splice(objIndex, 1);
  }
};

export const ADD_BOOK_CATEGORY = (state, data) => {
  state.bookCategory.push(data);
};
export const UPDATE_BOOK_CATEGORY = (state, data) => {
  const objIndex = state.bookCategory.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.bookCategory[objIndex] = data;
  }
};
export const DELETE_BOOK_CATEGORY = (state, data) => {
  const objIndex = state.bookCategory.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.bookCategory.splice(objIndex, 1);
  }
};

export const ADD_DEPARTMENT = (state, data) => {
  state.department.push(data);
};
export const UPDATE_DEPARTMENT = (state, data) => {
  const objIndex = state.department.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.department[objIndex] = data;
  }
};
export const DELETE_DEPARTMENT = (state, data) => {
  const objIndex = state.department.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.department.splice(objIndex, 1);
  }
};

export const ADD_DESIGNATION = (state, data) => {
  state.designation.push(data);
};
export const UPDATE_DESIGNATION = (state, data) => {
  const objIndex = state.designation.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.designation[objIndex] = data;
  }
};
export const DELETE_DESIGNATION = (state, data) => {
  const objIndex = state.designation.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.designation.splice(objIndex, 1);
  }
};

export const ADD_HOUSE_ZONE = (state, data) => {
  state.houseZone.push(data);
};
export const UPDATE_HOUSE_ZONE = (state, data) => {
  const objIndex = state.houseZone.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.houseZone[objIndex] = data;
  }
};
export const DELETE_HOUSE_ZONE = (state, data) => {
  const objIndex = state.houseZone.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.houseZone.splice(objIndex, 1);
  }
};

export const ADD_SUBJECT = (state, data) => {
  state.subject.push(data);
};
export const UPDATE_SUBJECT = (state, data) => {
  const objIndex = state.subject.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.subject[objIndex] = data;
  }
};
export const DELETE_SUBJECT = (state, data) => {
  const objIndex = state.subject.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.subject.splice(objIndex, 1);
  }
};
