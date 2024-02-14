<template>
    <main class="container mt-5">
        <h4>Add User</h4>
        <div class="mb-3">
            <label for="name">Name</label>
            <input id="name" type="text" v-model="model.user.name" class="form-control">
        </div>
        <div class="mb-3">
            <label for="email">Email</label>
            <input id="email" type="text" v-model="model.user.email" class="form-control">
        </div>
        <div class="mb-3">
            <label for="phone">Phone</label>
            <input id="phone" type="text" v-model="model.user.phone" class="form-control">
        </div>
        <div class="mb-3">
            <button type="button" @click="createUser()" class="btn btn-primary">Create</button>
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
        methods: {
            createUser() {
                fetch('https://5932f11a76652a0011dcf8d6.mockapi.io/users', {
                    method: 'POST',
                    headers: {'content-type':'application/json'},
                    body: JSON.stringify(this.model.user)
                }).then(res => {
                if (res.ok) {
                    return res.json();
                }

                }).then(user => {

                }).catch(error => {

                })
            }
        }
    }
</script>