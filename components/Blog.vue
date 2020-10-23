<template>
  <div>
    <div class="blogs" v-for="(post, i) in blog" :key="i">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  computed: {
    blog() {
      return this.$store.state.blogs;
    }
  },
  methods: {
    fetchBlogs: async function() {
      this.$store.dispatch("fetchBlogs");
    }
  },
  mounted() {
    this.fetchBlogs();
  }
};
</script>
<style scoped>
.blogs {
  width: 50%;
  margin: 25px auto;
}
h1 {
  font-size: 24px;
  font-weight: 600;
  background: #494992;
  padding: 15px;
  color: #fff;
  margin: 0;
}
p {
  padding: 10px;
  background: #87ceeb;
  margin: 0;
}
</style>
