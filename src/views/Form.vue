<script>
import { mapActions } from 'pinia'
import { useGirlGroupStore } from '../stores/girlGroup'

export default {
  data() {
    return {
      dataInput: {
        name: null,
        company: null,
        imgUrl: null
      },
    }
  },
  methods: {
    ...mapActions(useGirlGroupStore, ['postGirlGroup'])
  },
}
</script>

<template>
  <div class="container d-flex justify-content-center">
    <div class="card p-3 w-50 mt-5">
      <h4 class="text-center mb-3">Add New Group</h4>

      <form @submit.prevent="postGirlGroup(dataInput)">

        <label for="Name" class="form-label">Name</label>
        <input v-model="dataInput.name" id="Name" type="text" placeholder="input name" class="form-control mb-3">

        <label for="Company" class="form-label">Company</label>
        <input v-model="dataInput.company" id="Company" type="text" placeholder="input company" class="form-control mb-3">

        <label for="imgUrl" class="form-label">ImageUrl</label>
        <input v-model="dataInput.imgUrl" id="imgUrl" type="text" placeholder="input image url" class="form-control mb-3">

        <button type="submit" class="btn btn-warning">Submit</button>
      </form>
    </div>
  </div>
</template>

<style></style>