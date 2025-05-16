export const SET_LOAD_MORE = (state, status) => {
  state.loadMore = status;
};

export const SET_DATA_LOADER = (state, status) => {
  state.dataLoader = status;
};

export const ORGANIZATION_DATA = (state, data) => {
  state.organizationData = data.result;
  state.totalOrganization = data.total;
};

export const ORGANIZATION_BRANCH_DATA = (state, data) => {
  state.organizationBranchData = data.result;
  state.totalOrganizationBranch = data.total;
};
export const ORGANIZATION_DETAILS = (state, data) => {
  state.orgPermissionData = data.perms;

  state.orgPermissionData.forEach((element) => {
    const allTrue = element.userPermission.every((obj) => obj.status === true);
    element.allStatus = allTrue;
  });

  state.accountId = data.result.accountId;
  state.accountType = data.result.accountType;
  state.address = data.result.address;
  state.city = data.result.city;
  state.contactNo = data.result.contactNo;
  state.createdAt = data.result.createdAt;
  state.email = data.result.email;
  state.id = data.result.id;
  state.image = data.result.image;
  state.imageName = data.result.imageName;
  state.name = data.result.name;
  state.ownerEmail = data.result.ownerEmail;
  state.ownerMobile = data.result.ownerMobile;
  state.ownerName = data.result.ownerName;
  state.ownerWhatsApp = data.result.ownerWhatsApp;
  state.pincode = data.result.pincode;
  state.numberOfBranch = data.result.numberOfBranch;
  state.settingId = data.result.settingId;
  state.state = data.result.state;
  state.status = data.result.status;
  state.type = data.result.type;
  state.updatedAt = data.result.updatedAt;
  state.updated = data.result.updated;
  state.updatedId = data.result.updatedId;
  state.website = data.result.website;
  state.whatsApp = data.result.whatsApp;
};
export const ADD_ORGANIZATION = (state, data) => {
  if (state.organizationData?.length < 10) {
    state.organizationData.push(data);
  }
  state.totalOrganization = state.totalOrganization + 1;
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
export const ORGANIZATION_EVENT_LIST = (state, data) => {
  state.organizationEventList = data.result;
};

export const PARTNER_EVENT_LIST = (state, data) => {
  state.organizationEventList = data.result.map((item) => {
    const { firmName, ...rest } = item;
    return { name: firmName, ...rest };
  });
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
  const objIndex = state.organizationData.findIndex(
    (obj) => obj.id === data.id
  );
  if (objIndex >= 0) {
    state.organizationData[objIndex].status = data.status;
  }
};
