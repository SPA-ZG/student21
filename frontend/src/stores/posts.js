import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    _posts: []
  }),

  getters: {
    allPosts: (state) => state._posts || []
    // getRecipeById: (state) => {
    //   return (id) => state._posts.find((rcp) => rcp.id === id);
    // },
  },

  actions: {
    async refreshPosts() {
      console.log('Calling refresh posts')
      // dodati boolean arg da se može forsirati refresh

      if (this.allPosts.length === 0) {
        let backendURL = import.meta.env.VITE_BACKEND_URL
        console.log('fetching posts from ' + backendURL + '...')

        try {
          let response = await fetch(backendURL + '/posts')

          if (response.ok) {
            this._posts = await response.json()

            console.log(JSON.stringify(_posts))
            // this._posts = posts.slice(0, 50);
          } else {
            throw new Error('HTTP-Error: ' + response.status)
          }
        } catch (error) {
          console.log(error)
        }
      }
    },
    deletePost(id) {
      console.log('deleting post ', id)
      this._posts = this._posts.filter((x) => x.id !== id)
    }
  }
})
