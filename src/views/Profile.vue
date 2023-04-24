<template>
  <div class="r" v-if="currentUser && currentUser.email">
    <h1 class="text-[35px] font-bold">Account</h1>

    <div class="profile-info flex items-stretch pt-[50px]">
      <div class="btn flex flex-col w-[240px]">
        <button
          :class="[
            'text-black font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2',
            isActive
              ? ' bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
              : ' bg-white border border-gray-300 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 ',
          ]"
          @click="isActive = true"
        >
          Личные данные
        </button>
        <button
          :class="[
            'text-black font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2',
            !isActive
              ? 'bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
              : 'bg-white border border-gray-300 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300',
          ]"
          @click="isActive = false"
        >
          Общежитие
        </button>
      </div>
      <div class="profil_text ml-[30px]">
        <div class="name flex">
          <div>
            <div v-if="isEditing" class="items-center justify-center w-full">
              <label
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
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
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
                class="mt-[15px] focus:outline-none text-white bg-[#86efac] hover:bg-[#51d180] focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 0"
                @click="uploadImage"
              >
                Upload Image
              </button>
              <p v-if="textImg" class="text-[#4ade80]">Нажмите Save</p>
            </div>
            <div v-else>
              <div v-if="!imageUrl">
                <img
                  class="w-[150px] rounded-full max-h-[150px]"
                  :src="gray"
                  alt="Нет фотографии"
                />
              </div>
              <div v-else>
                <img
                  class="w-[150px] rounded-full max-h-[150px]"
                  :src="imageUrl"
                  alt="Нет фотографии"
                />
              </div>
            </div>
          </div>

          <div class="name pl-[30px]">
            <div v-if="isEditing" class="flex">
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
            <div v-else class="flex">
              <p class="text-[32px] font-bold">{{ firstName }}</p>
              <p class="text-[32px] font-bold ml-[30px]">{{ lastName }}</p>
            </div>

            <hr />
            <div class="user_info flex">
              <div class="info_list">
                <p class="text-[#94a3b8] pt-[34px]">Пол</p>
                <p class="text-[#94a3b8] pt-[34px]">Дата рождения</p>
                <p class="text-[#94a3b8] pt-[46px]">Дата регистрации</p>
                <p class="text-[#94a3b8] pt-[34px]">Номер телефона</p>
                <p class="text-[#94a3b8] pt-[34px]">Эл. почта</p>
                <p class="text-[#94a3b8] pt-[34px]">Корпус</p>
                <p class="text-[#94a3b8] pt-[50px] mb-[25px]">Группа</p>
                <button
                  v-if="!isEditing"
                  @click="swithRed"
                  type="button"
                  class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 0"
                >
                  Редактировать
                </button>
                <div v-else>
                  <button
                    @click="saveAccount"
                    type="button"
                    class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                  >
                    Save
                  </button>
                  <button
                    @click="isEditing = false"
                    type="button"
                    class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <div class="info_list ml-[35px]">
                <div>
                  <div v-if="isEditing">
                    <div class="Pol pt-[25px]">
                      <ul
                        class="items-center w-[200px] text-sm font-semibold text-gray-900 bg-white sm:flex"
                      >
                        <li class="w-full sm:border-b-0">
                          <div class="flex items-center pl-3">
                            <input
                              v-model="pol"
                              id="horizontal-list-radio-license"
                              type="radio"
                              value="Муж"
                              name="list-radio"
                              class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-6002"
                            />
                            <label
                              for="horizontal-list-radio-license"
                              class="w-full text-[20px] ml-[5px] pt-[5px] font-medium text-gray-900"
                              >Муж
                            </label>
                          </div>
                        </li>
                        <li class="w-full">
                          <div class="flex items-center pl-3">
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
                              class="w-full text-[20px] ml-[5px] pt-[5px] font-medium text-gray-900 dark:text-gray-300"
                              >Жен</label
                            >
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p v-else class="text-[#000000] pt-[34px] font-bold">
                    {{ gender }}
                  </p>
                </div>
                <div>
                  <div v-if="isEditing" class="pt-[25px] flex">
                    <input
                      v-model="day"
                      placeholder="day"
                      type="text"
                      class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-[100px] p-2.5 dark:bg-gray-700 dark:border-green-500"
                    />
                    <input
                      v-model="month"
                      placeholder="month"
                      type="text"
                      class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block ml-[15px] w-[100px] p-2.5 dark:bg-gray-700 dark:border-green-500"
                    />
                    <input
                      v-model="year"
                      placeholder="year"
                      type="text"
                      class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block ml-[15px] w-[100px] p-2.5 dark:bg-gray-700 dark:border-green-500"
                    />
                  </div>
                  <p v-else class="text-[#000000] pt-[24px] font-bold">
                    {{ birth }}
                  </p>
                </div>
                <p class="text-[#000000] pt-[44px] font-bold">
                  {{ currentUser.metadata.creationTime }}
                </p>
                <div>
                  <div class="pt-[12px]" v-if="isEditing">
                    <input
                      v-model="phone"
                      type="text"
                      class="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                    />
                  </div>
                  <p v-else class="text-[#000000] pt-[44px] font-bold">
                    {{ phone }}
                  </p>
                </div>
                <p class="text-[#000000] pt-[24px] font-bold">
                  {{ currentUser.email }}
                </p>
                <div>
                  <div v-if="isEditing">
                    <div class="choice_group flex mb-[15px] pt-[35px]">
                      <div>
                        <select
                          id="letters"
                          class="h-[40px] bg-green-50 border border-green-500 text-green-900 dark:text-green-400 rounded-lg focus:ring-green-500 focus:border-green-500 block w-[350px] text-[18px]"
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
                  <p v-else class="text-[#000000] pt-[44px] font-bold">
                    {{ corpus }}
                  </p>
                </div>
                <div>
                  <div v-if="isEditing" class="pl-[260px] pt-[15px] mb-[25px]">
                    <div class="ml-[10px]" v-if="selectedLetter">
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
                      class="text-[#000000] mt-[45px] font-bold mb-[25px]"
                    >
                      {{ group }}
                    </p>
                  </div>
                </div>

                <button
                  @click="deleteAccount"
                  type="button"
                  class="pt-[11px] focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Удалить аккаунт
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
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
  onSnapshot,
  getDoc,
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
      gray: "http://pic.rutubelist.ru/user/3e/a8/3ea8627a505f6a5e3487fa234dfa112b.jpg",
      currentUser: null,
      uid: null,
      firstName: null,
      lastName: null,
      pol: "Муж",
      group: null,
      corpus: null,
      gender: null,
      isActive: true,
      birth: null,
      day: null,
      month: null,
      year: null,
      phone: null,
      selectedLetter: "",
      isEditing: false,
      file: null,
      imageUrl: "",
      textImg: false,
      imageUrls: [],
      countries: [
        { label: "ИС-11", value: "IS11", letter: "Ақпараттық технологиялар" },
        { label: "ИС-32", value: "IS32", letter: "Ақпараттық технологиялар" },
        { label: "ИС-33", value: "IS33", letter: "Ақпараттық технологиялар" },
        { label: "ИС-22", value: "IS34", letter: "Ақпараттық технологиялар" },

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
    swithRed() {
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

    async deleteImage(index) {
      const imageUrl = this.imageUrls[index];
      const imageRef = refFromURL(storage, imageUrl);
      await deleteObject(imageRef);

      this.imageUrls.splice(index, 1);
    },

    async saveAccount() {
      const birhDay = this.day + "." + this.month + "." + this.year;
      const userDocRef = doc(db, "users", this.currentUser.uid);
      await updateDoc(userDocRef, {
        firstName: this.firstName,
        gender: this.pol,
        phone: this.phone,
        group: this.group,
        corpus: this.corpus,
        birth: birhDay,
        day: this.day,
        month: this.month,
        year: this.year,
      });
      this.isEditing = false;
      location.reload();
      console.log(this.firstName);
    },
  },
  created() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.currentUser = user;
        console.log(this.currentUser);

        // Получаем данные пользователя из Firestore
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          this.firstName = userDoc.data().firstName;
          this.lastName = userDoc.data().lastName;
          this.uid = this.currentUser.uid;
          this.group = userDoc.data().group;
          this.corpus = userDoc.data().corpus;
          this.gender = userDoc.data().gender;
          this.birth = userDoc.data().birth;
          this.phone = userDoc.data().phone;
          this.imageUrl = userDoc.data().profilePictureUrl || "";
        } else {
          console.log("No such document!");
        }

        // Get the user's image urls
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
};
</script>
<style>
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
