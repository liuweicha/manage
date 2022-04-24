export const setPageTitle = (context, flag) => {
  context.commit('SET_PAGE_TITLE', flag)
};
export const setUserBaseInfo = (context, data) => {
  context.commit('SET_USER_BASE_INFO', data)
};

export const errorMessage = (context, data) => {
  context.commit('SET_ERR_MESSAGE', data)
};
