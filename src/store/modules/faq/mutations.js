export const SET_LOAD_MORE = (state, status) => {
  state.loadMore = status;
};

export const SET_DATA_LOADER = (state, status) => {
  state.dataLoader = status;
};

export const FAQ_DATA = (state, data) => {
  state.faqData = data.result;
  state.totalFaq=data.total
};
export const ADD_FAQ_DATA = (state, data) => {
  if(data.changeStatus==='PENDING'){
    if(state.faqData.length<10){
      state.faqData.push(data)
    }
    state.totalFaq=state.totalFaq+1
  }
};

export const UPDATE_FAQ_DATA = (state, data) => {
  const objIndex = state.faqData.findIndex((obj) => obj.id === data.id);
  if(objIndex>=0){
    state.faqData[objIndex]=data
  }
};
export const UPDATE_FAQ_STATUS = (state, data) => {
  const objIndex = state.faqData.findIndex((obj) => obj.id === data.id);
  if(objIndex>=0){
    state.faqData[objIndex].status=data.status
  }
};

 
