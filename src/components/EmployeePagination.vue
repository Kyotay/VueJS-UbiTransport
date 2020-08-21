<template>
    <div>
        <span v-for="(item, index) in new Array(5)" :key="index">
            <b-button class="paginationButton" @click="$store.dispatch('showEmployees', index + 1)" >{{index +1}}</b-button>
        </span>
    </div>
</template>

<script>
    export default {
            created() {
            this.$store.state.employeesFiltered = [];
        }
    }
</script>

<style scoped>
    .paginationButton {
        background-color: #42b983;
        border: none;
        margin: 5px;
    }
</style>