<template>
  <main>
    <h1 id="title">Locations</h1>
    <ButtonList :items="locations" :on-click="handleLocationClicked" />
    <Button id="pluss_button" icon="pi pi-plus" text raised @click="onPlussButtonClicked" />
    <ButtonBar class="buttonbar_bottom" @mode-changed="handleModeChange" />
    <DialogBox :display="display" :on-click="addLocation" @on-close="hideDialogBox" />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ButtonList from '@/components/ButtonList.vue'
import Button from 'primevue/button'
import ButtonBar from '@/components/ButtonBar.vue'
import DialogBox from '@/components/DialogBox.vue'
import { ApplicationMode } from '@/enums/ApplicationMode'
import { useRouter } from 'vue-router'

const router = useRouter()

// fetch this info from db
let locations = ref(['Shibuya', 'Home', 'Takadanobaba'])
let display = ref(false)

const handleModeChange = (mode: ApplicationMode) => {
  console.log(mode)
}

const onPlussButtonClicked = () => {
  display.value = true
}

const addLocation = (newLocation: string) => {
  if (newLocation) {
    locations.value.push(newLocation)
    newLocation = ''
    display.value = false
  }
}

const hideDialogBox = () => {
  display.value = false
}

const handleLocationClicked = (location: string) => {
  router.push({ name: 'enter', params: { locationName: location } })
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

.buttonbar_bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
