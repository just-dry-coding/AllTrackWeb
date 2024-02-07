<template>
  <main>
    <h1 id="title">
      {{ $route.params.locationName }}
    </h1>
    <Button class="pluss_button" icon="pi pi-plus" text raised />
    <Button class="save_bottom" label="Save" />
  </main>
</template>

<script setup lang="ts">
// need to fetch the metrics from the db
// need
import ButtonList from '@/components/ButtonList.vue'
import Button from 'primevue/button'
</script>

<style scoped>
#title {
  text-align: center;
  margin-top: 0;
}

.pluss_button {
  position: fixed;
  display: block;
  bottom: 15%;
  right: 10%;
  width: 60px;
  height: 60px;
}

.save_bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 10px;
  background-color: #2d2d2d;
  height: 55px;
}
</style>
