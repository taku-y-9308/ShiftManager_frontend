<script setup>
    import TimeLine from '../components/TimeLine.vue'

    const columns = [
        { type: 'string', id: 'President' },
        { type: 'date', id: 'Start' },
        { type: 'date', id: 'End' },
    ];

    const rows = [
        ['Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
        ['Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
        ['Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)],
    ];

    const data = [columns, ...rows];
    console.log(data)
</script>

<template>
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