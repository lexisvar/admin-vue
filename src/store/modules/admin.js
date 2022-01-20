import * as types from '../mutation-types'

const initialState = {
  sidebarVisible: '',
  sidebarUnfoldable: false,
}

export const admin = {
  namespaced: true,
  state: initialState,
  getters: {
    sidebarVisible: (state) => state.sidebarVisible,
    sidebarUnfoldable: (state) => state.sidebarUnfoldable,
  },
  actions: {
    setSideBarVisible({ commit }, sideBarVisible) {
      commit(types.SET_SIDEBAR_VISIBLE, { sideBarVisible })
    },
    setSidebarUnfoldable({ commit }, sidebarUnfoldable) {
      commit(types.SET_SIDEBAR_UNFOLDABLE, { sidebarUnfoldable })
    },
    toggleSidebar({ commit }, sidebarVisible) {
      commit('toggleSidebar', { sidebarVisible })
    },
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    [types.SET_SIDEBAR_UNFOLDABLE](state) {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
    },
    [types.SET_SIDEBAR_VISIBLE](state, payload) {
      state.sidebarVisible = payload.value
    },
  },
  modules: {},
}
