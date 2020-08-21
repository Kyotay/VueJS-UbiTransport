<template>
    <div v-if="showModal">
            <transition name="modal">
                <div class="modal-mask">
                <div class="modal-wrapper">
                    <form
                        id="app"
                        @submit.prevent="updateEmployee">
                    <div class="modal-container">
                        <b-button class="close" type="button" variant="success" @click="showModal = false">X</b-button>
                    <div class="modal-header">
                        <h3 slot="header">
                            {{ this.$store.state.employee.data.employee_name }}
                            <b-form-input id="name" v-model="name" type="text" name="name" placeholder="New name"/>
                        </h3>
                    </div>
                    <div class="modal-body">
                        <slot name="slot-body">
                            <h4>
                                Current Id: {{ this.$store.state.employee.data.id}}
                            </h4> 
                            <b-form-input id="id" :disabled="true" value="Id never move"/>
                            <br>
                            <h4>
                                Current age: {{ this.$store.state.employee.data.employee_age}}
                            </h4> 
                            <b-form-input id="age" v-model="age" type="number" name="age" min="0"/>
                            <br>
                            <h4>
                                Current salary: {{ this.$store.state.employee.data.employee_salary}}
                            </h4> 
                            <b-form-input id="salary" v-model="salary" type="number" name="salary" min="0"/>
                        </slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer">
                        <b-button class="delete-employee" variant="danger" type="button" @click="deleteEmployee">Delete</b-button>
                        <b-button class="update-employee" variant="success" type="submit">Update</b-button>
                        </slot>
                    </div>
                    </div>
                    </form>
                </div>
                </div>
            </transition>
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
                    newData.push(submitEvent.target.elements.name.value);
                else
                    newData.push(this.$store.state.employee.data.employee_name);
                this.$store.dispatch('updateEmployee', newData);
            },

            deleteEmployee() {
                this.$store.dispatch('deleteEmployee');
            }
        },
        created() {
            this.$store.state.employee.data = [];
        }
    }
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 35%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  padding-left: 10px;
    text-align: left;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-body h4 {
    padding-left: 10px;
    text-align: left;
    color: #42b983;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.delete-employee {
    margin-top: 0px;
}

</style>