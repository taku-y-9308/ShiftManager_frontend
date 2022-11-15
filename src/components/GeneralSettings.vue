<script setup>
import axios from 'axios';
import dispLoading from '../assets/loading'

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
axios.defaults.xsrfCookieName = "csrftoken"
dispLoading('Loading...');

axios
    .post()
</script>

<template>

    <div class="card">
        <h3 class="card-header">一般設定</h3>
        <div class="card-body">
            <div class="form-group">
            <label for="formGroupExampleInput">ショップID</label>
            <input type="number" class="form-control" id="shop_id" readonly>
            </div>
            <div class="form-group">
            <label for="formGroupExampleInput">ユーザー名</label>
            <img src="/static/ShiftManagementApp/pencil.svg" width="15px" class="ml-2" onclick="change_username();">
            <input type="text" class="form-control" id="username"  readonly>
            </div>
            <div class="form-group">
            <label for="formGroupExampleInput">メールアドレス</label>
            <img src="/static/ShiftManagementApp/pencil.svg" width="15px" class="ml-2" onclick="change_email();">
            <input type="email" class="form-control" id="email" readonly>
            </div>
        </div>
    </div>
</template>