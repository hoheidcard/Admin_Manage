export const SET_LOAD_MORE = (state, status) => {
  state.loadMore = status;
};

export const SET_DATA_LOADER = (state, status) => {
  state.dataLoader = status;
};

export const PARTNERS_DATA = (state, data) => {
  state.partnersData = data.result;
  state.totalPartners=data.total
};
export const PARTNERS_DETAILS = (state, data) => {
  state.partnerPermissionData=data.perms

  state.partnerPermissionData.forEach(element => {
    const allTrue = element.userPermission.every(obj => obj.status === true);
    element.allStatus = allTrue
  });

  state.accountId=data.result.accountId
  state.city=data.result.city
  state.createdAt=data.result.createdAt
  state.firmAddress=data.result.firmAddress
  state.firmEmail=data.result.firmEmail
  state.firmName=data.result.firmName
  state.firmShort=data.result.firmShort
  state.gstDetail=data.result.gstDetail
  state.id=data.result.id
  state.logo=data.result.logo
  state.logoName=data.result.logoName
  state.natureOfBusiness=data.result.natureOfBusiness
  state.ownerEmail=data.result.ownerEmail
  state.ownerMobile=data.result.ownerMobile
  state.ownerName=data.result.ownerName
  state.ownerWhatsApp=data.result.ownerWhatsApp
  state.pincode=data.result.pincode
  state.settingId=data.result.settingId
  state.singleMultiType=data.result.singleMultiType
  state.state=data.result.state
  state.status=data.result.status
  state.updatedAt=data.result.updatedAt
  state.updatedId=data.result.updatedId
  state.website=data.result.website
}
export const UPDATE_PARTNERS_STATUS = (state, data) => {
  const objIndex = state.partnersData.findIndex((obj) => obj.id === data.id);
  if(objIndex>=0){
    state.partnersData[objIndex].status=data.status
  }
};
