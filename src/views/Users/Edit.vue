<template>
    <main class="container mt-5">
        <h4>Edit User</h4>
        <div class="mb-3 d-none">
            <label for="id">Id</label>
            <input id="id" type="text" v-model="model.user.id" class="form-control">
        </div>
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
            <RouterLink to="/users" class="btn btn-secondary me-1"><i class="bi bi-chevron-left"></i></RouterLink>
            <button type="button" @click="updateUser($route.params.id)" class="btn btn-primary"><span>Update</span> Details <i class="bi bi-clipboard-check"></i></button>
        </div>
        <div v-if="model.successful" class="bg-success p-2 text-dark bg-opacity-25">User details successfully updated. You can go <RouterLink to="/users">back</RouterLink> or update it again.</div>
    </main>
</template>
<script>
  export default {
        name: 'userCreate',

        data() {
            return {
                model: {
                    successful: false,
                    user: {
                        name: '',
                        email: '',
                        phone: ''
                    }
                }
            }
        },
        mounted() {
            this.getUser(this.$route.params.id);
        },
        methods: {
            getUser(userId) {
                fetch('https://5932f11a76652a0011dcf8d6.mockapi.io/users/'+userId)
                .then(response => this.model.user = response.json())
                .then(json => this.model.user = json)

            },
            updateUser(userId) {
                fetch('https://5932f11a76652a0011dcf8d6.mockapi.io/users/'+userId, {
                    method: 'PUT',
                    body: JSON.stringify(this.model.user),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then((response) => response.json())
                .then(json => this.model.user = json)
                .then(this.model.successful = true)
                // .then(this.goToUsers())
            },
            // goToUsers() {
            //     this.$router
            //     .push({ path: '/users'})
            //     .then(() => { this.$router.go() })
            // }
        }
    }
</script>
