<script setup>
    import { defineProps  } from 'vue';
    import { GChart } from 'vue-google-charts';
    defineProps({
        data:Object
    })

    const settings = {
        packages: ['timeline'],
    }

</script>
<template>
    <GChart 
        type="Timeline"
        :data="data"
        :settings="settings"
    />
</template>