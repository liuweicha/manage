export const mutations = {
  IS_SHOW_LOADING(state, data){
    state.showLoadTip = data;
    let _timer = setTimeout(() => {
      state.showLoadTip = false;
      clearTimeout(_timer);
    }, 5000);
  },
  SET_PAGE_TITLE(state, data){
    state.pageTitle = data;
  },
  SET_USER_BASE_INFO(state, data){
    state.userBaseInfo = data;
  },
  SET_ERR_MESSAGE(state, data){
    state.errorMessage.msg = data.msg;
    state.errorMessage.status = data.status;
    setTimeout(() => {
      state.errorMessage.msg = "";
      state.errorMessage.status = false;
    }, 2000)
  }
};
