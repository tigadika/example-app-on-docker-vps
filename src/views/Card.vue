<script>
export default {
  props: ['girlgroup'] // {name, id, imgUrl}
}
</script>

<template>
  <div class="col-3">
    <div class="card">
      <img :src="girlgroup.imgUrl" style="height: 12rem; object-fit: cover;" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ girlgroup.name }}</h5>
        <p class="card-text">{{ girlgroup.company }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>