<template>
  <div class="bg-[#FFFF] w-full ml-[25px] rounded-[15px] p-[25px] h-[800px]">
    Место {{ this.$route.params.id }}
    <p>Имя: {{ fn }}</p>

    <p>Фамилия: {{ ln }}</p>
    <div>
      <router-link
        to="/Search"
        @click="saveAccount"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Оплата
      </router-link>
    </div>
  </div>
</template>

<script>
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  onSnapshot,
  updateDoc,
  getDocsFromServer,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/index";
import { db } from "../firebase/index";
export default {
  data() {
    return {
      x: this.$route.params.id,
      currentUser: null,
      payment: false,
      fn: null,
      ln: null,
    };
  },
  methods: {
    async saveAccount() {
      const userDocRef = doc(db, "users", this.currentUser.uid);
      await updateDoc(userDocRef, {
        payment: true,
      });
    },
  },

  async created() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.currentUser = user;
        // Получаем данные пользователя из Firestore
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        console.log(userDoc.data());
        if (userDoc.exists()) {
          this.payment = userDoc.data().payment;
          this.fn = userDoc.data().firstName;
          this.ln = userDoc.data().lastName;
        }
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
