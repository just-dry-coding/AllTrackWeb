<template>
  <div class="button-container" v-for="item of items" :key="item">
    <Button class="button" :label="item" />
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
// get these items here from the database
// maybe only a table with the names of the items
// in the next view we need to fetch the corresponding metrics to the item

const props = defineProps({
  items: {
    type: Array as () => string[],
    required: true,
    default: () => []
  },
  onClick: {
    type: Function,
    required: true
  }
})

let items = props.items
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.button {
  flex: 1;
  margin: 10px;
  width: 220px;
  border-radius: 15px;
}
</style>
