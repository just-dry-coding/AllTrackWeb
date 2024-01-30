<template>
  <Dialog
    header="Add Location"
    :visible="props.display"
    :closable="true"
    :modal="true"
    @update:visible="emit('onClose')"
  >
    <InputText class="input-field" v-model="textInput" placeholder="Enter new location" />
    <Button class="add-button" label="Add" @click="props.onClick(textInput ?? '')" />
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import { ref } from 'vue'

const props = defineProps({
  onClick: {
    type: Function,
    required: true
  },
  display: {
    type: Boolean,
    required: true
  }
})
let textInput = ref('')
const emit = defineEmits(['onClose'])
</script>

<style scoped>
.input-field {
  margin-top: 10px;
}
.add-button {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
