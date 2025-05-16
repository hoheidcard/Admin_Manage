export const SET_LOAD_MORE = (state, status) => {
  state.loadMore = status;
};

export const SET_DATA_LOADER = (state, status) => {
  state.dataLoader = status;
};

export const FEEDBACK_DATA = (state, data) => {
  state.feedbackData = data.result;
  state.totalFeedback=data.total
};

export const UPDATE_FAQ_DATA = (state, data) => {
  const objIndex = state.faqData.findIndex((obj) => obj.id === data.id);
  if(objIndex>=0){
    state.faqData[objIndex]=data
  }
};
export const UPDATE_FEEDBACK_STATUS = (state, data) => {
  const objIndex = state.feedbackData.findIndex((obj) => obj.id === data.id);
  if(objIndex>=0){
    state.feedbackData[objIndex].status=data.status
  }
};

 
