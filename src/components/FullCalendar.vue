<script setup>
import { reactive } from 'vue'
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

const calendarOptions = reactive({
    plugins: [ dayGridPlugin, interactionPlugin ],
    initialView: 'dayGridMonth',
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
    }

})

</script>
<template>
  <FullCalendar :options="calendarOptions"/>
</template>