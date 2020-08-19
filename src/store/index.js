import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import API from './api'

Vue.use(Vuex, VueAxios);

export default new Vuex.Store({
  state: {
    employees: []
  },
  mutations: {
    SAVE_EMPLOYEES(state, employees) {
      state.employees = employees;
    }
  },
  actions: {
    loadEmployees({commit}) {
      API.get('employees').then(result => {
        commit('SAVE_EMPLOYEES', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    addEmployee() {
      API.post('create', {"name":"test","salary":"123","age":"23"}, {headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }})
      .then(data => {
        console.log(data);
        //handle the data
    })
    .catch(error => {
        console.log(error.response)
    })
    },
  },
  modules: {
  }
})
