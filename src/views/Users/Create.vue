<template>
    <main class="container mt-5">
        <h4>Add User</h4>
        <div class="mb-3">
            <label for="name">Name</label>
            <input id="name" type="text" v-model="model.user.name" class="form-control">
            <!-- <small v-if="isEmptyName" class="text-danger">Please enter a name</small> -->
        </div>
        <div class="mb-3">
            <label for="email">Email</label>
            <input id="email" type="email" v-model="model.user.email" class="form-control">
            <!-- <small v-if="isEmptyEmail" class="text-danger">Please enter an email</small> -->
        </div>
        <div class="mb-3">
            <label for="phone">Phone</label>
            <input id="phone" type="text" v-model="model.user.phone" class="form-control">
            <!-- <small v-if="isEmptyPhone" class="text-danger">Please enter a phone number</small> -->
        </div>
        <div class="mb-3">
            <RouterLink to="/users" class="btn btn-secondary me-1"><i class="bi bi-chevron-left"></i></RouterLink>
            <button type="button" @click="createUser()" class="btn btn-primary" :disabled="this.model.user.name == '' || this.model.user.email == '' || this.model.user.phone == ''">Add User <i class="bi bi-person-plus"></i></button>
        </div>
    </main>
</template>
<script>
    export default {
        name: 'userCreate',
        data() {
            return {
                model: {
                    user: {
                        name: '',
                        email: '',
                        phone: ''
                    }
                }
            }
        },
        // computed: {
        //     isEmptyName() {
        //         return !this.model.user.name;
        //     },
        //     isEmptyEmail() {
        //         return !this.model.user.email;
        //     },
        //     isEmptyPhone() {
        //         return !this.model.user.phone;
        //     },
        // },
        methods: {
            createUser() {
                fetch('https://5932f11a76652a0011dcf8d6.mockapi.io/users', {
                    method: 'POST',
                    headers: {'content-type':'application/json'},
                    body: JSON.stringify(this.model.user)
                }).then(res => {
                if (res.ok) {
                    this.goToUsers();
                }

                }).then(user => {

                }).catch(error => {

                })
            },
            goToUsers() {
                this.$router.push({ name: 'users'});
            }
        }
    }
</script>