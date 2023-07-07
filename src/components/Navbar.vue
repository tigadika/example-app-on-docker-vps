<script>
import { mapActions } from 'pinia';
import { useGirlGroupStore } from '../stores/girlGroup'

export default {
  methods: {
    ...mapActions(useGirlGroupStore, ['logout'])
  }
}
</script>

<template>
  <nav class="navbar navbar-light bg-warning px-5 sticky-top">
    <router-link to="/">
      <span class="navbar-brand mb-0 h1">Database Group</span>
    </router-link>
    <div class="d-flex justify-content-around">
      <router-link to="/add" class="btn btn-outline-primary me-4">Add New</router-link>
      <button @click="logout" class="btn btn-outline-danger">Logout</button>
    </div>
  </nav>
</template>

<style></style>