import { createStore } from 'vuex'
import { auth } from './modules/auth'
import { admin } from './modules/admin'

const store = createStore({
  modules: {
    auth,
    admin,
  },
})

export function useStore() {
  return store
}

export default store
