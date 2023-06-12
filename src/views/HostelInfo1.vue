<template>
  <div>
    <div
      class="bg-[#FFFF] w-full ml-[25px] rounded-[15px] p-[25px] h-full mb-[20px]"
    >
      <div class="flex">
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto w-[400px] rounded-lg"
              :src="currentImage"
              alt=""
            />
          </div>

          <div class="flex">
            <div v-for="image in infoImg" :key="image">
              <img
                class="h-auto w-[120px] rounded-lg mr-[15px] cursor-pointer"
                :src="image"
                alt=""
                @click="currentImage = image"
              />
            </div>
          </div>
        </div>

        <div class="hotel-info ml-[25px]">
          <h1 class="text-blue-700 font-bold text-[25px]">
            {{ $t("hostelInfo.title") }} №3
          </h1>
          <div class="flex items-end pt-[25px]">
            <IosManIcon w="30px" h="30px" class="mr-[5px]" />
            <p class="mr-[5px] font-bold">{{ $t("hostelInfo.palce") }} :</p>
            <p class="mr-[5px]">192</p>
          </div>
          <div class="flex items-end pt-[25px]">
            <IosCropIcon w="30px" h="30px" class="mr-[5px]" />
            <p class="mr-[5px] font-bold">{{ $t("hostelInfo.razmer") }} :</p>
            <p>5000кв м2.</p>
          </div>

          <div class="flex items-end pt-[25px]">
            <IosPaperPlaneIcon w="30px" h="30px" class="mr-[5px]" />
            <p class="mr-[5px] font-bold">{{ $t("hostelInfo.mesto") }} :</p>
            <p>улица Баян батыра</p>
          </div>
          <div class="flex items-end pt-[25px]">
            <IosBusinessIcon w="30px" h="30px" class="mr-[5px]" />
            <p class="mr-[5px] font-bold">{{ $t("hostelInfo.floor") }} :</p>
            <p>4</p>
          </div>
          <div class="flex pt-[25px]">
            <IosBedIcon w="30px" h="30px" class="mr-[5px]" />
            <p class="mr-[5px] font-bold">{{ $t("hostelInfo.room") }}</p>
            <div class="ml-[15px]">
              <p class="">3-хместные 64ком. <br /></p>
            </div>
          </div>
          <div class="mt-[25px]">
            <router-link v-if="access" to="/Search">
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {{ $t("hostelInfo.chose") }}
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </router-link>
            <router-link v-if="currentUser && !access" to="/Document">
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {{ $t("hostelInfo.sneDoc") }}
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </router-link>

            <p v-if="!currentUser && !access" class="text-[#dc2626]">
              {{ $t("hostelInfo.join") }}
            </p>
          </div>
        </div>
      </div>
      <div class="pt-[70px]">
        <h1 class="text-blue-700 font-bold text-[25px]">
          {{ $t("hostelInfo.info") }}
        </h1>
        <div class="flex pt-[30px]">
          <h1 class="font-bold">{{ $t("hostelInfo.title1") }} :</h1>
          <div>
            <p class="ml-[100px] w-[600px]">
              {{ $t("hostelInfo.text1") }}
            </p>
          </div>
        </div>
        <div class="flex pt-[20px]">
          <h1 class="font-bold">{{ $t("hostelInfo.title2") }} :</h1>
          <div>
            <p class="ml-[25px] w-[600px]">{{ $t("hostelInfo.text2") }}</p>
          </div>
        </div>

        <div class="flex pt-[20px]">
          <h1 class="font-bold">{{ $t("hostelInfo.title3") }} :</h1>
          <div>
            <p class="ml-[170px] w-[600px]">
              {{ $t("hostelInfo.text3") }}
            </p>
          </div>
        </div>

        <div class="flex pt-[20px]">
          <h1 class="font-bold">{{ $t("hostelInfo.title4") }} :</h1>
          <div>
            <p class="ml-[100px] w-[600px]">
              {{ $t("hostelInfo.text4") }}
            </p>
          </div>
        </div>

        <div class="flex pt-[20px]">
          <h1 class="font-bold">{{ $t("hostelInfo.title5") }}</h1>
          <div>
            <p class="ml-[120px] w-[600px]">
              {{ $t("hostelInfo.text5") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IosManIcon from "vue-ionicons/dist/ios-man.vue";
import IosCropIcon from "vue-ionicons/dist/ios-crop.vue";
import IosBusinessIcon from "vue-ionicons/dist/ios-business.vue";
import IosPaperPlaneIcon from "vue-ionicons/dist/ios-paper-plane.vue";
import IosBedIcon from "vue-ionicons/dist/ios-bed.vue";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { db, auth } from "../firebase/index";
import {
  collection,
  getDocs,
  doc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
export default {
  components: {
    IosManIcon,
    IosCropIcon,
    IosPaperPlaneIcon,
    IosBusinessIcon,
    IosBedIcon,
  },
  data() {
    return {
      cards: [],
      currentUser: null,

      access: null,
      infoImg: [
        "https://avatars.mds.yandex.net/i?id=6ecf44891e09ab8aa0b8da75440586d3_l-5234329-images-thumbs&ref=rim&n=13&w=1080&h=825",
        "https://4kwallpaper.wiki/wp-content/uploads/2019/09/283206.jpg",
        "https://avatars.mds.yandex.net/get-altay/3733076/2a000001791f3a2caca49a400268977cdb8a/XXL",
      ],
      currentImage:
        "https://avatars.mds.yandex.net/i?id=6ecf44891e09ab8aa0b8da75440586d3_l-5234329-images-thumbs&ref=rim&n=13&w=1080&h=825",
    };
  },
  async created() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.currentUser = user;
        const userDocRef = doc(db, "users", user.uid);

        const unsubscribe = onSnapshot(userDocRef, (doc) => {
          if (doc.exists()) {
            this.access = doc.data().access;
          }
        });
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
