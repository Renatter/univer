<template>
  <div class="header">
    <Header />

    <router-view> </router-view>
  </div>
</template>

<script>
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase/index";
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    HelloWorld,
    Header,
  },
  data() {
    return {
      email: "",
      pass: "",
      currentUser: null,
      hange: false,
    };
  },

  methods: {
    change() {
      this.hange = !this.hange;
    },
    signout() {
      signOut(auth);
    },
    register() {
      createUserWithEmailAndPassword(auth, this.email, this.pass);
    },
    sign() {
      signInWithEmailAndPassword(auth, this.email, this.pass);
      console.log(this.email, this.pass);
    },
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  },
};
</script>
<style>
.header {
  width: 1200px;
  margin: 0 auto;
}
</style>
