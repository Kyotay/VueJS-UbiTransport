<template>
  <div class="home">
    <EmployeeData />
    <EmployeePagination />
    <EmployeeProfile />
  </div>
</template>

<script>
// @ is an alias to /src
import EmployeeData from '@/components/EmployeeData.vue'
import EmployeeProfile from '@/components/EmployeeProfile.vue'
import EmployeePagination from '@/components/EmployeePagination.vue'

export default {
  name: 'App',
  components: {
    EmployeeData,
    EmployeeProfile,
    EmployeePagination
  }
}
</script>
