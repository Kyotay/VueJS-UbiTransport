<template>
  <div>
    <form id="search">
      <b-form-input class="search-employee" name="query" v-model="message" type="search" placeholder="Search an employee" size="lg"/>
    </form>
    <!--Old table -->
    <!--<table align="center">
      <tr class="employees-list-header">
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Salary</th>
      </tr>
      <tr class="employees-list" v-for="(employee, index) in searchEmployees" :key="index" @click="modal(employee)" >
        <td>{{ employee.id }}</td>
        <td>{{ employee.employee_name }}</td>
        <td>{{ employee.employee_age }}</td>
        <td>{{ employee.employee_salary }}</td>
      </tr>
    </table>-->
    <b-table
      class="table-employee"
      show-empty
      selectable
      select-mode="single"
      large
      bordered
      hover
      head-variant="light"
      stacked="md"
      :items="searchEmployees"
      @row-selected="modal"
    />
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
        this.loadEmployeesFiltered(tempEmployees);
        return tempEmployees;
      }

    },
    methods: {
      modal(employee) {
        if (employee[0] != undefined)
        {
          this.$store.dispatch('loadEmployeeById', employee[0].id);
          this.$store.state.showModal = true;
        }
      },

      loadEmployeesFiltered(tempEmployees) {
        this.$store.state.employeesFiltered = tempEmployees;
      }
    },

    created() {
    this.$store.dispatch('loadEmployees');
  }
  }
</script>

<style scoped>
  .table-employee{
    margin: 20px;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
  }

  .search-employee {
    margin-left: auto;
    margin-right: auto;
    max-width: 600px;
  }
</style>