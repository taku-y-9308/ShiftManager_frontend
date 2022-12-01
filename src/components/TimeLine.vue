<script setup>
    import { toRefs} from 'vue';
    import { GChart } from 'vue-google-charts';
    const props = defineProps({
        data:Array
    })

    const { data } = toRefs(props)
    
    const settings = {
        packages: ['timeline'],
    }
    const Options = {
        timeline:{
            showBarLabels:false//バーラベルをOFF、shift_idが入ってる
        }
    }
    console.log(props.data)
</script>
<template>
    <GChart 
        type="Timeline"
        :data="props.data"
        :settings="settings"
        :options="Options"
    />
</template>