<template>
  <div id="container">
    <div class="post" v-for="post in allPosts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  name:"Posts",
  computed:mapGetters(['allPosts']),
  methods:mapActions(['fetchPosts']),
  async mounted(){
    // this.$store.dispatch('fetchPosts')
    this.fetchPosts(5)
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