<template>
  <div class="bg-[#FFFF] w-full ml-[25px] rounded-[15px] p-[25px] h-[800px]">
    <ul
      class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 ml-[200px]"
    >
      <li class="mr-2">
        <a
          href="#"
          :class="[
            'inline-block px-4 py-3 rounded-lg',
            activeTab === 1
              ? 'text-white bg-blue-600 active'
              : 'focus:outline-none dark:bg-gray-700 dark:text-white',
          ]"
          @click="setActiveTab(1)"
          aria-current="page"
          >Общежитие №1</a
        >
      </li>
      <li class="mr-2">
        <a
          href="#"
          :class="[
            'inline-block px-4 py-3 rounded-lg',
            activeTab === 2
              ? 'text-white bg-blue-600 active'
              : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white',
          ]"
          @click="setActiveTab(2)"
          aria-current="page"
          >Общежитие №2</a
        >
      </li>
      <li class="mr-2">
        <a
          href="#"
          :class="[
            'inline-block px-4 py-3 rounded-lg',
            activeTab === 3
              ? 'text-white bg-blue-600 active'
              : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white',
          ]"
          @click="setActiveTab(3)"
          aria-current="page"
          >Общежитие №3</a
        >
      </li>
    </ul>
    <div class="text-center">
      <div v-if="activeTab === 1" class="pt-[55px]">
        <ul
          class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400"
        >
          <a
            href="#"
            :class="[
              'inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg',
              floorTab === 1
                ? 'text-[#1e40af] bg-[#94a3b8] active'
                : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white',
            ]"
            @click="floactiveTab(1)"
            aria-current="page"
            >1 этаж</a
          >

          <a
            href="#"
            :class="[
              'inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg',
              floorTab === 2
                ? 'text-[#1e40af] bg-[#94a3b8] active'
                : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white',
            ]"
            @click="floactiveTab(2)"
            aria-current="page"
            >2 этаж</a
          >
          <a
            href="#"
            :class="[
              'inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg',
              floorTab === 3
                ? 'text-[#1e40af] bg-[#94a3b8] active'
                : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white',
            ]"
            @click="floactiveTab(3)"
            aria-current="page"
            >3 этаж</a
          >

          <a
            href="#"
            :class="[
              'inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg',
              floorTab === 4
                ? 'text-[#1e40af] bg-[#94a3b8] active'
                : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white',
            ]"
            @click="floactiveTab(4)"
            aria-current="page"
            >4 этаж</a
          >
        </ul>
      </div>
      <div v-if="activeTab === 2">
        <div>
          <h1>All Users</h1>
          <div v-for="(user, index) in users" :key="index">
            <p>{{ user.Name }}</p>
            <img :src="user.ImageUrl" />
          </div>
        </div>
      </div>
      <div v-if="activeTab === 3">Контент для третьей вкладки</div>
    </div>
    <div class="pt-[50px]">
      <div v-if="floorTab === 1 && activeTab === 1">
        <div
          class="rounded-[25px] border-[2px] h-[200px] flex flex-wrap pl-[15px]"
        >
          <div
            v-for="item in rooms1"
            class="m-[20px] rounded-[10px] border w-[60px] h-[60px] hover:bg-blue-600 hover:text-white cursor-pointer"
            :class="{ 'bg-blue-600 text-white': item === selectedRoom }"
            @click="showCapacity(item)"
          >
            <p class="text-center pt-[17px]">
              {{ item.number }}
            </p>
          </div>

          <div
            v-if="selectedRoom"
            class="flex pt-[50px] justify-between w-full"
          >
            <div>
              <p class="text-[20px] text-blue-700">
                Комнта {{ selectedRoom.number }}
              </p>

              <p>
                Свободно
                {{ selectedRoom.capacity - users.length }}
                из 3 мест
              </p>

              <div v-if="currentUser">
                <button @click="saveAccount">Add</button>
              </div>
            </div>
            <div class="students mr-[55px]">
              <div
                v-for="user in users"
                class="student flex border-[3px] rounded-[15px] p-[10px] mb-[15px]"
              >
                <img
                  class="rounded-full w-[60px] max-h-[60px] mr-[7px]"
                  :src="user.ImageUrl"
                />
                <div>
                  <div class="flex">
                    <p>Имя:</p>
                    <p>{{ user.Name }}</p>
                  </div>
                  <div class="flex">
                    <p>Фамилия :</p>
                    <p>{{ user.fName }}</p>
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
          </div>
        </div>
      </div>
    </div>
    <div v-if="floorTab === 2 && activeTab === 1">
      <div
        class="rounded-[25px] border-[2px] h-[200px] flex flex-wrap pl-[15px]"
      >
        <div
          v-for="item in rooms2"
          :class="{
            active1: selectedRoom && selectedRoom.number === item.number,
          }"
          class="m-[20px] rounded-[10px] border w-[60px] h-[60px] hover:bg-blue-600 hover:text-white cursor-pointer"
          @click="showCapacity(item)"
        >
          <p class="text-center pt-[17px]">{{ item.number }}</p>
        </div>
        <div v-if="selectedRoom" class="flex pt-[50px] justify-between w-full">
          <div>
            <p class="text-[20px] text-blue-700">
              Комнта {{ selectedRoom.number }}
            </p>

            <p>
              Свободно
              {{ selectedRoom.capacity - users.length }}
              из 3 мест
            </p>

            <div v-if="currentUser">
              <button @click="saveAccount">Add</button>
            </div>
          </div>
          <div class="students mr-[55px]">
            <div
              v-for="user in users"
              class="student flex border-[3px] rounded-[15px] p-[10px] mb-[15px]"
            >
              <img
                class="rounded-full w-[60px] max-h-[60px] mr-[7px]"
                :src="user.ImageUrl"
              />
              <div>
                <div class="flex">
                  <p>Имя:</p>
                  <p>{{ user.Name }}</p>
                </div>
                <div class="flex">
                  <p>Фамилия :</p>
                  <p>{{ user.fName }}</p>
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
        </div>
      </div>
    </div>
    <div v-if="floorTab === 3 && activeTab === 1">
      <div
        class="rounded-[25px] border-[2px] h-[200px] flex flex-wrap pl-[15px]"
      >
        <div
          v-for="item in rooms3"
          :class="{
            active1: selectedRoom && selectedRoom.number === item.number,
          }"
          class="m-[20px] rounded-[10px] border w-[60px] h-[60px] hover:bg-blue-600 hover:text-white cursor-pointer"
          @click="showCapacity(item)"
        >
          <p class="text-center pt-[17px]">{{ item.number }}</p>
        </div>
        <div v-if="selectedRoom" class="flex pt-[50px] justify-between w-full">
          <div>
            <p class="text-[20px] text-blue-700">
              Комнта {{ selectedRoom.number }}
            </p>

            <p>
              Свободно
              {{ selectedRoom.capacity - users.length }}
              из 3 мест
            </p>

            <div v-if="currentUser">
              <button @click="saveAccount">Add</button>
            </div>
          </div>
          <div class="students mr-[55px]">
            <div
              v-for="user in users"
              class="student flex border-[3px] rounded-[15px] p-[10px] mb-[15px]"
            >
              <img
                class="rounded-full w-[60px] max-h-[60px] mr-[7px]"
                :src="user.ImageUrl"
              />
              <div>
                <div class="flex">
                  <p>Имя:</p>
                  <p>{{ user.Name }}</p>
                </div>
                <div class="flex">
                  <p>Фамилия :</p>
                  <p>{{ user.fName }}</p>
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
        </div>
      </div>
    </div>
    <div v-if="floorTab === 4 && activeTab === 1">
      <div
        class="rounded-[25px] border-[2px] h-[200px] flex flex-wrap pl-[15px]"
      >
        <div
          v-for="item in rooms4"
          :class="{
            active1: selectedRoom && selectedRoom.number === item.number,
          }"
          class="m-[20px] rounded-[10px] border w-[60px] h-[60px] hover:bg-blue-600 hover:text-white cursor-pointer"
          @click="showCapacity(item)"
        >
          <p class="text-center pt-[17px]">{{ item.number }}</p>
        </div>
        <div v-if="selectedRoom" class="flex pt-[50px] justify-between w-full">
          <div>
            <p class="text-[20px] text-blue-700">
              Комнта {{ selectedRoom.number }}
            </p>

            <p>
              Свободно
              {{ selectedRoom.capacity - users.length }}
              из 3 мест
            </p>

            <div v-if="currentUser">
              <button @click="saveAccount">Add</button>
            </div>
          </div>
          <div class="students mr-[55px]">
            <div
              v-for="user in users"
              class="student flex border-[3px] rounded-[15px] p-[10px] mb-[15px]"
            >
              <img
                class="rounded-full w-[60px] max-h-[60px] mr-[7px]"
                :src="user.ImageUrl"
              />
              <div>
                <div class="flex">
                  <p>Имя:</p>
                  <p>{{ user.Name }}</p>
                </div>
                <div class="flex">
                  <p>Фамилия :</p>
                  <p>{{ user.fName }}</p>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  onSnapshot,
  updateDoc,
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
      activeTab: 1,
      floorTab: 1,
      rooms1: [],
      rooms2: [],
      rooms3: [],
      rooms4: [],
      comanta: null,
      selectedRoom: null,
      romNumber: 0,

      users: [],
      currentUser: null,
    };
  },
  methods: {
    setActiveTab(tabNumber) {
      this.activeTab = tabNumber;
    },
    floactiveTab(tabNumber) {
      this.floorTab = tabNumber;
    },
    showCapacity(room) {
      this.selectedRoom = room;
      this.romNumber = this.selectedRoom.number;

      const us = collection(db, "users");

      const q = query(
        us,
        where("room", "==", room.number),
        where("dormitory", "==", 1),
        where("floor", "==", this.floorTab)
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
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
        this.users = users;
      });
    },
    async saveAccount() {
      const userDocRef = doc(db, "users", this.currentUser.uid);
      await updateDoc(userDocRef, {
        room: this.selectedRoom.number,
        dormitory: this.activeTab,
        floor: this.floorTab,
      });
    },
  },

  async mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });

    const r1 = doc(db, "rooms", "azUEd0dd0ze5FV8fOLNW");
    const r2 = doc(db, "rooms", "4gr2hjUJKHQeG7AHlIWD");
    const docSnap = await getDoc(r1);
    const docSnap2 = await getDoc(r2);
    const r3 = doc(db, "rooms", "Q0TATiv5JbFsmsGaTttk");
    const r4 = doc(db, "rooms", "rKNa9SxlXvO3YZ5asE95");
    const docSnap3 = await getDoc(r3);
    const docSnap4 = await getDoc(r4);

    // define variables for the filters

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      this.rooms1 = docSnap.data().rooms;
    }

    if (docSnap2.exists()) {
      // console.log("Document data:", docSnap2.data());
      this.rooms2 = docSnap2.data().rooms;
    }

    if (docSnap3.exists()) {
      // console.log("Document data:", docSnap3.data());
      this.rooms3 = docSnap3.data().rooms;
    }

    if (docSnap4.exists()) {
      // console.log("Document data:", docSnap4.data());
      this.rooms4 = docSnap4.data().rooms;
    }
  },
};
</script>

<style lang="scss" scoped>
.active1 {
  background-color: blue;
  color: white;
}
</style>
