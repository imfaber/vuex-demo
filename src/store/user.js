export default {
  namespaced: true,
  state: {
    name: null,
    surname: null,
  },
  mutations: {
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
}