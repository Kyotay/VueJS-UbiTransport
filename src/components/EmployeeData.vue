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
      <tr v-for="employee in searchEmployees" :key="employee">
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

        /*employees: {
            get () {
                return this.$store.state.employees.data
            },
            set (value) {
                this.$store.commit('SAVE_EMPLOYEES', value)
            }
        },*/

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
    created() {
    this.$store.dispatch('loadEmployees');
  }
  }
</script>

<style lang="scss" scoped>

</style>