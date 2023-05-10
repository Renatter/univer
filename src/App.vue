<template>
  <div class="bg-blue-700">
    <Header />
  </div>

  <div class="bg-[#F4F4F7] h-full">
    <div class="header">
      <div class="flex items-start pt-[30px]">
        <div class="bg-[#FFFF] p-[15px] rounded-[15px] h-[800px] relative">
          <div class="btn flex flex-col justify-between w-[240px] bg-[#FFFF]">
            <router-link
              v-for="(button, index) in buttons"
              @click="activateButton(index)"
              :key="button"
              :to="button.link"
              :class="[
                'text-[#1d4ed8] font-medium rounded-lg text-sm px-5 py-2.5  mb-2',
                button.isActive
                  ? ' bg-blue-700 text-[#f8fafc] hover:bg-[#1d4fd84b] focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                  : ' bg-white border border-gray-300 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 ',
              ]"
            >
              {{ button.label }}
            </router-link>

            <div
              v-if="currentUser"
              @click="signout"
              class="absolute bottom-[50px] left-[90px] flex items-center cursor-pointer"
            >
              <MdExitIcon class="mr-[5px]" w="25px" h="60px" />
              <button class="text-red-500 font-bold text-[17px]">Выход</button>
            </div>
          </div>
        </div>

        <router-view> </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase/index";
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import MdExitIcon from "vue-ionicons/dist/md-exit.vue";
export default {
  components: {
    HelloWorld,
    Header,
    MdExitIcon,
  },
  data() {
    return {
      email: "",
      pass: "",
      currentUser: null,
      hange: false,
      buttons: [
        { label: "Общежитие", isActive: true, link: "/Hostel" },
        { label: "Бронировать", isActive: false, link: "/Search" },
        { label: "Оплата", isActive: false, link: "/Payment" },
        { label: "Правила", isActive: false, link: "/Rules" },
        { label: "Профиль", isActive: false, link: "/Profile" },
      ],
    };
  },

  methods: {
    activateButton(index) {
      for (let i = 0; i < this.buttons.length; i++) {
        if (i === index) {
          this.buttons[i].isActive = true;
        } else {
          this.buttons[i].isActive = false;
        }
      }
    },
    change() {
      this.hange = !this.hange;
    },
    signout() {
      signOut(auth);
    },
    register() {
      createUserWithEmailAndPassword(auth, this.email, this.pass);
    },
    sign() {
      signInWithEmailAndPassword(auth, this.email, this.pass);
      console.log(this.email, this.pass);
    },
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  },
};
</script>
<style>
.header {
  width: 1200px;
  margin: 0 auto;
}
</style>
