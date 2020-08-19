<template>
  <div class="addEmployee">
    <AddEmployee />
  </div>
</template>

<script>
// @ is an alias to /src
import AddEmployee from '@/components/AddEmployee.vue'

export default {
  name: 'App',
  components: {
    AddEmployee
  }
}
</script>
