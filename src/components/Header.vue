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
      <button v-if="isAuthenticated" @click="logout" class="btn">Выход</button>
      <button v-else @click="goToLogin" class="btn">Войти</button>
    </div>
  </div>
</template>

<script>
import { auth } from "../firebase/index";
export default {
  data() {
    return {
      isAuthenticated: false,
    };
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
    logout() {
      auth.signOut();
      this.$router.push("/");
    },
  },
  created() {
    auth.onAuthStateChanged((user) => {
      this.isAuthenticated = user !== null;
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
