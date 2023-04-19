<template>
  <div>
    <h1>Профиль пользователя</h1>
    <div v-if="currentUser && currentUser.email">
      <p>Адрес электронной почты: {{ currentUser.email }}</p>
      <p>Дата:{{ currentUser.metadata.creationTime }}</p>
    </div>
  </div>
</template>

<script>
import { auth } from "../firebase/index";
import { onAuthStateChanged } from "firebase/auth";
export default {
  data() {
    return {
      currentUser: null,
    };
  },
  props: {
    email: {
      type: String,
      required: true,
    },
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.currentUser = user;
        console.log(this.currentUser);
      } else {
        this.currentUser = null;
      }
    });
  },
};
</script>
