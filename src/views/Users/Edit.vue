<template>
    <main class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Edit User</h4>
            </div>
            <div class="card-body">
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
                    <button type="button" @click="saveUser()" class="btn btn-primary">Save</button>
                </div>
            </div>
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
            saveUser() {
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
