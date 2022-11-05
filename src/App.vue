<script setup>
//RouterLink
import { RouterView } from 'vue-router'
import MenuBar from './components/MenuBar.vue'
</script>

<template>
   <MenuBar />
    <main role="main" class="container">
      <RouterView />
    </main>
</template>

<style>
main{
  margin-top:100px;
}
</style>
