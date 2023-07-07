import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// ini adalah composition
export const useCounterStore = defineStore('counter', {
  state() {
    return {
      count: 0,
      name: 'Dony',
      status: 'admin'
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  },
})

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

