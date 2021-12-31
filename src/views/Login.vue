<template>
  <!-- <form> -->
    <div>
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      <input v-model="email" type="email" class="form-control" placeholder="Email">
      <input v-model="password" type="password" class="form-control" placeholder="Password">
    <button class="w-100 btn btn-lg btn-primary" @click="submit">Sign in</button>
    </div>
  <!-- </form> -->
</template>

<script>
import Cookie from 'js-cookie'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },

  // created() {
  //   Cookie.remove('_myapp_token')
  // },

  methods: {
    submit() {
      const payload = {
        email: this.email,
        password: this.password
      };

      fetch(`https://ts-auth-laravel.herokuapp.com/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then((response) => response.json())
      .then(res => {
        Cookie.set('_myapp_token', res.access_token)
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>