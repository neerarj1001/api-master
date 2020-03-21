export const state = () => ({
    employee: {},
    users: []
  })
  
  export const actions = {
    createEmployee ({commit}, payload) {
      this.$axios.post('http://dummy.restapiexample.com/api/v1/create', payload)
      .then(res => {
          commit('setEmployee', res.data.data)
      })
      .catch()
    },
  
    fetchEmployees ({commit}) {
        this.$axios.get('http://dummy.restapiexample.com/api/v1/employee/1')
        .then(res => {
            commit('setUsers', res.data.data)
        })
    }
  }
  
  export const mutations = {
  
    setEmployee (state, payload) {
      state.employee = payload
    },
  
    setUsers (state, users) {
        users.forEach( (user, index)  => {
            state.users.push(user)
        })
    }
  }