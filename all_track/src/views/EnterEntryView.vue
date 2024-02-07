<template>
  <main>
    <h1 id="title">Locations</h1>
    <Button class="pluss_button" icon="pi pi-plus" text raised />
    <ButtonBar class="buttonbar_bottom" />
  </main>
</template>

<script setup lang="ts">
import ButtonList from '@/components/ButtonList.vue'
import Button from 'primevue/button'
import ButtonBar from '@/components/ButtonBar.vue'
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

.buttonbar_bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
