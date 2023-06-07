<template>
  <div
    class="bg-[#F4F4F7] w-full ml-[25px] rounded-[15px] p-[25px] h-[800px] bg-[#FFFF]"
  >
    <div
      v-if="currentUser && currentUser.email"
      class="profile-info flex items-stretch pt-[50px] bg-[#FFFF]"
    >
      <div class="profil_text ml-[30px]">
        <div class="name flex">
          <div class="bg-[#FFFF]">
            <div
              v-if="isEditing"
              class="items-center justify-center w-full bg-[#FFFF]"
            >
              <label
                @click="showBtn = true"
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-[150px] h-[150px] border-2 border-[#22c55e] border-dashed rounded-full cursor-pointer bg-[#f2faf5]"
              >
                <div
                  class="flex flex-col items-center justify-center pt-5 pb-6"
                >
                  <svg
                    aria-hidden="true"
                    class="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p
                    class="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center"
                  >
                    <span class="font-semibold">Click to upload</span>
                    or drag and drop
                  </p>
                </div>
                <input
                  @change="onFileChange"
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                />
              </label>
              <button
                v-if="showBtn"
                class="mt-[15px] focus:outline-none text-white bg-[#86efac] hover:bg-[#51d180] focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 0"
                @click="uploadImage"
              >
                {{ $t("profil.addPht") }}
              </button>
              <p v-if="textImg" class="text-[#4ade80]bg-[#FFFF]">
                {{ $t("profil.savePht") }}
              </p>
            </div>
            <div v-else>
              <div v-if="!imageUrl">
                <img
                  class="w-[150px] rounded-full max-h-[150px] bg-[#FFFF]"
                  :src="gray"
                  alt="Нет фотографии"
                />
              </div>
              <div v-else class="bg-[#FFFF]">
                <img
                  class="w-[150px] rounded-full max-h-[150px] bg-[#FFFF]"
                  :src="imageUrl"
                  alt="Нет фотографии"
                />
              </div>
            </div>
          </div>

          <div class="name pl-[30px] bg-[#FFFF]">
            <div v-if="isEditing" class="flex bg-[#FFFF]">
              <input
                v-model="firstName"
                type="text"
                class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
              />
              <input
                v-model="lastName"
                type="text"
                class="ml-[15px] bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
              />
            </div>
            <div v-else class="flex bg-[#FFFF]">
              <p class="text-[32px] font-bold bg-[#FFFF]">{{ firstName }}</p>
              <p class="text-[32px] font-bold ml-[30px] bg-[#FFFF]">
                {{ lastName }}
              </p>
            </div>

            <hr />
            <div class="user_info flex bg-[#FFFF]">
              <div class="info_list bg-[#FFFF]">
                <p class="text-[#94a3b8] pt-[34px] bg-[#FFFF]">Пол</p>
                <p class="text-[#94a3b8] pt-[46px] bg-[#FFFF]">
                  {{ $t("profil.dateReg") }}
                </p>
                <p class="text-[#94a3b8] pt-[34px] bg-[#FFFF]">
                  {{ $t("profil.phn") }}
                </p>
                <p class="text-[#94a3b8] pt-[34px] bg-[#FFFF]">
                  {{ $t("profil.email") }}
                </p>
                <p class="text-[#94a3b8] pt-[34px] bg-[#FFFF]">Корпус</p>
                <p class="text-[#94a3b8] pt-[50px] bg-[#FFFF] mb-[25px]">
                  {{ $t("profil.group") }}
                </p>
                <p class="text-[#94a3b8] pt-[50px] bg-[#FFFF] mb-[25px]">
                  {{ $t("profil.room") }}
                </p>
                <button
                  v-if="!isEditing"
                  @click="swithRed"
                  type="button"
                  class="focus:outline-none mt-[5px] text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 0"
                >
                  {{ $t("profil.tool") }}
                </button>
                <div v-else class="bg-[#FFFF]">
                  <button
                    @click="saveAccount"
                    type="button"
                    class="w-[200px] focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-[7px]"
                  >
                    {{ $t("profil.save") }}
                  </button>
                </div>
              </div>
              <div class="info_list ml-[35px] bg-[#FFFF]">
                <div>
                  <div v-if="isEditing">
                    <div class="Pol pt-[25px] bg-[#FFFF]">
                      <ul
                        class="items-center w-[200px] text-sm font-semibold text-gray-900 bg-white sm:flex bg-[#FFFF]"
                      >
                        <li class="w-full sm:border-b-0 bg-[#FFFF]">
                          <div class="flex items-center pl-3 bg-[#FFFF]">
                            <input
                              v-model="pol"
                              id="horizontal-list-radio-license"
                              type="radio"
                              value="Муж"
                              name="list-radio"
                              class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-6002 bg-[#FFFF]"
                            />
                            <label
                              for="horizontal-list-radio-license"
                              class="w-full text-[20px] ml-[5px] pt-[5px] font-medium text-gray-900 bg-[#FFFF]"
                            >
                              {{ $t("reg.man") }}
                            </label>
                          </div>
                        </li>
                        <li class="w-full bg-[#FFFF]">
                          <div class="flex items-center pl-3 bg-[#FFFF]">
                            <input
                              value="Жен"
                              v-model="pol"
                              id="horizontal-list-radio-id"
                              type="radio"
                              name="list-radio"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="horizontal-list-radio-id"
                              class="w-full text-[20px] ml-[5px] pt-[5px] font-medium text-gray-900 dark:text-gray-300 bg-[#FFFF]"
                            >
                              {{ $t("reg.girl") }}</label
                            >
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p
                    v-else
                    class="text-[#000000] pt-[34px] font-bold bg-[#FFFF]"
                  >
                    {{ gender }}
                  </p>
                </div>

                <p class="text-[#b3b3b3] pt-[44px] font-bold bg-[#FFFF]">
                  {{ currentUser.metadata.creationTime }}
                </p>
                <div>
                  <div class="pt-[30px] bg-[#FFFF]" v-if="isEditing">
                    <input
                      v-model="phone"
                      type="text"
                      class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                    />
                  </div>
                  <p
                    v-else
                    class="text-[#000000] pt-[44px] font-bold bg-[#FFFF]"
                  >
                    {{ phone }}
                  </p>
                </div>
                <p class="text-[#b3b3b3] pt-[24px] font-bold bg-[#FFFF]">
                  {{ currentUser.email }}
                </p>
                <div>
                  <div v-if="isEditing">
                    <div
                      class="choice_group flex mb-[15px] pt-[35px] bg-[#FFFF]"
                    >
                      <div>
                        <select
                          id="letters"
                          class="h-[40px] bg-green-50 border border-green-500 text-green-900 dark:text-green-400 rounded-lg focus:ring-green-500 focus:border-green-500 block w-[350px] text-[18px] bg-[#FFFF]"
                          v-model="selectedLetter"
                        >
                          <option value="Ақпараттық технологиялар">
                            Ақпараттық технологиялар
                          </option>
                          <option value="Экономика және аудит">
                            Экономика және аудит
                          </option>
                          <option
                            value="Орман, жер және су ресурстарын басқару"
                          >
                            Орман, жер және су ресурстарын басқару
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <p
                    v-else
                    class="text-[#000000] pt-[44px] font-bold bg-[#FFFF]"
                  >
                    {{ selectedLetter }}
                  </p>
                </div>
                <div>
                  <div
                    v-if="isEditing"
                    class="pl-[260px] pt-[15px] mb-[25px] bg-[#FFFF]"
                  >
                    <div class="ml-[10px] bg-[#FFFF]" v-if="selectedLetter">
                      <select
                        id="countries"
                        v-model="group"
                        class="h-[40px] bg-green-50 border border-green-500 text-green-900 dark:text-green-400 rounded-lg focus:ring-green-500 focus:border-green-500 block w-[90px] text-[18px]"
                      >
                        <option
                          v-for="country in filteredCountries"
                          :key="country.value"
                          :value="country.value"
                        >
                          {{ country.label }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <p
                      v-if="!isEditing"
                      class="text-[#000000] mt-[45px] font-bold mb-[25px] bg-[#FFFF]"
                    >
                      {{ group }}
                    </p>
                  </div>
                  <p
                    v-if="dormitory && payment"
                    class="text-[#b3b3b3] pt-[44px] font-bold bg-[#FFFF] mb-[32px]"
                  >
                    {{ $t("profil.obsh") }}: {{ dormitory }}
                    {{ $t("profil.floor") }} {{ floor }}
                    {{ $t("profil.room") }}:
                    {{ room }}
                  </p>
                  <p
                    v-if="queue"
                    class="text-[#e11d48] pt-[44px] font-bold bg-[#FFFF] mb-[32px]"
                  >
                    {{ $t("profil.waitAdmin") }}
                  </p>
                  <p
                    v-if="!payment"
                    class="text-[#b3b3b3] pt-[44px] font-bold bg-[#FFFF] mb-[32px]"
                  >
                    {{ $t("profil.roomStatus") }}
                  </p>
                </div>
                <div>
                  <router-link
                    to="/Search"
                    v-if="payment"
                    @click="closePay"
                    class="pt-[11px] mt-[50px] focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    {{ $t("profil.cancelPay") }}
                  </router-link>
                  <router-link
                    to="/Hostel"
                    v-if="!payment && !queue"
                    class="pt-[11px] mt-[65px] focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    {{ $t("profil.toBook") }}
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else><p class="text-[#dc2626]">Войдите в аккаунт</p></div>
  </div>
</template>

<script>
import InputComp from "../components/InputComp.vue";
import { storage, db, auth } from "../firebase/index";

import { onAuthStateChanged } from "firebase/auth";
import {
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll,
} from "firebase/storage";
export default {
  components: {
    InputComp,
  },
  data() {
    return {
      dormitory: null,
      floor: null,
      room: null,
      queue: null,

      showBtn: false,
      loginCount: 0,
      payment: false,
      gray: "https://ob-kassa.ru/content/front/buhoskol_tmp1/images/reviews-icon.jpg",
      visitedDeletePage: false,
      currentUser: null,
      uid: null,

      showBtn: false,
      firstName: null,
      lastName: null,
      pol: "Муж",
      group: null,
      corpus: null,
      gender: null,
      isActive: true,

      phone: null,
      selectedLetter: "",
      isEditing: false,
      file: null,
      imageUrl: "",
      textImg: false,
      imageUrls: [],
      corpus: "",
      countries: [
        { label: "ИС-11", value: "IS11", letter: "Ақпараттық технологиялар" },
        { label: "ИС-32", value: "IS32", letter: "Ақпараттық технологиялар" },
        { label: "ИС-33", value: "IS33", letter: "Ақпараттық технологиялар" },
        { label: "ИС-34", value: "IS34", letter: "Ақпараттық технологиялар" },

        { label: "БАН-21", value: "BAN21", letter: "Экономика және аудит" },
        { label: "БАН-22", value: "BAN22", letter: "Экономика және аудит" },
        { label: "БУА-11", value: "BUA11", letter: "Экономика және аудит" },
        { label: "БФЭ-31", value: "BFE31", letter: "Экономика және аудит" },

        {
          label: "ЗУ-11",
          value: "ZU11",
          letter: "Орман, жер және су ресурстарын басқару",
        },
        {
          label: "ЗУ-21",
          value: "ZU21",
          letter: "Орман, жер және су ресурстарын басқару",
        },
        {
          label: "КД-11",
          value: "KD11",
          letter: "Орман, жер және су ресурстарын басқару",
        },
        {
          label: "КД-21",
          value: "KD21",
          letter: "Орман, жер және су ресурстарын басқару",
        },
      ],
    };
  },
  props: {
    email: {
      type: String,
      required: true,
    },
  },
  computed: {
    filteredCountries() {
      return this.countries.filter(
        (country) => country.letter === this.selectedLetter
      );
    },
  },

  methods: {
    async closePay() {
      const userDocRef = doc(db, "users", this.currentUser.uid);
      await updateDoc(userDocRef, {
        payment: false,
        dormitory: null,
        floor: null,
        room: null,
      });
    },
    swithRed() {
      this.showBtn = false;
      (this.textImg = false), (this.isEditing = true);
    },
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
    onFileChange(e) {
      this.file = e.target.files[0];
      console.log(this.file);
    },

    async uploadImage() {
      const storageRef = ref(
        storage,
        `images/${this.currentUser.uid}/${this.file.name}`
      );
      await uploadBytes(storageRef, this.file);
      const downloadUrl = await getDownloadURL(storageRef);

      this.imageUrls.push(downloadUrl);
      this.textImg = !this.textImg;
    },

    async saveAccount() {
      const userDocRef = doc(db, "users", this.currentUser.uid);
      await updateDoc(userDocRef, {
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.pol,
        phone: this.phone,
        group: this.group,
        corpus: this.selectedLetter,
      });
      this.isEditing = false;

      if (this.file) {
        // Загружаем изображение на сервер
        const storageRef = ref(
          storage,
          `images/${this.currentUser.uid}/${this.file.name}`
        );
        await uploadBytes(storageRef, this.file);
        const downloadUrl = await getDownloadURL(storageRef);

        this.imageUrl = downloadUrl;

        // Обновляем запись пользователя в Firestore
        await updateDoc(userDocRef, {
          imageUrl: downloadUrl,
        });
      }
    },
  },
  async created() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.currentUser = user;
        console.log(this.currentUser);

        // Получаем данные пользователя из Firestore
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          this.loginCount = userDoc.data().loginCount || 0;
          this.firstName = userDoc.data().firstName;
          this.lastName = userDoc.data().lastName;
          this.uid = this.currentUser.uid;
          this.group = userDoc.data().group;
          this.selectedLetter = userDoc.data().corpus;
          this.gender = userDoc.data().gender;
          this.payment = userDoc.data().payment;
          this.dormitory = userDoc.data().dormitory;
          this.floor = userDoc.data().floor;
          this.room = userDoc.data().room;
          this.queue = userDoc.data().queue;
          this.phone = userDoc.data().phone;
          this.imageUrl = userDoc.data().profilePictureUrl || "";
        } else {
          console.log("No such document!");
        }
        updateDoc(userDocRef, { loginCount: this.loginCount + 1 });

        if (this.loginCount > 1) {
          this.showBtn = true;
        }
        const imagesRef = ref(storage, `images/${this.currentUser.uid}`);
        const images = await listAll(imagesRef);
        console.log(imagesRef);
        const urls = [];
        for (const image of images.items) {
          const url = await getDownloadURL(image);
          urls.push(url);
          this.textImg = !this.textImg;
        }

        this.imageUrls = urls;
        this.imageUrl = this.imageUrls[this.imageUrls.length - 1];
      } else {
        this.currentUser = null;
      }
    });
  },
  watch: {
    pol(newVal) {
      this.gender = newVal === "Муж" ? "Муж" : "Жен";
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  font-family: "Montserrat Alternates", sans-serif;
}
hr {
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
}
</style>
