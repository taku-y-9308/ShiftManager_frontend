<script setup>
    import FullCalendar from '../components/FullCalendar.vue'
    import axios from 'axios';
    import { reactive } from 'vue'

    const  params = { withCredentials: true }
    let shifts = reactive([]);
    let shift = {};
    axios.get('http://127.0.0.1:8000/shifts/',params)
    
    .then((res) => {

        for(let i=0;i<res.data.length;i++){
            shift = {
                id:res.data[i].id,
                titie:'shift',
                start:res.data[i].begin,
                end:res.data[i].finish,
                backgroundColor: "red",
		        borderColor: "red",
		        editable: 'true'
            }
            shifts.push(shift);
        }
        console.log(shifts);
    })

    
</script>
<template>
    <FullCalendar :shifts="shifts"/>
</template>