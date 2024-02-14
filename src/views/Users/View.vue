<script setup>
  // import axios from 'axios';
  import { RouterLink } from 'vue-router';
</script>
<template>
  <main class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>This is the users page
          <RouterLink to="/users/create" class="btn btn-primary float-end">
            Add Student
          </RouterLink>
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered"> 
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="users.length > 0">
            <tr v-for="(student, index) in users" :key="index">
              <td>{{ student.id }}</td>
              <td>{{ student.name }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.phone }}</td>
              <td>
                <RouterLink :to="{path: '/users/edit/'+student.id}" class="btn btn-sm btn-outline-success me-1">Edit</RouterLink>
                <button type="button" class="btn btn-sm btn-outline-danger">Delete</button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="5">Loading...</td>
            </tr>
          </tbody>
        </table>
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
      createStudent() {
        
      },
      getUsers() {
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => this.users = response.json())
        .then(json => this.users = json)
      }
    }
  }
</script>