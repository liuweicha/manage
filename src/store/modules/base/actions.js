
import * as types from '../../mutation-types'
import {getUrl} from '../../../config/urlConfig'
import {getRequest, postRequest} from '../../../services/request'
export default {
  async roomListAction ({commit,state,rootState}, data){
    commit('IS_SHOW_LOADING',true);
    const url = getUrl('base','roomListUrl');
    try {
      const result = await postRequest(url, {});
      commit('IS_SHOW_LOADING', false);
      return result
    }catch (e) {
      commit('IS_SHOW_LOADING', false);
      return null
    }
  },

  async getGoodsAction ({commit,state,rootState}, data){
    commit('IS_SHOW_LOADING',true);
    const url = getUrl('base','getGoodsUrl');
    try {
      const result = await postRequest(url, data);
      commit('IS_SHOW_LOADING', false);
      return result
    }catch (e) {
      commit('IS_SHOW_LOADING', false);
      return null
    }
  },

  async roomDetailAction ({commit,state,rootState}, data){
    commit('IS_SHOW_LOADING',true);
    const url = getUrl('base','roomDetailUrl');
    try {
      const result = await postRequest(url, data);
      commit('IS_SHOW_LOADING', false);
      return result
    }catch (e) {
      commit('IS_SHOW_LOADING', false);
      return null
    }
  },

  async payGoodsAction ({commit,state,rootState}, data){
    commit('IS_SHOW_LOADING',true);
    const url = getUrl('base','payGoodsUrl');
    try {
      const result = await postRequest(url, data);
      commit('IS_SHOW_LOADING', false);
      return result
    }catch (e) {
      commit('IS_SHOW_LOADING', false);
      return null
    }
  },

  async payOrderAction ({commit,state,rootState}, data){
    commit('IS_SHOW_LOADING',true);
    const url = getUrl('base','payOrderUrl');
    try {
      const result = await postRequest(url, data);
      commit('IS_SHOW_LOADING', false);
      return result
    }catch (e) {
      commit('IS_SHOW_LOADING', false);
      return null
    }
  },

  async addGoodsAction ({commit,state,rootState}, data){
    commit('IS_SHOW_LOADING',true);
    const url = getUrl('base','addGoodsUrl');
    try {
      const result = await postRequest(url, data);
      commit('IS_SHOW_LOADING', false);
      return result
    }catch (e) {
      commit('IS_SHOW_LOADING', false);
      return null
    }
  },

  async createRoomAction ({commit,state,rootState}, data){
    commit('IS_SHOW_LOADING',true);
    const url = getUrl('base','createRoomUrl');
    try {
      const result = await postRequest(url, data);
      commit('IS_SHOW_LOADING', false);
      return result
    }catch (e) {
      commit('IS_SHOW_LOADING', false);
      return null
    }
  },

  async getCouponAction ({commit,state,rootState}, data){
    commit('IS_SHOW_LOADING',true);
    const url = getUrl('base','getCouponUrl');
    try {
      const result = await postRequest(url, data);
      commit('IS_SHOW_LOADING', false);
      return result
    }catch (e) {
      commit('IS_SHOW_LOADING', false);
      return null
    }
  },

  async showSharePopAction({commit,state,rootState}, data){
    commit('SET_IS_SHOW_SHARE_POP', data)
  },

  async setDownLoadUrl({commit, state, rootState}, data){
    commit("SET_DOWNLOAD_URL", data)
  },
  async isShowBigPicture({commit,state,rootState}, data){
    commit('SET_IS_SHOW_BIG_PICTURE', data)
  },
}
