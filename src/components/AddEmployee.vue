<template>
    <div>
        <form
            id="app"
            @submit.prevent="false"
            @submit="addEmployee"
            >
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
        computed: {
            salary: {
                get () {
                    return this.$store.state.salary
                },
                set (value) {
                    this.$store.commit('CREATE_SALARY', value)
                }
            },
            age: {
                get () {
                    return this.$store.state.age
                },
                set (value) {
                    this.$store.commit('CREATE_AGE', value)
                }
            },
            name: {
                get () {
                    return this.$store.state.name
                },
                set (value) {
                    this.$store.commit('CREATE_NAME', value)
                }
            },
        },

        methods: {
            addEmployee() {
                this.$store.dispatch('addEmployee');
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>