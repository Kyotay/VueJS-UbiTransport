import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import API from './api'

Vue.use(Vuex, VueAxios);

const state = {
  employees: [],
  employee: [],
  employeesFiltered: [],
  employeesFilteredFull: [],
  keyword: "",
  showModal: false,
  name: "",
  age: 0,
  salary: 0 ,
  create_name: "",
  create_age: 0,
  create_salary: 0
}

// Mutations
export const mutations = {
  SAVE_EMPLOYEES(state, employees) {
    state.employees = employees;
  },

  SAVE_EMPLOYEE(state, employee) {
    state.employee = employee;
  },

  UPDATE_EMPLOYEESFILTERED(state, employeesFiltered) {
    state.employeesFiltered = employeesFiltered;
  },

  UPDATE_EMPLOYEESFILTEREDFULL(state, employeesFilteredFull) {
    state.employeesFilteredFull = employeesFilteredFull;
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
  }
}

// Actions
export const actions = {

  // Get all employees from the database, and commit the value to the variables.
  showEmployees({commit}, pageNumber) {
    API.get('employees').then(result => {
      commit('SAVE_EMPLOYEES', result.data);
      commit('UPDATE_EMPLOYEESFILTEREDFULL', result.data);
      let stock = this.state.employeesFilteredFull.data;
      if (pageNumber == 1)
        this.state.employees.data = stock.slice(0, (pageNumber * 5 ));
      else
        this.state.employees.data = stock.slice((pageNumber * Math.round(stock.length/5) + 1) - 6, pageNumber * Math.round(stock.length/5));
    }).catch(error => {
      throw new Error(`API ${error}`);
    });
  },

  // Get employee from the database
  loadEmployees({commit}) {
    API.get('employees').then(result => {
      commit('SAVE_EMPLOYEES', result.data);
      commit('UPDATE_EMPLOYEESFILTEREDFULL', result.data);
      this.state.employees.data = this.state.employeesFilteredFull.data.slice(0, 5);
    }).catch(error => {
      throw new Error(`API ${error}`);
    });
  },

  // Get one employee from the database by specific ID
  loadEmployeeById({commit}, id) {
    API.get('employee/' + id).then(result => {
      commit('SAVE_EMPLOYEE', result.data);
    }).catch(error => {
      throw new Error(`API ${error}`);
    });
  },

  // Add one new employee to the database with values get from the form.
  addEmployee() {
    API.post('create', {"employee_name":this.state.create_name.toString(), "employee_salary":this.state.create_salary.toString(), "employee_age":this.state.create_age.toString()}, {headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }})
    .then(result => {
      alert("Request result:\n- Statut: " + result.status + "\n- Statut text: " + result.statusText + "\n- Message: " + result.data.message + "\n- New employee ID: " + result.data.data.id );
    })
    .catch(error => {
        console.log(error.response)
    })
  },

  // Update values of the selected employee (ID can't be modified)
  updateEmployee(newData) {
    API.put('update/' + this.state.employee.data.id, newData, {headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }})
      .then(result => {
        alert("Request update employee result:\n- Statut: " + result.status + "\n- Statut text: " + result.statusText + "\n- Message: " + result.data.message);
      })
      .catch(error => {
          console.log(error.response)
      })
  },

  // Delete one specific employee from the database by ID
  deleteEmployee(id) {
    API.delete('delete/' + id, {headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }})
    .then(result => {
        alert("Request update employee result:\n- Statut: " + result.status + "\n- Statut text: " + result.statusText + "\n- Message: " + result.data.message);
    })
    .catch(error => {
        console.log(error.response)
    })
  }
}

export default new Vuex.Store({

  state,
  mutations,
  actions
})
