<template>
  <div
    class="bg-[#FFFF] w-full ml-[25px] mb-[30px] rounded-[15px] p-[25px] min-h-[800px]"
  >
  <h1 class="font-bold text-[30px] text-[#1D4ED8]">Отправка документов</h1>
    <div v-if="queue">
      <div class="flex items-center justify-center pt-[200px]">
        <div role="status">
          <svg
            aria-hidden="true"
            class="mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 w-[130px] h-[130px]"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </div>
      <p class="text-center text-[#1d4ed8] font-bold text-[30px] pt-[25px]">
        ждите ответа от администрации
      </p>
    </div>
    <div v-if="access">
      <div class="flex items-center justify-center pt-[200px]">
        <div role="status">
          <svg class="mr-2 text-gray-200 dark:text-[#31C48D] fill-[#31C48D] w-[130px] h-[130px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>

        </div>
      </div>
      <div class="">
        <p class="text-center text-[#31C48D] font-bold text-[30px] pt-[25px]">
          Можете Бронировать
         <div> <router-link to="/Search"  type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Бронировать</router-link></div>
        </p>
      </div>
    </div>
    <div v-if="rejected">
      <div class="flex items-center justify-center pt-[200px]">
        <div role="status">
          <svg class="mr-2 text-gray-200 dark:text-[#E02424] fill-[#E02424] w-[130px] h-[130px]"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>


        </div>
      </div>
      <div class="">
        <p class="text-center text-[#E02424] font-bold text-[30px] pt-[25px]">
         Откланен
         <div class="text-[20px] text-[#64748b]">Причина: {{ rejectMsg }}</div>
         <div> 
          <button @click="repeatDocument" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Повторить</button></div>
        </p>
      </div>
    </div>
    <div  v-if="!queue && !access  && !rejected">
      <div>
        <label
          class="block text-sm font-medium text-gray-900 dark:text-white pt-[50px] text-[25px] mb-[15px]"
          for="file_input"
          >Удостоверение личности</label
        >
        <div>
          <input
            v-if="!idcardUrl"
            @change="onFileChange"
            class="block w-[400px] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
          />
          <div v-else>
            <a
              target="new"
              :href="idcardUrl"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Открыть документ
            </a>
            <button
              target="new"
              @click="delteIdcard"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Удалить
            </button>
          </div>
        </div>
        <div v-if="file" class="mt-[30px]">
          <button
            @click="uploadImage"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Загрузить
          </button>
          <button
            v-if="file || idcardUrl"
            @click="resetFileInput"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Очистить
          </button>
        </div>
      </div>

      <div>
        <label
          class="block text-sm font-medium text-gray-900 dark:text-white pt-[50px] text-[25px] mb-[15px]"
          for="file_input1"
          >Флюорография</label
        >
        <div>
          <input
            v-if="!flurUrl"
            @change="fluorography"
            class="block w-[400px] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input1"
            type="file"
          />
          <div v-else>
            <a
              target="new"
              :href="flurUrl"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Открыть документ
            </a>
            <button
              target="new"
              @click="delteFlur"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Удалить
            </button>
          </div>
        </div>
        <div v-if="file1" class="mt-[30px]">
          <button
            @click="uploadFlur"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Загрузить
          </button>
          <button
            v-if="file1"
            @click="resetFileInput1"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Очистить
          </button>
        </div>
      </div>

      <div>
        <label
          class="block text-sm font-medium text-gray-900 dark:text-white pt-[50px] text-[25px] mb-[15px]"
          for="file_input2"
          >Студенческий билет</label
        >
        <div>
          <input
            v-if="!studentUrl"
            @change="stundetCard"
            class="block w-[400px] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input2"
            type="file"
          />
          <div v-else>
            <a
              target="new"
              :href="studentUrl"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Открыть документ
            </a>
            <button
              target="new"
              @click="delteStud"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Удалить
            </button>
          </div>
        </div>
        <div v-if="file2" class="mt-[30px]">
          <button
            @click="uploadStudent"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Загрузить
          </button>
          <button
            v-if="file2"
            @click="resetFileInput2"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Очистить
          </button>
        </div>
      </div>
      <div  v-if="idcardUrl && flurUrl && studentUrl">
        <p
        class="text-[#31C48D] pt-[55px]"
       
      >
        все документы загружены можете отправлять
      </p>
      <button
      
        @click="saveDocument"
        type="button"
        class="mt-[25px] focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Отправить документы
      </button>
      </div>
      
    </div>
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
      idcard: [],
      fluorogra: [],
      studentcard: [],
      currentUser: null,
      idcardUrl: "",
      flurUrl: "",
      studentUrl: "",
      file: null,
      file1: null,
      file2: null,
      queue: null,
      access: null,
      rejected:null,
      rejectMsg:null
    };
  },
  methods: {
    async repeatDocument() {
  const userDocRef = doc(db, "users", this.currentUser.uid);
  const unsubscribe = onSnapshot(userDocRef, async (doc) => {
    await updateDoc(userDocRef, {
    
      rejected: false,
      rejectMsg:null
      // ...другие поля для обновления
    });
  });
},

      
    onFileChange(e) {
      this.file = e.target.files[0];
      console.log(this.fluor);
    },
    fluorography(e) {
      this.file1 = e.target.files[0];
      console.log(this.file1);
    },
    stundetCard(e) {
      this.file2 = e.target.files[0];
      console.log(this.file2);
    },
    async uploadImage() {
      if (!this.file) {
        return alert("Please choose a file");
      } else {
        const storageRef = ref(
          storage,
          `pdf/${this.currentUser.uid}/${this.file.name}`
        );
        await uploadBytes(storageRef, this.file);
        const downloadUrl = await getDownloadURL(storageRef);

        this.idcard.push(downloadUrl);
        const userDocRef = doc(db, "users", this.currentUser.uid);
        await updateDoc(userDocRef, {
          idcard: downloadUrl,
        });
        this.file = null;
      }
    },
    async delteIdcard() {
      const userDocRef = doc(db, "users", this.currentUser.uid);
      await updateDoc(userDocRef, {
        idcard: null,
      });
    },
    async delteFlur() {
      const userDocRef = doc(db, "users", this.currentUser.uid);
      await updateDoc(userDocRef, {
        fluorogra: null,
      });
    },
    async delteStud() {
      const userDocRef = doc(db, "users", this.currentUser.uid);
      await updateDoc(userDocRef, {
        studentcard: null,
      });
    },

    async uploadFlur() {
      if (!this.file1) {
        return alert("Please choose a file");
      } else {
        const storageRef = ref(
          storage,
          `pdf/${this.currentUser.uid}/${this.file1.name}`
        );
        await uploadBytes(storageRef, this.file1);
        const downloadUrl = await getDownloadURL(storageRef);

        this.fluorogra.push(downloadUrl);
        const userDocRef = doc(db, "users", this.currentUser.uid);
        await updateDoc(userDocRef, {
          fluorogra: downloadUrl,
        });
        this.file1 = null;
      }
    },
    async uploadStudent() {
      if (!this.file2) {
        return alert("Please choose a file");
      }
      const storageRef = ref(
        storage,
        `pdf/${this.currentUser.uid}/${this.file2.name}`
      );
      await uploadBytes(storageRef, this.file2);
      const downloadUrl = await getDownloadURL(storageRef);

      this.studentcard.push(downloadUrl);
      const userDocRef = doc(db, "users", this.currentUser.uid);
      await updateDoc(userDocRef, {
        studentcard: downloadUrl,
      });
      this.file2 = null;
    },
    resetFileInput() {
      this.file = null;
      const fileInput = document.getElementById("file_input");
      fileInput.value = "";
    },
    resetFileInput1() {
      this.file1 = null;
      const fileInput = document.getElementById("file_input1");
      fileInput.value = "";
    },
    resetFileInput2() {
      this.file2 = null;
      const fileInput = document.getElementById("file_input2");
      fileInput.value = "";
    },
    async saveDocument() {
      const userDocRef = doc(db, "users", this.currentUser.uid);
      await updateDoc(userDocRef, {
        queue: true,
      });
    },
  },
  created() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.currentUser = user;
        const userDocRef = doc(db, "users", user.uid);

        const unsubscribe = onSnapshot(userDocRef, (doc) => {
          if (doc.exists()) {
            this.idcardUrl = doc.data().idcard;
            this.studentUrl = doc.data().studentcard;
            this.flurUrl = doc.data().fluorogra;
            this.queue = doc.data().queue;
            this.access = doc.data().access;
            this.rejected = doc.data().rejected;
            this.rejectMsg = doc.data().rejectMsg
          }
        });
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
