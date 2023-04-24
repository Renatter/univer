<template>
  <div>
    <h1>Профиль пользователя</h1>
    <div v-if="currentUser && currentUser.email">
      <p>Адрес электронной почты: {{ currentUser.email }}</p>
      <p>Дата: {{ currentUser.metadata.creationTime }}</p>
      <p>Имя: {{ name }}</p>
      <button @click="deleteAccount">Удалить аккаунт</button>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/index";

import { auth } from "../firebase/index";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, deleteDoc } from "firebase/firestore";

export default {
  data() {
    return {
      currentUser: null,
      name: null,
    };
  },
  props: {
    email: {
      type: String,
      required: true,
    },
  },
  created() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.currentUser = user;

        // Получаем данные пользователя из Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          this.name = userDoc.data().firstName;
        } else {
          console.log("No such document!");
        }
      } else {
        this.currentUser = null;
      }
    });
  },
  methods: {
    async deleteAccount() {
      // Удаляем запись пользователя из Firestore
      await deleteDoc(doc(db, "users", this.currentUser.uid));

      // Удаляем учетную запись Firebase
      await auth.currentUser.delete();

      // Перенаправляем пользователя на страницу входа
      this.$router.push({
        name: "register",
      });
    },
  },
};
</script>
