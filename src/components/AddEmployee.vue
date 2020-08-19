<template>
    <div>
        <form
            id="app"
            @submit="addEmployee"
            >
            <p>
                <label for="id">Id</label>
                <input
                id="id"
                v-model="id"
                type="number"
                name="id"
                min="0"
                >
            </p>
            <p>
                <label for="name">Name</label>
                <input
                id="name"
                v-model="name"
                type="text"
                name="name"
                >
            </p>
            <p>
                <label for="age">Age</label>
                <input
                id="age"
                v-model="age"
                type="number"
                name="age"
                min="0"
                >
            </p>
            <p>
                <label for="salary">Salary</label>
                <input
                id="salary"
                v-model="salary"
                type="number"
                name="salary"
                min="0"
                >
            </p>
            <p>
                <input
                type="submit"
                value="Add this employee"
                >
            </p>
        </form>
    </div>
</template>

<script>
    export default {
        methods: {
            addEmployee() {
                this.$store.dispatch('addEmployee');
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>