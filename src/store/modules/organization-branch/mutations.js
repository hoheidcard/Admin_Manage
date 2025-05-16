export const SET_LOAD_MORE = (state, status) => {
  state.loadMore = status;
};

export const SET_DATA_LOADER = (state, status) => {
  state.dataLoader = status;
};

export const ORGANIZATION_BRANCH_DATA = (state, data) => {
  state.organizationBranchData = data.result;
  state.totalOrganizationBranch = data.total;
};

export const ADD_BRANCH_ORGANIZATION = (state, data) => {
  if (state.organizationBranchData?.length < 10) {
    state.organizationBranchData.push(data)
  }
  state.totalOrganizationBranch = state.totalOrganizationBranch + 1
};
export const UPDATE_ORGANIZATION = (state, data) => {
  const objIndex = state.organizationData.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.organizationData[objIndex] = data
  }
};
export const DELETE_ORGANIZATION = (state, data) => {
  const objIndex = state.organizationData.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.organizationData.splice(objIndex,1)
    state.totalOrganization = state.totalOrganization - 1
  }
};
export const UPDATE_ORGANIZATION_STATUS = (state, data) => {
  const objIndex = state.organizationBranchData.findIndex((obj) => obj.id === data.id);
  if(objIndex>=0){
    state.organizationBranchData[objIndex].status=data.status
  }
};