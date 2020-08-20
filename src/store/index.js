import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import API from './api'

Vue.use(Vuex, VueAxios);

export default new Vuex.Store({

  state: {
    employees: [],
    employeeProfile: [],
    employee: [],
    keyword: "",
    showModal: false,
    name: "",
    age: 0,
    salary: 0 ,
    create_name: "",
    create_age: 0,
    create_salary: 0
  },

  mutations: {
    SAVE_EMPLOYEES(state, employees) {
      state.employees = employees;
    },

    SAVE_EMPLOYEE(state, employee) {
      state.employee = employee;
    },

    UPDATE_KEYWORD(state, keyword) {
      state.keyword = keyword;
    },

    UPDATE_NAME(state, name) {
      state.name = name;
    },

    UPDATE_AGE(state, age) {
      state.age = age;
    },

    UPDATE_SALARY(state, salary) {
      state.salary = salary;
    },

    CREATE_NAME(state, create_name) {
      state.create_name = create_name;
    },

    CREATE_AGE(state, create_age) {
      state.create_age = create_age;
    },

    CREATE_SALARY(state, create_salary) {
      state.create_salary = create_salary;
    },

    SHOW_MODAL(state, showModal) {
      state.showModal = showModal;
    },

    UPDATE_ONE_EMPLOYEE(state, employeeProfile) {
      state.employeeProfile = employeeProfile;
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

    loadEmployeeById({commit}, id) {
      API.get('employee/' + id).then(result => {
        commit('SAVE_EMPLOYEE', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },

    addEmployee() {
      API.post('create', {"name":this.state.create_name, "salary":this.state.create_salary, "age":this.state.create_age}, {headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }})
    .then(data => {
      console.log(data);
    //handle the data
    })
    .catch(error => {
        console.log(error.response)
    })
    },

    updateEmployee(newData) {
      API.put('update/' + this.state.employee.data.id, newData, {headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }})
      .then(data => {
        console.log(data);
      //handle the data
      })
      .catch(error => {
          console.log(error.response)
      })
    },

    deleteEmployee() {
      API.delete('delete/' + this.state.employee.data.id, {headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }})
    .then(data => {
      console.log(data);
    //handle the data
    })
    .catch(error => {
        console.log(error.response)
    })
    }

  },

  modules: {
  }
})
