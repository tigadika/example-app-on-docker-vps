<script>
import Card from './Card.vue';
import { useGirlGroupStore } from '../stores/girlGroup'
import { mapActions, mapState } from 'pinia';

export default {
  components: {
    Card
  },
  computed: {
    ...mapState(useGirlGroupStore, ['girlGroups'])
  },
  methods: {
    ...mapActions(useGirlGroupStore, ['fetchGirlGroup'])
  },
  created() {
    this.fetchGirlGroup()
  }
}
</script>

<template>
  <!-- container items -->
  <div class="col-9 container my-5">
    <div class="row g-3">


      <!-- looping items -->
      <Card v-for="girlgroup in girlGroups" :key="girlgroup.id" :girlgroup="girlgroup" />

    </div>
  </div>
</template>

<style></style>