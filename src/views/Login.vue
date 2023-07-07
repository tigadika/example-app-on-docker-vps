<script>
import { mapActions } from 'pinia';
import { useGirlGroupStore } from '../stores/girlGroup'

export default {
  data() {
    return {
      inputLogin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(useGirlGroupStore, ['postLogin', 'doLogin']),

    // cara sulit part 2
    async doingLogin() {
      try {
        const response = await this.doLogin(this.inputLogin)

        console.log(response);
        this.$router.push('/')
      } catch (error) {
        console.log(error);
      }
    }
  }
}

</script>

<template>
  <div class="container d-flex justify-content-center">
    <div class="card p-3 w-50 mt-5">
      <h4 class="text-center mb-3">Login</h4>

      <form @submit.prevent="postLogin(dataInput)">
        <label for="Email" class="form-label">Email</label>
        <input v-model="inputLogin.email" id="Email" type="email" placeholder="input email" class="form-control mb-3">

        <label for="Password" class="form-label">Password</label>
        <input v-model="inputLogin.password" id="Password" type="password" placeholder="input password"
          class="form-control mb-3">

        <button type="submit" class="btn btn-warning">Submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
