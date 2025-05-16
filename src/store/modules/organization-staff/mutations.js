export const SET_LOAD_MORE = (state, status) => {
  state.loadMore = status;
};
export const SET_LOADER_BUTTON = (state, status) => {
  state.loaderButton = status;
};
export const SET_DATA_LOADER = (state, status) => {
  state.dataLoader = status;
};
export const ALL_ORGANIZATION_STAFF = (state, data) => {
  state.branchStaffData = data.result;
  state.totalBranchStaff = data.total;
};
export const ALL_ORGANIZATION_STAFF_LIST = (state, data) => {
  state.staffList = data.result;
};

const sortByDay = (a, b) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days.indexOf(a.name) - days.indexOf(b.name);
};

export const STAFF_DETAILS = (state, data) => {
  console.log(data);
  state.account = data.user?.account;
  state.designation = data.user?.designation;
  state.accountId = data.user?.accountId;
  state.address = data.user?.address;
  state.canteen = data.user?.canteen;
  state.cast = data.user?.cast;
  state.city = data.user?.city;
  state.contactNo = data.user?.contactNo;
  state.createdAt = data.user?.createdAt;
  state.designationId = data.user?.designationId;
  state.dob = data.user?.dob;
  state.emailId = data.user?.emailId;
  state.gender = data.user?.gender;
  state.guardianContactNo = data.user?.guardianContactNo;
  state.guardianIncome = data.user?.guardianIncome;
  state.guardianName = data.user?.guardianName;
  state.guardianOccupation = data.user?.guardianOccupation;
  state.guardianRelation = data.user?.guardianRelation;
  state.hostel = data.user?.hostel;
  state.id = data.user?.id;
  state.joiningDate = data.user?.joiningDate;
  state.library = data.user?.library;
  state.name = data.user?.name;
  state.nationality = data.user?.nationality;
  state.organizationDetailId = data.user?.organizationDetailId;
  state.organizationDetail = data.user?.organizationDetail;
  state.pincode = data.user?.pincode;
  state.profile = data.user?.profile;
  state.profileName = data.user?.profileName;
  state.religion = data.user?.religion;
  state.rfidNo = data.user?.rfidNo;
  state.spouseContactNo = data.user?.spouseContactNo;
  state.spouseIncome = data.user?.spouseIncome;
  state.spouseName = data.user?.spouseName;
  state.spouseOccupation = data.user?.spouseOccupation;
  state.staffDepartment = data.user?.staffDepartment;
  state.staffDocument = data.user?.staffDocument;
  state.staffSubject = data.user?.staffSubject;
  state.state = data.user?.state;
  state.status = data.user?.status;
  state.classListDiv = data.user?.classListDiv;
  state.coOrdinator = data.user?.coOrdinator;
  state.transport = data.user?.transport;
  state.updatedAt = data.user?.updatedAt;
  state.updatedBy = data.user?.updatedBy;
  state.permissiondata = data.perms;
  state.permissiondata.forEach((element) => {
    const allTrue = element.userPermission.every((obj) => obj.status === true);
    element.allStatus = allTrue;
  });
};
export const ADD_PERIOD = (state, data) => {
  const objIndex = state.staffTimeTable.findIndex(
    (obj) => obj.id === data.staffTimeTableId
  );
  const Period = state.staffTimeTable[objIndex].period;
  Period.push(data);
};
export const DELETE_PERIOD = (state, data) => {
  const objIndex = state.staffTimeTable.findIndex(
    (obj) => obj.id === data.scheduleId
  );
  const Periods = state.staffTimeTable[objIndex].period;
  const prioudsIndex = Periods.findIndex((obj) => obj.id === data.id);

  if (prioudsIndex >= 0) {
    state.staffTimeTable[objIndex].period.splice(prioudsIndex, 1);
  }
};
export const UPDATE_PERIOD = (state, data) => {
  const objIndex = state.staffTimeTable.findIndex(
    (obj) => obj.id === data.data.staffTimeTableId
  );
  const periodIndex = state.staffTimeTable[objIndex].period.findIndex(
    (obj) => obj.id === data.periodId
  );
  state.staffTimeTable[objIndex].period[periodIndex] = data.data;
};
export const ADD_STAFF = (state, data) => {
  state.branchStaffData.push(data);
};
export const ADD_STAFF_CLASS = (state, data) => {
  state.staffClass.push(data);
};
export const DELETE_STAFF_CLASS = (state, data) => {
  const objIndex = state.staffClass.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.staffClass.splice(objIndex, 1);
  }
};
export const ADD_STAFF_DEPARTMENT = (state, data) => {
  state.staffDepartment.push(data);
};
export const DELETE_STAFF_DEPARTMENT = (state, data) => {
  const objIndex = state.staffDepartment.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.staffDepartment.splice(objIndex, 1);
  }
};

export const ADD_STAFF_DIVISION = (state, data) => {
  state.staffDivision.push(data);
};
export const DELETE_STAFF_DIVISION = (state, data) => {
  const objIndex = state.staffDivision.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.staffDivision.splice(objIndex, 1);
  }
};

export const ADD_STAFF_SUBJECT = (state, data) => {
  state.staffSubject.push(data);
};
export const DELETE_STAFF_SUBJECT = (state, data) => {
  const objIndex = state.staffSubject.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.staffSubject.splice(objIndex, 1);
  }
};

export const ADD_STAFF_DOC = (state, data) => {
  state.staffDocument.push(data);
};
export const DELETE_STAFF_DOC = (state, data) => {
  const objIndex = state.staffDocument.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.staffDocument.splice(objIndex, 1);
  }
};

export const UPDATE_STAFF = (state, data) => {
  const objIndex = state.branchStaffData.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.branchStaffData[objIndex].name = data.name;
    state.branchStaffData[objIndex].emailId = data.emailId;
    state.branchStaffData[objIndex].dob = data.dob;
    state.branchStaffData[objIndex].gender = data.gender;
    state.branchStaffData[objIndex].designation = { name: data.designation };
  }
  state.staffModal = false;
};
export const UPDATE_STAFF_STATUS = (state, data) => {
  const objIndex = state.branchStaffData.findIndex(
    (obj) => obj.accountId === data.id
  );
  if (objIndex >= 0) {
    state.branchStaffData[objIndex].status = data.status;
  }
};
