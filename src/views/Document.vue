<template>
  <div class="bg-[#FFFF] w-full ml-[25px] rounded-[15px] p-[25px] h-[800px]">
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
          Отправить
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
        >Удостоверение личности</label
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
          Отправить
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
        >Удостоверение личности</label
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
          Отправить
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
    <p class="text-[#31C48D]" v-if="idcardUrl && flurUrl && studentUrl">
      все документы отправленные
    </p>
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
    };
  },
  methods: {
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
          }
        });
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
