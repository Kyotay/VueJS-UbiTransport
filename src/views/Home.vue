<template>
  <div class="home">
    <EmployeeData />
    <EmployeeProfile />
  </div>
</template>

<script>
// @ is an alias to /src
import EmployeeData from '@/components/EmployeeData.vue'
import EmployeeProfile from '@/components/EmployeeProfile.vue'

export default {
  name: 'App',
  components: {
    EmployeeData,
    EmployeeProfile
  }
}
</script>
