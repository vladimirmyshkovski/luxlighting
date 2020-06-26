import Vuex from 'vuex'
const SET_PASSWORD = 'SET_PASSWORD'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      password: ''
    }),
    actions: {
      setPassword({ commit }, payload) {
        commit(SET_PASSWORD, payload)
      }
    },
    mutations: {
      [SET_PASSWORD](store, payload) {
        store.password = payload
      }
    }
  })
}

export default createStore
