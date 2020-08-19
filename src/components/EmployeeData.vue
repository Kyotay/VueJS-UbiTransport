<template>
  <div>
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Salary</th>
      </tr>
      <tr v-for="employee in employees.data" :key="employee">
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
      employees() {
        return this.$store.state.employees; 
      }
    },
    created() {
    this.$store.dispatch('loadEmployees');
  }
  }
</script>

<style lang="scss" scoped>

</style>