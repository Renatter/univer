<template>
  <div v-for="item in cards">
    {{}}
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
            <div v-for="image in item.infoImg" :key="image">
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
          <h1 class="text-blue-700 font-bold text-[25px]">{{ item.name }}</h1>
          <div class="flex items-end pt-[25px]">
            <IosManIcon w="30px" h="30px" class="mr-[5px]" />
            <p class="mr-[5px] font-bold">Мест:</p>
            <p class="mr-[5px]">{{ item.min }}</p>
            из
            <p class="ml-[5px]">{{ item.max }}</p>
          </div>
          <div class="flex items-end pt-[25px]">
            <IosCropIcon w="30px" h="30px" class="mr-[5px]" />
            <p class="mr-[5px] font-bold">Общая площадь общежития:</p>
            <p>{{ item.place }}кв м2.</p>
          </div>

          <div class="flex items-end pt-[25px]">
            <IosPaperPlaneIcon w="30px" h="30px" class="mr-[5px]" />
            <p class="mr-[5px] font-bold">Место расположение:</p>
            <p>{{ item.ulica }}</p>
          </div>
          <div class="flex items-end pt-[25px]">
            <IosBusinessIcon w="30px" h="30px" class="mr-[5px]" />
            <p class="mr-[5px] font-bold">Количество этажей:</p>
            <p>{{ item.counFloor }}</p>
          </div>
          <div class="flex pt-[25px]">
            <IosBedIcon w="30px" h="30px" class="mr-[5px]" />
            <p class="mr-[5px] font-bold">Количество комнат:</p>
            <div class="ml-[15px]">
              <p class="">2-хместные – {{ item.countRoom }}к <br /></p>
            </div>
          </div>
          <div class="mt-[25px]">
            <router-link v-if="access" to="/Search">
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Выбрать комнату
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
                Отправить документы
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
              войдите чтобы бронировать
            </p>
          </div>
        </div>
      </div>
      <div class="pt-[70px]">
        <h1 class="text-blue-700 font-bold text-[25px]">Иноформация</h1>
        <div class="flex pt-[30px]">
          <h1 class="font-bold">Оснащение комнат:</h1>
          <div>
            <p class="ml-[100px] w-[600px]">
              {{ item.infoHome }}
            </p>
          </div>
        </div>
        <div class="flex pt-[20px]">
          <h1 class="font-bold">Оснащение помещений общего пользования:</h1>
          <div>
            <p class="ml-[25px] w-[600px]">
              {{ item.Equipment }}
            </p>
          </div>
        </div>

        <div class="flex pt-[20px]">
          <h1 class="font-bold">Стоимость проживания:</h1>
          <div>
            <p class="ml-[100px] w-[600px]">
              {{ item.price }}
            </p>
          </div>
        </div>

        <div class="flex pt-[20px]">
          <h1 class="font-bold">Продолжительность проживания:</h1>
          <div>
            <p class="ml-[5px] w-[600px]">
              {{ item.lengths }}
            </p>
          </div>
        </div>

        <div class="flex pt-[20px]">
          <h1 class="font-bold">Условия оплаты:</h1>
          <div>
            <p class="ml-[120px] w-[600px]">
              {{ item.conditions }}
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
      currentImage: "",
      access: null,
    };
  },
  async created() {
    const hotelsRef = collection(db, "hotel");
    const q = query(
      hotelsRef,
      where("Name", "==", `${this.$route.params.Hid}`)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const card = {
        name: data.Name,
        counFloor: data.counFloor,
        countRoom: data.countRoom,
        max: data.max,
        min: data.min,
        place: data.place,
        img: data.img,
        ulica: data.ulica,
        infoHome: data.infoHome,
        Equipment: data.equipment,
        price: data.price,
        lengths: data.lengths,
        conditions: data.conditions,
        infoImg: data.infoImg,
      };
      this.cards.push(card);
      this.currentImage = data.infoImg[0];
    });
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
