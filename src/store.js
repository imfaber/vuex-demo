import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    name: null,
    surname: null,
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    setCounter(state, value) {
      state.counter = value
    },
    setUser(state, user) {
      state.name = user.name
      state.surname = user.surname
    },
  },
  actions: {
    fetchUser(context) {
      // Pretend an ajax call to retrieve the user
      const user = {
        name: 'Fabrizio',
        surname: 'Meinero',
      }
      context.commit('setUser', user)
    }
  },
  getters: {
    fullName: state => {
      return `${state.name} ${state.surname}`
    }
  }
})