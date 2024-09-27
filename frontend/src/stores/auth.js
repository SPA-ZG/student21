import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      id: null,
      profileName: null
    }
  }),

  getters: {
    isAuthenticated: (state) => !!state.user.profileName,
    username: (state) => state.user.profileName,
    id: (state) => state.user.id
  },

  actions: {
    setUser(user) {
      this.user = user
    },

    clearUser() {
      this.user = null
    }
  }
})
