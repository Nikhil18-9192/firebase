<template>
  <div>
    <h1>secret page</h1>
  </div>
</template>
<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import { getUserFromCookie } from "@/helpers/index.js";
export default {
  asyncData({ req, redirect }) {
    if (process.server) {
      let user = getUserFromCookie(req);
      console.log(user);
      if (!user) {
        redirect("/login");
      }
    } else {
      let user = firebase.auth().currentUser;
      if (!user) {
        redirect("/login");
      }
    }
  }
};
</script>
<style scoped></style>
