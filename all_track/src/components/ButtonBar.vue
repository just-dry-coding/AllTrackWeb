<template>
  <div class="button-container">
    <Button
      class="button"
      :class="{ active: activeButton === ApplicationMode.ENTER }"
      label="Enter"
      @click="onClick(ApplicationMode.ENTER)"
    />
    <Button
      class="button"
      :class="{ active: activeButton === ApplicationMode.VIEW }"
      label="View"
      @click="onClick(ApplicationMode.VIEW)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import { ApplicationMode } from '@/enums/ApplicationMode'

const emit = defineEmits(['modeChanged'])
let activeButton = ref(ApplicationMode.ENTER)

const onClick = (currentMode: ApplicationMode) => {
  activeButton.value = currentMode
  emit('modeChanged', currentMode)
}
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.button {
  width: 120px;
  height: 55px;
  background-color: #acacac;
}

.active {
  background-color: #2d2d2d;
}
</style>