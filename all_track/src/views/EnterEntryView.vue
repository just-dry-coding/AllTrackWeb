<template>
  <main>
    <h1 id="title">
      {{ $route.params.locationName }}
    </h1>
    <ButtonList :items="metrics" :on-click="openMetricEntryDialog" />
    <Button id="pluss_button" icon="pi pi-plus" text raised />
    <Button id="save_bottom" label="Save" />
    <DialogBox :display="display" :on-click="addMetric" @on-close="hideDialogBox" />
  </main>
</template>

<script setup lang="ts">
// need to fetch the metrics from the db
// on save, need to write the metrics to the db
import { ref } from 'vue'

import ButtonList from '@/components/ButtonList.vue'
import Button from 'primevue/button'
import DialogBox from '@/components/DialogBox.vue'

let metrics = ref(['NiDan', 'OneArmer', '10+8mm'])
let display = ref(false)

const openMetricEntryDialog = (metric: string) => {
  display.value = true
  console.log(metric)
}

const hideDialogBox = () => {
  display.value = false
}

const addMetric = (newMetric: string) => {
  console.log(newMetric)
}
</script>

<style scoped>
#title {
  text-align: center;
  margin-top: 0;
}

#pluss_button {
  position: fixed;
  display: block;
  bottom: 15%;
  right: 10%;
  width: 60px;
  height: 60px;
}

#save_bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 10px;
  background-color: #2d2d2d;
  height: 55px;
}
</style>
