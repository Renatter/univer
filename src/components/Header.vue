<template>
  <div class="header">
    <div class="logo-header">
      <img style="height: 75px" src="../assets/logo.png" alt="" />
      <div class="logo-text">
        <div>ЖАНГИР ХАН УНИВЕРСИТЕТ</div>
        <div>Традиция, успех, качество</div>
      </div>
    </div>

    <div class="menu">
      <nav>
        <ul>
          <li>Общежития</li>
          <li>Регистрация</li>
          <li>Поиск мест</li>
          <li>Оплата</li>
          <li>Техподдержка</li>
        </ul>
      </nav>
      <button v-if="isLoggedIn" @click="logout" class="btn">Выход</button>
      <button v-else @click="goToRegister" class="btn">Регистрация</button>
    </div>
  </div>
</template>

<script>
import { auth } from "../firebase/index";
export default {
  data() {
    return {
      isAuthenticated: false,
      isLoggedIn: false,
      currentUser: null,
    };
  },
  computed: {
    isLoggedIn() {
      return this.isAuthenticated;
    },
  },
  methods: {
    goToRegister() {
      this.$router.push("/register");
    },
    logout() {
      auth.signOut();
    },
  },
  watch: {
    isAuthenticated: function (newValue, oldValue) {
      this.isLoggedIn = newValue;
    },
  },
  created() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.isAuthenticated = true;
        this.currentUser = user;
      } else {
        this.isAuthenticated = false;
        this.currentUser = null;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.header {
  font-family: "Forum", cursive;

  font-size: 20px;
  padding: 20px;
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
  font-family: "Forum", cursive;
  font-size: 20px;
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
  background-color: #0966f3;
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
