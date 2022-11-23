<script setup>
    import TimeLine from '../components/TimeLine.vue'
    import MenuBar from '../components/MenuBar.vue';

    const columns = [
        { type: 'string', id: 'name' },
        { type: 'string', id: 'shift_id' },
        { type: 'string', id: 'style' ,role: 'style' },
        { type: 'date', id: 'start' },
        { type: 'date', id: 'end' }

    ];

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

    let rows = [];

    for(let i=0;i<response_data.length;i++){
        const name = response_data[i]['name']
        const shift_id = String(response_data[i]['shift_id'])
        const style = response_data[i]['style']
        const start = response_data[i]['start']
        const end = response_data[i]['end']
        rows.push(
            [name,shift_id,style,new Date(start),new Date(end)]
        )
    }

 

    const data = [columns, ...rows];
</script>

<template>
    <MenuBar />
    <div class="container">
        <div class="row">
            <div class="col-5">
                <input type="date" class="form-control"  placeholder="タップして日付を入力" id="edit-date">
            </div>
            <button type="button" class="btn btn-primary mr-3" id="submit-date">送信</button>
            <button type="button" class="btn btn-secondary mr-3" id="create-newshift">新規シフト作成</button>
            <button type="button" class="btn btn-danger" id="open_publish_shift_modal">シフト公開</button>
        </div>
    </div>

    <TimeLine 
        :data="data"
        class="mt-4"
    />
</template>