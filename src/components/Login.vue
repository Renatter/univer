<template>
  <div class="auth-container">
    <div class="auth-box" v-if="!currentUser">
      <h1>Login</h1>
      <router-link to="/register">Register</router-link>
      <form class="auth-form" @submit.prevent="sign">
        <input
          class="auth-input"
          placeholder="Email address..."
          v-model="email"
        />
        <input
          class="auth-input"
          placeholder="Password..."
          v-model="pass"
          type="password"
        />
        <button class="auth-btn">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/index";
export default {
  data() {
    return {
      email: "",
      pass: "",
      currentUser: null,
      hange: false,
    };
  },
  methods: {
    async sign() {
      signInWithEmailAndPassword(auth, this.email, this.pass);
      console.log(this.email, this.pass);
      this.$router.push({
        name: "HelloWorld",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  font-family: "Forum", cursive;
  font-size: 24px;
}
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-color: white;
}

.auth-box {
  width: 500px;
  height: 500px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.auth-heading {
  font-size: 40px;
  margin-bottom: 20px;
}

.auth-toggle-btn {
  border: none;
  background-color: transparent;
  color: #0077cc;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 28px;
  text-decoration: underline;
}

.auth-form {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-input {
  padding: 10px;
  margin-top: 30px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.auth-btn {
  margin-top: 20px;
  padding: 10px;
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}
</style>
