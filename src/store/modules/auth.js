import AuthService from '../../services/auth.service'

const user = JSON.parse(
  localStorage.getItem(process.env.VUE_APP_NAME + '_user'),
)
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null }
export const auth = {
  namespaced: true,
  state: initialState,
  getters: {
    user: (state) => state.user,
    token: (state) => state.user.token,
  },
  actions: {
    login({ commit }, user) {
      return AuthService.login(user)
        .then((user) => {
          commit('loginSuccess', user)
          return Promise.resolve(user)
        })
        .catch((error) => {
          commit('loginFailure')
          return Promise.reject(error.response.data)
        })
    },
    logout({ commit }) {
      AuthService.logout()
      commit('logout')
    },
    register({ commit }, user) {
      return AuthService.register(user)
        .then((response) => {
          commit('registerSuccess')
          return Promise.resolve(response.data)
        })
        .catch((error) => {
          return Promise.reject(error.response.data)
        })
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true
      state.user = user
    },
    loginFailure(state) {
      state.status.loggedIn = false
      state.user = null
    },
    logout(state) {
      state.status.loggedIn = false
      state.user = null
    },
    registerSuccess(state) {
      state.status.loggedIn = false
    },
    registerFailure(state) {
      state.status.loggedIn = false
    },
  },
}
