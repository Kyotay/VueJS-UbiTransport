<template>
    <div>
        <modal v-if="showModal" >
            <transition name="modal">
                <div class="modal-mask">
                <div class="modal-wrapper">
                    <tr>
                        <th scope="col">
                            <div class="modal-container">
                            <div class="modal-header">
                                <h3 slot="header">{{ this.$store.state.employee.data.employee_name}}</h3>
                            </div>
                            <div class="modal-body">
                                <slot name="body">
                                    Id: {{ this.$store.state.employee.data.id}}
                                    <br>
                                    Age: {{ this.$store.state.employee.data.employee_age}}
                                    <br>
                                    Salary: {{ this.$store.state.employee.data.employee_salary}}
                                </slot>
                            </div>
                            <div class="modal-footer">
                                <slot name="footer">
                                <button class="modal-default-button" @click="showModal = false">
                                    Close
                                </button>
                                </slot>
                            </div>
                            </div>
                        </th>
                        <th scope="col">
                            <form
                                id="app"
                                @submit.prevent="updateEmployee">
                            <div class="modal-container">
                            <div class="modal-header">
                                <h3 slot="header">
                                    <input id="name" v-model="name" type="text" name="name">
                                </h3>
                            </div>
                            <div class="modal-body">
                                <slot name="body">
                                    <input id="id" disabled=true value="Id never move">
                                    <br>
                                    <input id="age" v-model="age" type="number" name="age" min="0">
                                    <br>
                                    <input id="salary" v-model="salary" type="number" name="salary" min="0">
                                </slot>
                            </div>
                            <div class="modal-footer">
                                <slot name="footer">
                                    <input
                                    type="submit"
                                    value="Update"
                                    >
                                </slot>
                            </div>
                            </div>
                            </form>
                            <button @click="deleteEmployee">Delete</button>
                        </th>
                    </tr>

                </div>
                </div>
            </transition>
        </modal>
    </div>
</template>

<script>
    export default {

        computed: {
            showModal: {
                    get () {
                        return this.$store.state.showModal
                    },
                    set (value) {
                        this.$store.commit('SHOW_MODAL', value)
                    }
                },
                salary: {
                    get () {
                        return this.$store.state.salary
                    },
                    set (value) {
                        this.$store.commit('UPDATE_SALARY', value)
                    }
                },
                age: {
                    get () {
                        return this.$store.state.age
                    },
                    set (value) {
                        this.$store.commit('UPDATE_AGE', value)
                    }
                },
                name: {
                    get () {
                        return this.$store.state.name
                    },
                    set (value) {
                        this.$store.commit('UPDATE_NAME', value)
                    }
                },
        },

        methods: {
            updateEmployee(submitEvent) {
                var newData = [];
                if (submitEvent.target.elements.name.value)
                {
                    console.log(submitEvent.target.elements.name.value);
                    newData.push(submitEvent.target.elements.name.value);
                }
                else
                    newData.push(this.$store.state.employee.data.employee_name);
                this.$store.dispatch('updateEmployee', newData);
            },

            deleteEmployee() {
                this.$store.dispatch('deleteEmployee');
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>