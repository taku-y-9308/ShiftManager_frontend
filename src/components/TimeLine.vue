<script setup>
    import { defineProps  } from 'vue';
    import { GChart } from 'vue-google-charts';
    defineProps({
        data:Object
    })

    const settings = {
        packages: ['timeline'],
    }
    const Options = {
        timeline:{
            showBarLabels:false//バーラベルをOFF、shift_idが入ってる
        }
    }
</script>
<template>
    <GChart 
        type="Timeline"
        :data="data"
        :settings="settings"
        :options="Options"
    />
</template>