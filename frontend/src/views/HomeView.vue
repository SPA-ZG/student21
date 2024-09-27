<template>
  <Navbar />
  <div>
    <h2>Recent blog posts:</h2>
    <hr />
    <div class="container-fluid p-2 d-flex flex-wrap">
      <blog-post v-for="post in allPosts" :post="post" @post-deleted="postDeleted"> </blog-post>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { usePostsStore } from '../stores/posts'
export default {
  computed: {
    ...mapState(usePostsStore, ['allPosts'])
  },

  methods: {
    ...mapActions(usePostsStore, ['refreshPosts']),
    // setSelectedRecipe() {
    //   this.selectedRecipe = this.allRecipes.find(
    //     (x) => x.id == this.$route.params.id
    //   );
    // },
    // recipeUpdated(recipe) {
    //   console.log("so now i know recipe is updated...", recipe);
    // },
    postDeleted(args) {
      alert('Post ' + args.id + ' deleted')
      console.log('Post ' + args.id + ' deleted')
    }
  },

  async mounted() {
    try {
      await this.refreshPosts()
    } catch (err) {
      console.log(err)
    }
    // this.setSelectedRecipe();
  }
}
</script>
