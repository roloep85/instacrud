<script setup>
  import router from '@/router';
import { RouterLink } from 'vue-router';
</script>
<template>
  <main class="container mt-5">
    <h4>Users page
      <RouterLink to="/users/create" class="btn btn-primary float-end">
        Add User
      </RouterLink>
    </h4>
    <div class="clearfix pt-3"></div>
    <div class="row" v-if="users.length > 0">
      <div class="col-lg-6" v-for="(user, index) in users" :key="index">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-4 col-sm-3 overflow-hidden">
              <img :src="user.avatar" class="" alt="...">
            </div>
            <div class="col-8 col-sm-9">
              <div class="card-body position-relative">
                <div class="position-absolute bottom-0 end-0 btn-group">
                  <RouterLink :to="{path: '/users/edit/'+user.id}" class="btn btn-sm btn-outline-success">
                    <i class="bi bi-pencil-square"></i>
                  </RouterLink>
                  <button type="button" @click="deleteUser(user.id)" class="btn btn-sm btn-outline-danger">
                    <i x-if="" class="bi bi-trash"></i>
                  </button>
                </div>
                <h5 class="card-title text-truncate">{{ user.name }}</h5>
                <p class="card-text text-truncate">{{ user.email }}</p>
                <p class="card-text text-truncate"><small class="text-body-secondary">{{ user.phone }}</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-sm-6">
        <div class="card mb-3 placeholder-glow rounded-2 overflow-hidden" aria-hidden="true">
          <span class="placeholder" style="min-height: 130px;"></span>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card mb-3 placeholder-glow rounded-2 overflow-hidden" aria-hidden="true">
          <span class="placeholder" style="min-height: 130px;"></span>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card mb-3 placeholder-glow rounded-2 overflow-hidden" aria-hidden="true">
          <span class="placeholder" style="min-height: 130px;"></span>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card mb-3 placeholder-glow rounded-2 overflow-hidden" aria-hidden="true">
          <span class="placeholder" style="min-height: 130px;"></span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'users',
    data() {
      return {
        users: []
      }
    },
    mounted() {
      this.getUsers();
    },
    methods: {
      getUsers() {
        fetch('https://5932f11a76652a0011dcf8d6.mockapi.io/users')
        .then(res => this.users = res.json())
        .then(json => this.users = json)
      },
      deleteUser(id) {
        fetch('https://5932f11a76652a0011dcf8d6.mockapi.io/users/'+id, {
          method: 'DELETE',
        }).then(res => {
          if (res.ok) {
            this.getUsers();
          }
        }).catch(error => {
          // handle error
        });
      }
    }
  }
</script>