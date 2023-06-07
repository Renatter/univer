<template>
  <div class="bg-blue-700">
    <Header />
  </div>

  <div class="bg-[#F4F4F7] h-full pb-[35px]">
    <div class="header">
      <div class="flex items-start pt-[30px]">
        <div class="bg-[#FFFF] p-[15px] rounded-[15px] h-[800px] relative">
          <div class="btn flex flex-col justify-between w-[240px] bg-[#FFFF]">
            <router-link
              v-if="isAdmin"
              v-for="(btn, index) in adminButtons"
              :key="btn"
              :to="btn.link"
              :class="[
                'text-[#1d4ed8] font-medium rounded-lg text-sm px-5 py-2.5 mb-2',
                $route.path.includes(btn.link)
                  ? 'bg-blue-700 text-[#f8fafc]  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none d'
                  : 'bg-white border border-gray-300 hover:bg-gray-50 ',
              ]"
            >
              {{ $t(btn.label) }}
            </router-link>

            <router-link
              v-else
              v-for="(button, index) in buttons"
              :key="button"
              :to="button.link"
              :class="[
                'text-[#1d4ed8] font-medium rounded-lg text-sm px-5 py-2.5 mb-2',
                $route.path.includes(button.link)
                  ? 'bg-blue-700 text-[#f8fafc]  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none '
                  : 'bg-white border border-gray-300 hover:bg-gray-50 ',
              ]"
            >
              {{ $t(button.label) }}
            </router-link>

            <router-link to="/Hostel">
              <div
                v-if="currentUser"
                @click="signout"
                class="absolute bottom-[50px] left-[90px] flex items-center cursor-pointer"
              >
                <MdExitIcon class="mr-[5px]" w="25px" h="60px" />
                <button class="text-red-500 font-bold text-[17px]">
                  {{ $t("header.leave") }}
                </button>
              </div>
            </router-link>
          </div>
        </div>

        <router-view> </router-view>
      </div>
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
import { auth, db } from "./firebase/index";
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
      isAdmin: false,
      allUsers: [],
      buttons: [
        { label: "header.profil", link: "/Profile" },
        { label: "header.hotel", link: "/Hostel" },
        { label: "header.book", link: "/Search" },
        { label: "header.card", link: "/Rules" },
        { label: "header.complaint", link: "/Complaint" },
      ],
      adminButtons: [
        { label: "header.adminList", link: "/SearchUser" },
        { label: "header.request", link: "/Zapros" },
        { label: "header.complaint", link: "/AdminComplaint" },
      ],
    };
  },

  methods: {
    change() {
      this.hange = !this.hange;
    },
    signout() {
      signOut(auth);
      this.isAdmin = false;
    },
    register() {
      createUserWithEmailAndPassword(auth, this.email, this.pass);
    },
    sign() {
      signInWithEmailAndPassword(auth, this.email, this.pass);
      console.log(this.email, this.pass);
    },
  },
  async created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.currentUser = user;
        const userRef = doc(db, "users", user.uid);
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
        getDoc(userRef)
          .then((doc) => {
            if (doc.exists()) {
              const userData = doc.data();

              this.isAdmin = userData.role === "admin";
            } else {
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      } else {
        this.currentUser = null;
      }
    });
  },
};
</script>
<style>
body {
  font-family: "Montserrat Alternates", sans-serif;
}
.header {
  width: 1200px;
  margin: 0 auto;
}
</style>
