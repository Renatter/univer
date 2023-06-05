<template>
  <div
    class="bg-[#FFFF] w-full ml-[25px] mb-[30px] rounded-[15px] p-[25px] min-h-[800px]"
  >
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
        {{}}
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
        class="student flex border-[3px] rounded-[15px] p-[10px] mb-[15px] w-[500px]"
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
        class="student flex border-[3px] rounded-[15px] p-[10px] mb-[15px] w-[500px] justify-between"
      >
        <div class="flex">
          <img
            v-if="user.ImageUrl"
            class="rounded-full w-[60px] max-h-[60px] mr-[7px]"
            :src="user.ImageUrl"
          />
          <img
            v-else
            class="rounded-full w-[60px] max-h-[60px] mr-[7px]"
            src="https://uhd.name/uploads/posts/2023-03/1679056281_uhd-name-p-zaza-napoli-bez-makiyazha-instagram-85.jpg"
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
              <p>Ак</p>
            </div>
            <div class="flex">
              <p>Группа :</p>
              <p>{{ user.group }}</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <button
              @click="toggleModal"
              class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Посмотреть
            </button>

            <div
              v-if="isModalOpen"
              class="flex items-center justify-center pt-[100px] fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black bg-opacity-50"
            >
              <div class="relative w-full max-w-md max-h-full">
                <div
                  class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                >
                  <button
                    @click="hideModal"
                    type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                  <div class="p-6 text-center">
                    <div>
                      <img :src="user.complaintImg" alt="" />
                      <h3
                        class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
                      >
                        {{ user.complaintMsg }}
                      </h3>
                    </div>
                    <div class="mt-[25px]">
                      <button
                        @click="rejectedUser(user.email)"
                        type="button"
                        class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                      >
                        Сделано
                      </button>
                      <button
                        @click="hideModal"
                        type="button"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                      >
                        Отмена
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      isModalOpen: false,
      name: "",
      surname: "",
      searchMode: "",
      allUsers: [], // your complete list of users
      currentPage: 1, // current page of users
      pageSize: 3, // number of users per page
      ImageUrl: "",
      all: true,
      corpus: null,
      group: null,
      complaintImg: null,
      complaintMsg: null,
      complaint: null,
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
    async rejectedUser(email) {
      const usersCollection = collection(db, "users");
      const userQuery = query(usersCollection, where("email", "==", email));
      const querySnapshot = await getDocs(userQuery);

      querySnapshot.forEach(async (doc) => {
        const userRef = doc.ref;
        console.log(doc.id, " => ", doc.data());

        // Обновление данных пользователя
        await updateDoc(userRef, {
          // Новые значения полей для обновления
          complaintImg: false,
          complaintMsg: false,
          complaint: false,

          // ...
        });
        this.hideModal();

        console.log("Данные пользователя обновлены");
      });
    },
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    hideModal() {
      this.isModalOpen = false;
    },
    deleteProduct() {
      // Perform the delete action here
      console.log("Product deleted");
      this.hideModal();
    },

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
        this.fluorogra = doc.data().fluorogra;
        this.idcard = doc.data().idcard;
        this.studentcard = doc.data.studentcard;
      });
    },
  },
  async created() {
    const Alluser = collection(db, "users");
    const p = query(Alluser, where("complaint", "==", true));
    onSnapshot(p, (querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const user = {
          Name: data.lastName,
          fName: data.firstName,
          ImageUrl: data.imageUrl,
          corpus: data.corpus,
          group: data.group,
          complaintImg: data.complaintImg,
          complaintMsg: data.complaintMsg,
          complaint: data.complaint,
          email: data.email,
        };
        console.log(user);
        users.push(user);
      });
      this.allUsers = users;
    });
  },
};
</script>

<style lang="scss" scoped></style>
