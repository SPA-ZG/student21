<template>
  <div class="container my-4">
    <div class="card">
      <div class="card-body">
        <button
          v-if="id === post.creatorID"
          @click="deletePostLocal"
          type="button"
          class="btn btn-outline-danger"
        >
          Delete post
        </button>
        <h2 class="card-title">{{ post.creatorUsername + ': ' + post.title }}</h2>
        <p class="card-text">{{ post.content }}</p>
        <p class="card-text">Likes: {{ post.likes }}</p>
        <button @click="like('post')" class="btn btn-primary">
          {{ post.liked ? 'Unlike post' : 'Like post' }}
        </button>

        <div class="mt-4">
          <h4>Comments:</h4>
          <ul class="list-group">
            <li v-for="comment in post.comments" :key="comment.id" class="list-group-item">
              {{ comment.text }}
              <br /><br />
              <span>Likes: {{ comment.likes }}</span>
              <br /><br />
              <button @click="like('comment', comment.id)" class="btn btn-sm btn-primary ml-2">
                {{ comment.liked ? 'Unlike comment' : 'Like comment' }}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-3">
        <input
          v-model="newComment"
          @keyup.enter="addComment"
          class="form-control"
          placeholder="Add a comment..."
        />
        <button @click="addComment" class="btn btn-primary mt-2">Post Comment</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { usePostsStore } from '../stores/posts'
import { useAuthStore } from '@/stores/auth'

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      newComment: ''
    }
  },

  computed: {
    ...mapState(useAuthStore, ['id'])
  },

  methods: {
    ...mapActions(usePostsStore, ['deletePost']),

    like(type, id) {
      if (type === 'post') {
        this.post.liked = !this.post.liked
        this.post.likes += this.post.liked ? 1 : -1
      } else if (type === 'comment') {
        const comment = this.post.comments.find((comment) => comment.id === id)
        if (comment) {
          comment.liked = !comment.liked
          comment.likes += comment.liked ? 1 : -1
        }
      }
    },
    addComment() {
      if (this.newComment.trim() !== '') {
        const newComment = {
          id: Date.now(),
          text: this.newComment,
          liked: false,
          likes: 0
        }
        this.post.comments.push(newComment)
        this.newComment = ''
      }
    },

    deletePostLocal() {
      if (this.id === this.post.creatorID) {
        this.deletePost(this.post.id)

        console.log('Emiting delete post')
        this.$emit('postDeleted', { id: this.post.id })
      } else {
        this.$router.push({ path: '/login' })
      }
    }
  }
}
</script>
