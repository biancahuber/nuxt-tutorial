<template>
    <section class="post-list">
      <PostPreview
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :is-admin="isAdmin"
        :title="post.title"
        :previewText="post.previewText"
        :thumbnail="post.thumbnail" />
      <!-- <PostPreview id="2" :is-admin="isAdmin" title='second post' previewText = 'kljsdfjkllsdfkljsdfjkldjfkldsajklfsdjakl' thumbnail='https://www.planet-wissen.de/natur/voegel/pinguine/intropinguinjungkaisergjpg100~_v-ARDFotogalerie.jpg' /> -->
      <!-- <PostPreview id="3" :is-admin="isAdmin" title='third post' previewText = 'kljsdfjkllsdfkljsdfjkldjfkldsajklfsdjakl' thumbnail='https://www.planet-wissen.de/natur/voegel/pinguine/intropinguinjungkaisergjpg100~_v-ARDFotogalerie.jpg' /> -->
    </section>
</template>


<script>
  import PostPreview from '@/components/Posts/PostPreview'
  export default {
    name: 'PostList',
    components: {
      PostPreview
    },
    props: {
      isAdmin: {
        type: Boolean,
        default: false
      },
      posts: {
        type: Array,
        required: false
      }
    }
  }
</script>


<style scoped>
  .post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
</style>
