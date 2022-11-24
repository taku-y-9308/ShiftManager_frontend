<script setup>
    import { RouterLink } from 'vue-router'
    import { useRouter } from 'vue-router'
    import axios from 'axios'
    
    const router = useRouter()  
    function logout() {
        const  params = { withCredentials: true }
        console.log(router)
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        axios.defaults.xsrfCookieName = "csrftoken"
        axios.post('http://127.0.0.1:8000/dj-rest-auth/logout/',{},params)
        .then((res) => {
            router.push({name:'login'})
            console.log(res)

        })
        .catch((res) => {
            console.log(res)
        })
    }

</script>

<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                <RouterLink class="nav-link" to="/home">ホーム</RouterLink>
                </li>
                <li class="nav-item">
                <RouterLink class="nav-link" to="/submit-shift">シフト提出</RouterLink>
                </li>  
                <li class="nav-item">
                <RouterLink class="nav-link" to="/edit-shift">シフト編集</RouterLink>
                </li>
                <li class="nav-item">
                <RouterLink class="nav-link" to="/contact">お問い合わせ</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" to="/line">LINE連携</RouterLink>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">管理者メニュー</a>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="{% url 'ShiftManagementApp:general-settings'%}">一般設定</a>
                <a class="dropdown-item" href="{% url 'ShiftManagementApp:account-setting'%}">アカウント設定</a>
                <a class="dropdown-item" href="{% url 'ShiftManagementApp:shift-list'%}">シフト一覧</a>
                <a class="dropdown-item" href="{% url 'ShiftManagementApp:shift-list-print'%}">シフト一覧(印刷用)</a>
                </div>
            </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" @click="logout" to="">ログアウト</RouterLink>>
                </li>
            </ul>
        </div>
    </nav>
</template>