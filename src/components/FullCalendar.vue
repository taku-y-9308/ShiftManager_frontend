<script setup>
import { reactive, watch } from 'vue'
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

let shifts = defineProps({
    shifts:Array
})
let events = [];
watch(()=>{shifts},()=>{
    events.push(shifts)
    console.log(events)
},)

const calendarOptions = reactive({
    plugins: [ dayGridPlugin, interactionPlugin ],
    initialView: 'dayGridMonth',
    timeZone:'Asia/Tokyo',
    locale: 'ja',
    displayEventEnd :true,
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'listMonth,dayGridMonth,timeGridWeek'
    },
    dayCellContent: function (e) {
          e.dayNumberText = e.dayNumberText.replace('日', '');
    },
    eventDisplay:'block',
    navLinks: false,
    editable: false,
    selectable: false,
    businessHours: true,
    eventBackgroundColor:'ff0000',
    contentHeight: 'auto',
    selectLongPressDelay:0,
    eventTimeFormat:{
        hour: 'numeric',
        minute: '2-digit',
        omitZeroMinute: true,
        meridiem: 'narrow'
    },
    events:shifts.shifts

})

</script>
<template>
  <FullCalendar :options="calendarOptions"/>
</template>