<template>
  <div class="header bg-blue-700">
    <div class="logo-header bg-blue-700">
      <router-link to="/">
        <img style="height: 35px" src="../assets/logo.png" alt=""
      /></router-link>
      <div class="logo-text">
        <div class="text-white">ЖАНГИР ХАН УНИВЕРСИТЕТ</div>
        <div class="text-white">{{ $t("header.headerText") }}</div>
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
            class="w-[50px] h-[50px] rounded-full"
          />
        </router-link>
      </template>
      <div v-else class="s">
        <button @click="goToLogin" class="btn mr-[15px]">
          {{ $t("header.login") }}
        </button>
        <button @click="goToReg" class="btn">
          {{ $t("header.reg") }}
        </button>
      </div>
      <div class="">
        <button @click="setLocale('ru')" class="ml-[15px]">
          <img
            src="../assets/free-icon-russia-3373300.png"
            alt=""
            class="h-[30px] w-[30px] rounded-[5000px]"
          />
        </button>
        <button @click="setLocale('kz')">
          <img
            src="../assets/free-icon-kazakhstan-6211496.png"
            alt=""
            class="h-[30px] w-[30px] rounded-[5000px] ml-[10px]"
          />
        </button>
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
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
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
.text-white {
  background-color: #1d4ed8;
}
.logo-header {
  background-color: #1d4ed8;
  align-items: center;
  display: flex;
}
.s {
  background-color: #1d4ed8;
}
button {
  font-size: 15px;
}
.logo-text {
  background-color: #1d4ed8;
  margin-left: 20px;
}
nav {
  background-color: #1d4ed8;
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
