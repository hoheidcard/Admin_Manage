export const SET_DATA = (state, data) => {
  state.data = data.result;
  state.total = data.total;
};
export const SET_DETAIL = (state, data) => {
  state.detail = data;
};
export const ADD_DATA = (state, data) => {
  if (state.data?.length < 10) {
    state.data.push(data);
  }
  state.total = state.total + 1;
};
export const UPDATE_DATA = (state, data) => {
  const objIndex = state.data.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.data[objIndex].code = data.code;
    state.data[objIndex].title = data.title;
    state.data[objIndex].shortDesc = data.shortDesc;
    state.data[objIndex].desc = data.desc;
    state.data[objIndex].price = data.price;
    state.data[objIndex].discount = data.discount;
    state.data[objIndex].discountedPrice = data.discountedPrice;
    state.data[objIndex].finalPrice = data.finalPrice;
    state.data[objIndex].partnerDiscount = data.partnerDiscount;
    state.data[objIndex].additionalDiscount = data.additionalDiscount;
    state.data[objIndex].productVariant = data.productVariant;
    state.data[objIndex].categoryId = data.categoryId;
  }
};

export const PUSH_IMAGE = (state, data) => {
  const objIndex = state.data.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.data[objIndex].productImage.push(data.productImage);
  }
};

export const DELETE_IMAGE = (state, data) => {
  console.log(data)
  const objIndex = state.data.findIndex((obj) => obj.id === data.rowId);
  console.log(objIndex);
  if (objIndex >= 0) {
    const Index = state.data[objIndex].productImage.findIndex(
      (obj) => obj.id === data.id
    );
    if (Index >= 0) {
      state.data[objIndex].productImage.splice(objIndex, 1);
    }
  }
};

export const UPDATE_IMAGE = (state, data) => {
  const objIndex = state.data.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.data[objIndex].image = data.image;
  }
};

export const UPDATE_STATUS = (state, data) => {
  const objIndex = state.data.findIndex((obj) => obj.id === data.id);
  if (objIndex >= 0) {
    state.data[objIndex].status = data.status;
  }
};
