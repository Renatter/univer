<template>
  <div class="bg-[#F4F4F7] w-full ml-[25px] rounded-[15px] p-[25px]">
    <div class="reg-bg">
      <div v-if="!currentUser">
        <h1 class="text-4xl font-bold text-center text-blue-500">Login!</h1>

        <form @submit.prevent="sign" class="pt-[50px]">
          <div class="flex-box">
            <div class="mb-6 mr-[15px]">
              <label
                for="text"
                class="block mb-2 text-sm font-medium text-gray-900 text-[18px]"
                >Email</label
              >
              <input
                v-model="email"
                type="text"
                id="text"
                class="h-[40px] bg-gray-50 border border-[#c0c0c0] text-[#0966f3] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-[18px]"
                placeholder="Email"
                required
              />
            </div>
            <div class="mr-[15px]">
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

          <div class="mb-6">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 text-[18px]"
              >Your password</label
            >
            <div class="flex-box items-center">
              <input
                v-model="pass"
                :type="showPassword ? 'text' : 'password'"
                id="password"
                class="mr-[15px] h-[40px] bg-gray-50 border border-[#c0c0c0] text-[#0966f3] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[290px] p-2.5 text-[18px]"
                placeholder="password"
                required
              />
              <input
                id="checkbox-1"
                type="checkbox"
                class="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 text-[18px]"
                v-model="showPassword"
              />
              <p class="ml-[15px]">Show</p>
            </div>
          </div>

          <button
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-[18px]"
          >
            Login
          </button>
        </form>
        <router-link to="/register" class="text-blue-700">register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/index";
export default {
  data() {
    return {
      email: "",
      pass: "",
      currentUser: null,
      hange: false,
      showPassword: false,
      domain: "@wkau.kz",
    };
  },
  methods: {
    async sign() {
      const emaildom = this.email + this.domain;
      signInWithEmailAndPassword(auth, emaildom, this.pass);
      console.log(emaildom, this.pass);
      this.$router.push({
        name: "Profile",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.reg-bg {
  padding-top: 100px;
}

* {
  font-family: "Forum", cursive;
}
.flex-box {
  display: flex;
}
.reg-bg {
  justify-content: space-around;
  display: flex;
  height: 650px;
  width: 600px;
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
