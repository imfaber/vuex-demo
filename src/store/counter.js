export default {
  namespaced: true,
  state: {
    counter: 0,
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
  },
}