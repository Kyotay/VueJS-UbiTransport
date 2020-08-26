<template>
    <div class="container">
        <form
            id="app"
            @submit.prevent
            @submit="addEmployee"
            >
            <p>
                <label for="name">Name</label>
                <b-form-input id="name" v-model="name" type="text" name="name" :required="true"/>
            </p>
            <p>
                <label for="age">Age</label>
                <b-form-input id="age" v-model="age" type="number" name="age" min="18" :required="true"/>
            </p>
            <p>
                <label for="salary">Salary</label>
                <b-form-input id="salary" v-model="salary" type="number" name="salary" min="0" :required="true"/>
            </p>
            <b-button class="add-employee" variant="success" type="submit">Update</b-button>
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
            // Add one employee on the database by calling action.
            addEmployee() {
                this.$store.dispatch('addEmployee');
            }
        },
    }
</script>

<style scoped>
    .container {
        font-size: x-large;
    }
</style>