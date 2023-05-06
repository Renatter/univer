<template>
  <div class="header bg-blue-700">
    <div class="logo-header bg-blue-700">
      <router-link to="/">
        <img style="height: 75px" src="../assets/logo.png" alt=""
      /></router-link>
      <div class="logo-text bg-blue-700">
        <div class="text-white">ЖАНГИР ХАН УНИВЕРСИТЕТ</div>
        <div class="text-white">Традиция, успех, качество</div>
      </div>
    </div>

    <div class="menu">
      <template v-if="isAuthenticated">
        <router-link to="/Profile">
          <img
            v-if="!img"
            :src="gray"
            alt="user profile"
            style="height: 50px; border-radius: 50%"
          />

          <img
            v-else
            :src="img"
            alt="user profile"
            style="height: 50px; border-radius: 50%"
          />
        </router-link>
      </template>
      <div v-else>
        <button @click="goToLogin" class="btn mr-[15px]">Войти</button>
        <button @click="goToReg" class="btn">Регистрация</button>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, db } from "../firebase/index";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
export default {
  data() {
    return {
      isAuthenticated: false,
      gray: "http://pic.rutubelist.ru/user/3e/a8/3ea8627a505f6a5e3487fa234dfa112b.jpg",
      img: "",
    };
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
    goToReg() {
      this.$router.push("/register");
    },
    logout() {
      auth.signOut();
      this.$router.push("/");
    },
  },
  async created() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.isAuthenticated = true;
        const userDocRef = doc(db, "users", user.uid);
        onSnapshot(userDocRef, (doc) => {
          this.img = doc.data().imageUrl;
          console.log(this.img);
        });
      } else {
        this.isAuthenticated = false;
        this.img = "";
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.header {
  font-family: "Forum", cursive;

  font-size: 15px;
  padding: 50px;
  align-items: center;
  height: 50px;
  display: flex;
  justify-content: space-between;
}
.logo-header {
  align-items: center;
  display: flex;
}
button {
  font-size: 15px;
}
.logo-text {
  margin-left: 20px;
}
nav {
  display: flex;
  justify-content: center;
}

ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 0 10px;
}
.menu {
  align-items: center;
  display: flex;
}
.btn {
  border: 1px solid white;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  background-color: #1d4ed8;
}
.btn:hover {
  border: 1px solid #0966f3;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  color: #0966f3;
  font-weight: 500;
  background-color: white;
  transition: 0.2s;
}
</style>
