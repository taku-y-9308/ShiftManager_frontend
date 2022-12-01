<script setup>
    import { ref,reactive,isReactive } from 'vue'
    import TimeLine from '../components/TimeLine.vue'
    import axios from 'axios';

    
    const search_date = ref()
    console.log(search_date.value)

    const columns = [
        { type: 'string', id: 'name' },
        { type: 'string', id: 'shift_id' },
        { type: 'string', id: 'style' ,role: 'style' },
        { type: 'date', id: 'start' },
        { type: 'date', id: 'end' }

    ];
    let data = reactive([columns]);

    function get_shifts(){
        const  params = { withCredentials: true }
        axios.get(`http://127.0.0.1:8000/shifts/?date_gte=${search_date.value}&date_lte=${search_date.value}`,params)
        .then((res)=>{

            for(let i=0;i<res.data.length;i++){
                //キッチンかホールかによってバーの色を変える
                let rgb_style;
                if(res.data[i].position == true){
                    rgb_style = '#0000ff'
                }else{
                    rgb_style = '#ff0000'
                }
                const name = res.data[i].username
                const shift_id = String(res.data[i].id)
                const style = rgb_style
                const start = res.data[i].begin
                const end = res.data[i].finish
                data.push(
                    [name,shift_id,style,new Date(start),new Date(end)]
                )

            }
            console.log(`isReactive:${isReactive(data)}`)//false
            console.log(data)
        })
        
    }

    const response_data = [
        {
            "shift_id": 1453,
            "name": "テストユーザー１",
            "date": "2022-11-06",
            "style": "#0000ff",
            "start": "2022-11-05T21:00:00Z",
            "end": "2022-11-06T03:00:00Z"
        },
        {
            "shift_id": 1328,
            "name": "テストユーザー２",
            "date": "2022-11-06",
            "style": "#0000ff",
            "start": "2022-11-06T08:00:00Z",
            "end": "2022-11-06T12:00:00Z"
        },
        {
            "shift_id": 1212,
            "name": "テストユーザー３",
            "date": "2022-11-06",
            "style": "#ff0000",
            "start": "2022-11-06T00:00:00Z",
            "end": "2022-11-06T06:00:00Z"
        }
    ]
console.log(data)

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-5">
                <input v-model="search_date" type="date" class="form-control"  placeholder="タップして日付を入力" id="edit-date">
            </div>
            <button type="button" class="btn btn-primary mr-3" id="submit-date" @click="get_shifts">送信</button>
            <button type="button" class="btn btn-secondary mr-3" id="create-newshift">新規シフト作成</button>
            <button type="button" class="btn btn-danger" id="open_publish_shift_modal">シフト公開</button>
        </div>
    </div>

    <TimeLine 
        :data="data"
        class="mt-4"
    />
</template>