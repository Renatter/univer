<template>
  <div class="bg-[#FFFF] w-full ml-[25px] rounded-[15px] p-[25px] h-[700px]">
    <div v-if="payment === false || currentUser == false">
      <div>
        <div class="flex items-center justify-center pt-[200px]">
          <div role="status">
            <svg
              class="mr-2 text-gray-200 dark:text-[#E02424] fill-[#E02424] w-[130px] h-[130px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="">
          <p class="text-center text-[#E02424] font-bold text-[30px] pt-[25px]">
            Страница доступна только для членов общежития
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="font-bold text-[25px] texc">Жалоба</h1>
      <div class="items-center justify-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <!-- Add a condition to display the uploaded image -->
          <template v-if="complaintImgUrl">
            <img
              :src="complaintImgUrl"
              alt="Uploaded Image"
              class="w-40 h-40 mb-3"
            />
            <button
              @click="deleteImage"
              class="mt-2 text-sm text-gray-500 hover:text-red-500 focus:outline-none"
            >
              Delete Image
            </button>
          </template>
          <template v-else>
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
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
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
          </template>
          <input
            id="dropzone-file"
            type="file"
            class="hidden"
            @change="handleFileUpload"
          />
        </label>
        <div class="flex items-center pt-[15px]">
          <textarea
            v-model="complaintMsg"
            id="chat"
            rows="2"
            class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
          ></textarea>
          <button
            @click="uploadImage()"
            class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
          >
            <svg
              class="w-8 h-8 rotate-90"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    {{ complaintImg }}
  </div>
</template>

<script>
import { storage, db, auth } from "../firebase/index";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll,
} from "firebase/storage";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
export default {
  data() {
    return {
      access: null,
      payment: null,
      shoImg: null,
      uploadedImage: null,
      file: null,
      complaintImg: [],
      complaintMsg: "",
      complaintImgUrl: "",
      currentUser: false,
    };
  },
  methods: {
    handleFileUpload(e) {
      this.file = e.target.files[0];
      console.log(this.file);
    },
    deleteImage() {
      this.uploadedImage = null;
    },
    async uploadImage() {
      if (!this.file) {
        return alert("Please choose a file");
      } else {
        const storageRef = ref(
          storage,
          `/complaint/${this.currentUser.uid}/${this.file.name}`
        );
        await uploadBytes(storageRef, this.file);
        const downloadUrl = await getDownloadURL(storageRef);
        this.complaintImg.push(downloadUrl);
        const userDocRef = doc(db, "users", this.currentUser.uid);
        await updateDoc(userDocRef, {
          complaintImg: downloadUrl,
          complaint: true,
          complaintMsg: this.complaintMsg,
        });
        this.complaintImgUrl = downloadUrl;
        this.file = null;
      }
    },
  },

  created() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.currentUser = user;
        const userDocRef = doc(db, "users", user.uid);

        const unsubscribe = onSnapshot(userDocRef, (doc) => {
          if (doc.exists()) {
            this.queue = doc.data().queue;
            this.access = doc.data().access;
            this.payment = doc.data().payment;
            this.complaintImgUrl = doc.data().complaintImg || [];
          }
        });
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
