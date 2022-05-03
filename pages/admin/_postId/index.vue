<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post='loadedPost' @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
import axios from 'axios'

export default {
  components:{
    AdminPostForm,
  },
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  asyncData(context) {
    console.log('res data', context.params.postId)
    return axios.get('https://tutorial-nuxt-6f9a8-default-rtdb.europe-west1.firebasedatabase.app/posts/' + context.params.postId + '.json')
      .then(res => {
        return {
          loadedPost: {...res.data, id: context.params.postId}
        }
      })
      .catch(e => context.error(e))
  },
  methods: {
    onSubmitted(editedPost){
      this.$store.dispatch('editPost', editedPost).then(
        () => {
          console.log('router', this.$router)
          this.$router.push('/admin')
        }
      )
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
