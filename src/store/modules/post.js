export default {
  actions: {
    async fetchPosts(context, limit = 3) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
      );
      const posts = await res.json();
      context.commit("updatePosts", posts);
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost);
    },
  },
  state: { posts: [] },
  getters: {
    validatePosts(state) {
      return state.posts.filter((p) => {
        return p.title && p.body;
      });
    },
    allPosts(state) {
      return state.posts;
    },
    postsCount(state, getters) {
      return getters.validatePosts.length;
    },
  },
};
