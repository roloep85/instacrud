<template>
    <main class="container mt-5">
        <h4>Edit User</h4>
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
            <button type="button" @click="saveUser()" class="btn btn-primary">Update</button>
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
            getUser() {
                fetch('https://5932f11a76652a0011dcf8d6.mockapi.io/users/'+user.id)
                .then(response => this.model.user = response.json())
                .then(json => console.log(json))

            },
            updateUser() {
                fetch('https://jsonplaceholder.typicode.com/user/:id', {
                    method: 'POST',
                    body: JSON.stringify({
                        title: 'foo',
                        body: 'bar',
                        userId: 1,
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then((response) => response.json())
                .then((json) => console.log(json));
            }
        }
    }
</script>
