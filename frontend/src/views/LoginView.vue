<template>
  <div v-if="err !== ''" class="alert alert-danger" role="alert">
    {{ 'Error: ' + err }}
  </div>
  <div class="d-flex justify-content-center p-5">
    <form @submit.prevent="login">
      <div class="form-group row">
        <label class="col-4 col-form-label">Login</label>
        <div class="col-8">
          <input class="form-control" placeholder="username" v-model.trim="username" />
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-success m-3" type="submit">Log in</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useAuthStore } from '../stores/auth'
export default {
  data() {
    return {
      username: '',
      err: ''
    }
  },

  methods: {
    ...mapActions(useAuthStore, ['setUser']),
    async login() {
      try {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            profileName: this.username
          })
        })

        console.log(response)
        if (response.status === 200) {
          var user = await response.json()
          // console.log(user)
          this.setUser(user)
          this.$router.push({ path: '/' })
        } else {
          this.err = 'Something went wrong while fetching credential. Status: ' + response.status
        }
      } catch (err) {
        console.log(err)
        this.err = err
      }
    }
  }
}
</script>
