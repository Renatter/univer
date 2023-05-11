<template>
  <div v-if="loading">Loading...</div>
  <div v-else class="bg-[#FFFF] w-full ml-[25px] rounded-[15px] p-[25px]">
    <div class="reg-bg bg-[#FFFF]">
      <div v-if="!currentUser" class="bg-[#FFFF] z">
        <h1 class="text-4xl font-bold text-center text-blue-500 bg-[#FFFF]">
          Register!
        </h1>

        <form @submit.prevent="register" class="bg-[#FFFF]">
          <div class="flex-box pt-[50px] bg-[#FFFF]">
            <div class="mb-6 mr-[15px] bg-[#FFFF]">
              <label
                for="text"
                class="block mb-2 text-sm font-semibold text-gray-900 text-[18px] bg-[#FFFF]"
                >FirstName</label
              >
              <input
                type="text"
                id="text"
                class="text-[18px] h-[40px] bg-gray-50 border border-[#c0c0c0] text-[#0966f3] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="FirstName"
                v-model="firstName"
                required
              />
            </div>
            <div class="mb-6 mr-[15px] text-[18px] bg-[#FFFF]">
              <label
                for="text"
                class="block mb-2 text-sm font-semibold text-gray-900 text-[18px] bg-[#FFFF]"
                >LastName</label
              >
              <input
                type="text"
                id="text"
                class="h-[40px] bg-gray-50 border border-[#c0c0c0] text-[#0966f3] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[230px] p-2.5 text-[18px]"
                placeholder="LastName"
                v-model="lastname"
                required
              />
            </div>
          </div>

          <div class="Pol bg-[#FFFF]">
            <h3 class="font-semibold text-gray-900 bg-[#FFFF]">Пол</h3>
            <ul
              class="items-center w-[200px] text-sm font-semibold text-gray-900 bg-white sm:flex bg-[#FFFF]"
            >
              <li class="w-full sm:border-b-0">
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
                    >Муж
                  </label>
                </div>
              </li>
              <li class="w-full">
                <div class="flex items-center pl-3 bg-[#FFFF]">
                  <input
                    value="Жен"
                    v-model="pol"
                    id="horizontal-list-radio-id"
                    type="radio"
                    name="list-radio"
                    class="bg-[#FFFF] w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="horizontal-list-radio-id"
                    class="bg-[#FFFF] w-full text-[20px] ml-[5px] pt-[5px] font-medium text-gray-900 dark:text-gray-300"
                    >Жен</label
                  >
                </div>
              </li>
            </ul>
          </div>

          <div class="choice_group flex mb-[15px] bg-[#FFFF]">
            <div class="bg-[#FFFF]">
              <label
                for="letters"
                class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white text-[18px] bg-[#FFFF]"
                >Corpus</label
              >
              <select
                id="letters"
                class="h-[40px] bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[350px] text-[18px]"
                v-model="selectedLetter"
              >
                <option value="Ақпараттық технологиялар">
                  Ақпараттық технологиялар
                </option>
                <option value="Экономика және аудит">
                  Экономика және аудит
                </option>
                <option value="Орман, жер және су ресурстарын басқару">
                  Орман, жер және су ресурстарын басқару
                </option>
              </select>
            </div>
            <div class="ml-[10px] bg-[#FFFF]" v-if="selectedLetter">
              <label
                for="countries"
                class="bg-[#FFFF] block mb-2 text-sm font-semibold text-gray-900 dark:text-white text-[18px]"
                >Group</label
              >
              <select
                id="countries"
                v-model="group"
                class="h-[40px] bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80px] text-[18px]"
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

          <div class="flex-box bg-[#FFFF]">
            <div class="mb-6 mr-[15px] bg-[#FFFF]">
              <label
                for="text"
                class="block mb-2 text-sm font-semibold text-gray-900 text-[18px] bg-[#FFFF]"
                >Email</label
              >
              <input
                v-model="email"
                type="text"
                id="text"
                class="bg-[#FFFF]h-[40px] bg-gray-50 border border-[#c0c0c0] text-[#0966f3] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[18px]"
                placeholder="Email"
                required
              />
            </div>
            <div class="mr-[15px] bg-[#FFFF]">
              <input
                type="text"
                id="disabled-input"
                aria-label="disabled input"
                class="mt-[30px] h-[40px] mb-6 bg-[#eeeded] border border-gray-300 text-[#979797] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed text-[18px]"
                value="@wkau.kz"
                disabled
              />
            </div>
          </div>

          <div class="mb-6 bg-[#FFFF]">
            <label
              for="password"
              class="block mb-2 text-sm font-semibold text-gray-900 text-[18px] bg-[#FFFF]"
              >Your password</label
            >
            <div class="flex-box items-center bg-[#FFFF]">
              <input
                v-model="pass"
                :type="showPassword ? 'text' : 'password'"
                id="password"
                class="bg-[#FFFF] mr-[15px] h-[40px] bg-gray-50 border border-[#c0c0c0] text-[#0966f3] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[290px] p-2.5 text-[18px]"
                placeholder="password"
                required
              />
              <input
                id="checkbox-1"
                type="checkbox"
                class="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 text-[18px]"
                v-model="showPassword"
              />
              <p class="ml-[15px] bg-[#FFFF]">Show</p>
            </div>
          </div>

          <button
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-[18px]"
          >
            Register
          </button>
        </form>
        <router-link to="/Login" class="text-blue-700 bg-[#FFFF]"
          >У меня есть аккаунт</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase/index";
import { db } from "../firebase/index";
import { doc, setDoc } from "firebase/firestore";
export default {
  data() {
    return {
      email: "",
      pass: "",
      currentUser: null,
      hange: false,
      firstName: "",
      lastname: "",
      group: null,
      domain: "@wkau.kz",
      showPassword: false,
      selectedLetter: "",
      pol: "Муж",
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
  computed: {
    filteredCountries() {
      return this.countries.filter(
        (country) => country.letter === this.selectedLetter
      );
    },
  },
  methods: {
    async register() {
      this.loading = true;
      const emaildom = this.email + this.domain;
      await createUserWithEmailAndPassword(auth, emaildom, this.pass);

      await signInWithEmailAndPassword(auth, emaildom, this.pass);
      this.currentUser = auth.currentUser;
      await setDoc(doc(db, "users", this.currentUser.uid), {
        firstName: this.firstName,
        lastName: this.lastname,
        email: emaildom,
        loginCount: 0,
        corpus: this.selectedLetter,
        group: this.group,
        gender: this.pol,
        birth: "null",
        phone: "null",
        room: "null",
        floor: "null",
        dormitory: "null",

        // Добавьте другие данные пользователя, которые вы хотите сохранить в базе данных
      });
      this.$router.push({
        name: "Profile",
      });
      this.loading = false;
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  font-family: "Forum", cursive;
}

.flex-box {
  display: flex;
}
.reg-bg {
  justify-content: space-around;
  display: flex;
  height: 700px;
  width: 650px;
  margin: 0 auto;
}
.input {
  width: 200px;
  border-radius: 10px;
}
label {
  display: block;
  margin-bottom: 10px;
  display: block;
  margin-top: 1px; /* добавить небольшой отступ снизу */
}
.input-com {
  margin-right: 15px;
}
/* добавить отступ сверху */
</style>
