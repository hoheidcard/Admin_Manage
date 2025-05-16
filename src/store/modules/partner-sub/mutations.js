export const SET_LOAD_MORE = (state, status) => {
  state.loadMore = status;
};

export const SET_DATA_LOADER = (state, status) => {
  state.dataLoader = status;
};

export const SUB_PARTNERS_DATA = (state, data) => {
  state.subPartnersData = data.result;
  state.totalSubPartners=data.total
};
export const PARTNERS_DETAILS = (state, data) => {
  state.accountId=data.accountId
  state.city=data.city
  state.createdAt=data.createdAt
  state.firmAddress=data.firmAddress
  state.firmEmail=data.firmEmail
  state.firmName=data.firmName
  state.firmShort=data.firmShort
  state.gstDetail=data.gstDetail
  state.id=data.id
  state.logo=data.logo
  state.logoName=data.logoName
  state.natureOfBusiness=data.natureOfBusiness
  state.ownerEmail=data.ownerEmail
  state.ownerMobile=data.ownerMobile
  state.ownerName=data.ownerName
  state.ownerWhatsApp=data.ownerWhatsApp
  state.pincode=data.pincode
  state.settingId=data.settingId
  state.singleMultiType=data.singleMultiType
  state.state=data.state
  state.status=data.status
  state.updatedAt=data.updatedAt
  state.updatedId=data.updatedId
  state.website=data.website
}
export const UPDATE_SUB_PARTNERS_STATUS = (state, data) => {
  const objIndex = state.subPartnersData.findIndex((obj) => obj.id === data.id);
  if(objIndex>=0){
    state.subPartnersData[objIndex].status=data.status
  }
};
