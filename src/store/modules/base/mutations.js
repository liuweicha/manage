export default {

  SET_IS_SHOW_SHARE_POP(state,data){
    state.isShowSharePop = data;
  },

  SET_DOWNLOAD_URL(state, data){
    state.downLoadUrl = data.url;
    state.isOpenInApp = data.type;
  },
  SET_IS_SHOW_BIG_PICTURE(state,data){
    state.isShowBigPicture = data;
  },
  SET_LIST_DATA(state,data){
    state.listData = data;
  }
}
