<template>
  <div>
    <div class="nav-links">
      <nuxt-link to="/">Home</nuxt-link>
      <div @click="logout" v-if="loggedin" class="logout-link">LogOut</div>
      <nuxt-link to="/login" v-else>Login</nuxt-link>
      <nuxt-link to="/secret">Secret</nuxt-link>
      <nuxt-link to="/map">Map</nuxt-link>
    </div>
    <Nuxt />
  </div>
</template>
<script>
import firebase from "firebase/app";
import Cookie from "js-cookie";
export default {
  mounted() {
    this.setUpFirebase();
  },
  data() {
    return {
      loggedin: false
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/");
        });
    },
    setUpFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.loggedin = true;
          firebase
            .auth()
            .currentUser.getIdToken(true)
            .then(token => {
              Cookie.set("access-token", token);
            });
        } else {
          this.loggedin = false;
          Cookie.remove("access-token");
        }
      });
    }
  }
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.nav-links {
  justify-content: center;
  padding: 30px 0;
  display: flex;
}
.nav-links a,
.logout-link {
  margin: 0 15px;
  text-decoration: none;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}
.nav-links a:hover,
.logout-link:hover {
  text-decoration: underline;
  color: blueviolet;
}
</style>
