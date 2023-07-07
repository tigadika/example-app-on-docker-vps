import { defineStore } from 'pinia'
import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export const useGirlGroupStore = defineStore('girlgroup', {
  state: () => ({
    girlGroups: [],
    username: 'radhea'
  }),
  getters: {},
  actions: {
    // cara mudah u/ router + pinia
    async postLogin(dataInput) {
      try {
        const { data } = await axios({
          method: 'post',
          url: baseUrl + '/users',
          data: dataInput
        })

        localStorage.access_token = data
        this.router.push('/')
      } catch (error) {
        console.log(error);
      }
    },

    // cara sulit u/ router + pinia
    doLogin(dataInput) {
      return axios({
        method: 'post',
        url: baseUrl + '/users',
        data: dataInput
      })
    },

    async fetchGirlGroup() {
      try {
        const { data } = await axios({
          method: 'get',
          url: baseUrl + '/girlgroups',
          headers: {
            access_token: localStorage.access_token
          }
        })

        this.girlGroups = data
      } catch (error) {
        console.log(error);
      }
    },
    async postGirlGroup(dataInput) {
      try {
        await axios({
          method: 'post',
          url: baseUrl + '/girlgroups',
          headers: {
            access_token: localStorage.access_token
          },
          data: dataInput
        })

        this.router.push('/')
      } catch (error) {
        console.log(error);
      }
    },
    logout() {
      localStorage.clear()
      this.router.push('/login')
    }
  }
})