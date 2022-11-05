<script setup>
import { defineProps } from 'vue'
defineProps({
    username:String
})

</script>

<template>
    <p class="h6 text-right">ログイン中:{{username}}さん</p>
</template>