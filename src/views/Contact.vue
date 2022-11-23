<script setup>
import MenuBar from '../components/MenuBar.vue';
</script>

<template>
    <MenuBar />
    <form>
        <div class="form-group">
            <label class="control-label">お問い合わせタイトル</label>
            <input type="text" class="form-control">
        </div>
        <div class="form-group">
            <label class="control-label">お問い合わせ内容</label>
            <textarea class="form-control" cols="30" rows="10"></textarea>
        </div>
        <button class="btn btn-danger" type="submit" id="submit-contact">送信</button>
    </form>
    <div class=".h5 text-left mt-3">
    ＊送信するとユーザー情報も送信されます
    </div>
</template>