export const SET_LOAD_MORE = (state, status) => {
  state.loadMore = status;
};
export const SET_LOADER_BUTTON = (state, status) => {
  state.loaderButton = status;
};
export const SET_DATA_LOADER = (state, status) => {
  state.dataLoader = status;
};
export const SET_PERMISSION = (state, data) => {
  state.permissiondata = data;
};
export const ALL_ADMIN = (state, data) => {
  state.adminData = data.result;
  state.totalAdmin = data.total;
};

export const STAFF_DETAILS = (state, data) => {
  state.permissiondata = data.perms
  state.permissiondata.forEach(element => {
    const allTrue = element.userPermission.every(obj => obj.status === true);
    element.allStatus = allTrue
  });
  state.account = data.user?.account
  state.accountId = data.user?.accountId
  state.address = data.user?.address
  state.canteen = data.user?.canteen
  state.cast = data.user?.cast
  state.city = data.user?.city
  state.contactNo = data.user?.contactNo
  state.createdAt = data.user?.createdAt
  state.designationId = data.user?.designationId
  state.dob = data.user?.dob
  state.emailId = data.user?.emailId
  state.gender = data.user?.gender
  state.guardianContactNo = data.user?.guardianContactNo
  state.guardianIncome = data.user?.guardianIncome
  state.guardianName = data.user?.guardianName
  state.guardianOccupation = data.user?.guardianOccupation
  state.guardianRelation = data.user?.guardianRelation
  state.hostel = data.user?.hostel
  state.id = data.user?.id
  state.joiningDate = data.user?.joiningDate
  state.library = data.user?.library
  state.name = data.user?.name
  state.nationality = data.user?.nationality
  state.pincode = data.user?.pincode
  state.profile = data.user?.profile
  state.profileName = data.user?.profileName
  state.religion = data.user?.religion
  state.rfidNo = data.user?.rfidNo
  state.spouseContactNo = data.user?.spouseContactNo
  state.spouseIncome = data.user?.spouseIncome
  state.spouseName = data.user?.spouseName
  state.spouseOccupation = data.user?.spouseOccupation
  state.staffDocument = data.user?.staffDocument
  state.state = data.user?.state
  state.status = data.user?.status
  state.transport = data.user?.transport
  state.updatedAt = data.user?.updatedAt
  state.updatedBy = data.user?.updatedBy
};

export const ADD_ADMIN = (state, data) => {
  state.adminData.push(data);
};

export const UPDATE_STAFF = (state, data) => {
  const objIndex = state.adminData.findIndex((obj) => obj.id === data.accountId);
  if (objIndex >= 0) {
    state.adminData[objIndex].staffDetail.name = data.name;
    state.adminData[objIndex].staffDetail.emailId = data.emailId;
    state.adminData[objIndex].staffDetail.dob = data.dob;
    state.adminData[objIndex].staffDetail.gender = data.gender;
  }
  state.adminModal = false
};
export const UPDATE_STAFF_STATUS = (state, data) => {
  const objIndex = state.adminData.findIndex((obj) => obj.id === data.id);
  if(objIndex>=0){
    state.adminData[objIndex].status=data.status
  }
};
