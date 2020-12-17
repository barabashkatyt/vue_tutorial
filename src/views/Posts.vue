<template>
  <div id="container">
    <PostForm />
    <h1>{{postsCount}}</h1>
    <div class="post" v-for="post in allPosts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
import PostForm from './../components/PostForm'
export default {
  name:"Posts",
  computed:mapGetters(['allPosts','postsCount']),
  methods:mapActions(['fetchPosts']),
  async mounted(){
    // this.$store.dispatch('fetchPosts')
    this.fetchPosts(5)
  },
  components:{
    PostForm
  }
}
</script>

<style>
  #container{
    text-align: center;
    margin: 60px auto;
    width: 35rem;
  }
  .post{
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
</style>