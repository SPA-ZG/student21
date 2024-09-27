<template>
  <Navbar />
  <ul>
    <li v-for="profile in profiles">
      {{ profile.profileName }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      profiles: []
    }
  },

  async mounted() {
    console.log('Fetching profiles')
    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/users')

      if (response.status === 200) {
        this.profiles = await response.json()
      } else {
        console.log(response.status)
      }
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
