<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please register</h1>
      <input v-model="form.name" type="text" class="form-control" placeholder="Name">
      <input v-model="form.email" type="email" class="form-control" placeholder="Email">
      <input v-model="form.password" type="password" class="form-control" placeholder="Password">
    <button class="w-100 btn btn-lg btn-primary" @click="submit">Sign in</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async submit() {
      await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.form)
      })
    }
  }
})
</script>

