<template>
  <div>
    <form id="search">
      Search <input name="query" v-model="message" />
    </form>
    {{message}}
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Salary</th>
      </tr>
      <tr v-for="(employee, index) in searchEmployees" :key="index" @click="modal(employee)" >
        <td>{{ employee.id }}</td>
        <td>{{ employee.employee_name }}</td>
        <td>{{ employee.employee_age }}</td>
        <td>{{ employee.employee_salary }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    
    computed: {
        message: {
            get () {
                return this.$store.state.keyword
            },
            set (value) {
                this.$store.commit('UPDATE_KEYWORD', value)
            }
        },

        employeeProfile: {
            get () {
                return this.$store.state.employeeProfile
            },
            set (value) {
                this.$store.commit('UPDATE_ONE_EMPLOYEE', value)
            }
        },

      searchEmployees() {
        var tempEmployees = this.$store.state.employees.data;
        var tempMessage = this.message.toLowerCase();
        if (tempMessage) {
          tempEmployees = tempEmployees.filter(function (row) {
            return Object.keys(row).some(function (key) {
              return String(row[key]).toLowerCase().indexOf(tempMessage) > -1;
            });
          });
        }
        return tempEmployees;
      }

    },
    methods: {
      modal(employee) {
        this.$store.state.showModal = true;
        this.employeeProfile = employee;
        this.$store.dispatch('loadEmployeeById', this.employeeProfile.id);
      }
    },

    created() {
    this.$store.dispatch('loadEmployees');
  }
  }
</script>

<style lang="scss" scoped>

</style>