<template>
    <div class="button-container" v-for="item of items" :key="item">
       <Button class="button" :label="item" rounded/> 
    </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'

let items = ["some", "more", "nonesense"]
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
    width: 200px;
}
</style>