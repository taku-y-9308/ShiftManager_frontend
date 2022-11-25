<script setup>
import { ref } from 'vue';
const drawer = ref(false)
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
        <v-list-item prepend-icon="mdi-view-dashboard" title="マイページ" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-file-send" title="シフト送信" value="about"></v-list-item>
        <v-list-item prepend-icon="mdi-clock-edit" title="シフト編集" value=""></v-list-item>
        <v-list-item prepend-icon="mdi-account-question" title="お問い合わせ"></v-list-item>
        <v-list-item prepend-icon="mdi-lightbulb-on-10" title="管理者メニュー"></v-list-item>
        <v-list-item prepend-icon="mdi-cog" title="設定"></v-list-item>
        <v-list-item prepend-icon="mdi-logout" title="ログアウト"></v-list-item>
      </v-list>

      </v-navigation-drawer>

      <v-main>
        content-area
      </v-main>
      <v-footer></v-footer>
</v-app>
</template>