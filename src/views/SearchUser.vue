<template>
  <div class="bg-[#FFFF] w-full ml-[25px] rounded-[15px] p-[25px] h-full">
    <div class="flex justify-between">
      <div class="flex mb-[20px]">
        <input
          v-model="searchMode"
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[330px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          class="ml-[15px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          @click="Search(searchMode)"
        >
          Search
        </button>
      </div>
      <div>
        <button
          class="ml-[15px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          v-if="!all"
          @click="all = true"
        >
          All Users
        </button>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div
        v-if="!all"
        class="student flex border-[3px] rounded-[15px] p-[10px] mb-[15px] w-[450px]"
      >
        <img
          class="rounded-full w-[60px] max-h-[60px] mr-[7px]"
          :src="ImageUrl"
        />
        <div>
          <div class="flex">
            <p>Имя:</p>
            <p>{{ name }}</p>
          </div>
          <div class="flex">
            <p>Фамилия :</p>
            <p>{{ surname }}</p>
          </div>
          <div class="flex">
            <p>Корпус :</p>
            <p>{{ corpus }}</p>
          </div>
          <div class="flex">
            <p>Группа :</p>
            <p>{{ group }}</p>
          </div>
        </div>
      </div>
      <div
        v-if="all"
        v-for="user in displayedUsers"
        class="student flex border-[3px] rounded-[15px] p-[10px] mb-[15px] w-[450px]"
      >
        <img
          class="rounded-full w-[60px] max-h-[60px] mr-[7px]"
          :src="user.ImageUrl"
        />
        <div>
          <div class="flex">
            <p>Имя:</p>
            <p>{{ user.fName }}</p>
          </div>
          <div class="flex">
            <p>Фамилия :</p>
            <p>{{ user.Name }}</p>
          </div>
          <div class="flex">
            <p>Корпус :</p>
            <p>{{ user.corpus }}</p>
          </div>
          <div class="flex">
            <p>Группа :</p>
            <p>{{ user.group }}</p>
          </div>
        </div>
      </div>
    </div>
    <button
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      @click="previousPage"
      v-if="currentPage !== 1"
    >
      Back
    </button>
    <button
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      @click="nextPage"
      v-if="currentPage !== totalPages"
    >
      Next
    </button>
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
import { db } from "../firebase/index";
export default {
  data() {
    return {
      name: "",
      surname: "",
      searchMode: "",
      allUsers: [],
      allUsers: [], // your complete list of users
      currentPage: 1, // current page of users
      pageSize: 5, // number of users per page
      ImageUrl: "",
      all: true,
      corpus: null,
      group: null,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.allUsers.length / this.pageSize);
    },
    displayedUsers() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.allUsers.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    async Search(text) {
      this.all = false;
      this.user = text;
      const usersCollection = collection(db, "users");

      const userQuery = query(
        usersCollection,
        where("firstName", "==", this.user)
      );
      const querySnapshot = await getDocs(userQuery);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.name = doc.data().firstName;
        this.ImageUrl = doc.data().imageUrl;
        this.surname = doc.data().lastName;
        this.group = doc.data().group;
        this.corpus = doc.data().corpus;
      });
    },
  },
  async created() {
    const Alluser = collection(db, "users");
    const p = query(Alluser, where("payment", "==", true));
    onSnapshot(p, (querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const user = {
          Name: data.lastName,

          ImageUrl: data.imageUrl,
          fName: data.firstName,
          corpus: data.corpus,
          group: data.group,
        };
        users.push(user);
      });
      this.allUsers = users;
    });
  },
};
</script>

<style lang="scss" scoped></style>
