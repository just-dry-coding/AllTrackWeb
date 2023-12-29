<template>
  <main>
    <ButtonList/>

    <Button class="pluss_button" icon="pi pi-plus" text raised/>
  </main>
</template>

<script setup lang="ts">
import ButtonList from '../components/ButtonList.vue'
import Button from 'primevue/button'
</script>

<style scoped>
.pluss_button {
  position: fixed;
  display: block;
  bottom: 15%;
  right: 10%;
  width: 60px;
  height: 60px;
}
  </style>