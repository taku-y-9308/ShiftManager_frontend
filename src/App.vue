<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import axios from 'axios'

const drawer = ref(false)
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
  <v-app>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>ShiftManager</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" icon="mdi-filter"></v-btn>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="start"
        temporary
      >
      <v-list
        density="compact"
        nav
      >
        <v-list-item prepend-icon="mdi-view-dashboard" title="マイページ" to="home"></v-list-item>
        <v-list-item prepend-icon="mdi-file-send" title="シフト送信" to="submit-shift"></v-list-item>
        <v-list-item prepend-icon="mdi-clock-edit" title="シフト編集" to="/edit-shift"></v-list-item>
        <v-list-item prepend-icon="mdi-account-question" title="お問い合わせ" to="/contact"></v-list-item>
        <v-list-item prepend-icon="mdi-lightbulb-on-10" title="管理者メニュー"></v-list-item>
        <v-list-item prepend-icon="mdi-cog" title="設定"></v-list-item>
        <v-list-item prepend-icon="mdi-logout" title="ログアウト" @click="logout()"></v-list-item>
      </v-list>

      </v-navigation-drawer>

      <v-main>
        <v-container>
          <RouterView />
        </v-container>
      </v-main>
      <v-footer></v-footer>
</v-app>
</template>