export const state = () => ({
    blogs: {}
})

export const mutations = {
  updatePosts(state, payload) {
    state.blogs = payload
  }
}

export const actions = {
  async fetchBlogs({ commit }){
    const ip = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/posts"
    )
    commit('updatePosts', ip)
    
    
  }
  
}