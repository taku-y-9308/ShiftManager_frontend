<script setup>
import { ref } from 'vue'
import axios from 'axios';
import { useRouter } from 'vue-router'

const email = ref()
const password = ref()
const router = useRouter()

function login(){

  
  axios.post('http://127.0.0.1:8000/dj-rest-auth/login/',{
    email:email.value,
    password:password.value    
  })
  .then((res) => {
    router.push('/home')
  })
  .catch((res) => {
    console.log(res);
  })
}
console.log(email,password)
</script>
<template>
    <v-card class="mx-auto px-6 py-8" max-width="350" align-content="center">
      <v-form>
        <v-text-field
          v-model="email"
          prepend-icon="mdi-account-circle"
          label="Email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          prepend-icon="mdi-lock"
          label="Password"
          placeholder="Enter your password"
        ></v-text-field>

        <br>

        <v-btn
          block
          color="blue"
          size="large"
          variant="elevated"
          @click="login"
        >
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </template>

<style>

</style>