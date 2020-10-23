<template>
  <div class="login">
    <h1>Login page</h1>
    <div class="form">
      <form @submit.prevent="pressed">
        <input type="text" placeholder="abc@gmail.com" v-model="email" />
        <input type="password" placeholder="password" v-model="password" />
        <button>Submit</button>
        <div class="error-msg" v-if="error">
          {{ error.message }}
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.$router.push("/secret");
        })
        .catch(error => (this.error = error));
    }
  }
};
</script>
<style scoped>
.login {
  text-align: center;
}
.form {
  width: 20%;
  margin: 0 auto;
}
.form input {
  width: 100%;
  margin: 15px 0;
  padding: 15px;
  border: 1px solid rgb(97, 97, 97);
  border-radius: 30px;
}
.form button {
  width: 100%;
  padding: 15px;
  color: #fff;
  background: #000;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  cursor: pointer;
}
.error-msg {
  color: red;
}
</style>
