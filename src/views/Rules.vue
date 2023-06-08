<template>
  <div class="bg-[#FFFF] w-full ml-[25px] rounded-[15px] p-[25px] h-[800px]">
    <div
      v-if="payment === false"
      class="bg-[#FFFF] w-full ml-[25px] rounded-[15px] p-[25px] h-[700px]"
    >
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
            {{ $t("ticket.dostup") }}
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="font-bold text-[30px] text-[#1D4ED8]">
        {{ $t("ticket.title") }}
      </h1>
      <div>
        <h2 class="text-[25px] my-[15px]">{{ $t("ticket.choise") }}:</h2>

        <div class="flex">
          <div
            v-for="(template, index) in templates"
            :key="index"
            @click="selectTemplate(index)"
          >
            <img
              class="w-[200px] ml-[50px]"
              :src="template.image"
              :alt="template.name"
            />
          </div>
          <div>
            <p class="pl-[20px] text-[#1d4ed8] text-[25px]">
              {{ $t("ticket.chos") }} {{ index }}
            </p>
            <p v-if="selectedTemplate" class="pl-[20px] text-[#22c55e]">
              {{ $t("ticket.enter") }}
            </p>
          </div>
        </div>

        <div class="flex items-center">
          <canvas class="pt-[15px]" ref="canvas" />
          <Qr
            class="ml-[15px]"
            v-if="showCard === true"
            :data="`${fn} ${ln} ${corpus} ${group} Общ ${obsh} /  Этаж ${floor} /Комната ${room}`"
          />
        </div>
        <div class="flex gap-[15px] mt-[15px]">
          <button
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            @click="createCertificate"
          >
            {{ $t("ticket.make") }}
          </button>
          <br />

          <button
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            @click="downloadImage"
            v-if="showCard"
          >
            {{ $t("ticket.downl") }}</button
          ><br />
          <button
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            @click="clearCanvas"
            v-if="selectedTemplate && showCard"
          >
            {{ $t("ticket.delete") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Qr from "../components/Qr.vue";
import { fabric } from "fabric";
import { auth } from "../firebase/index";
import { db } from "../firebase/index";
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
export default {
  components: {
    Qr,
  },
  data() {
    return {
      payment: false,
      index: null,
      showCard: false,
      ln: "",
      fn: "",
      corpus: "",
      group: "",
      room: "",
      obsh: "",
      floor: "",
      access: null,
      templates: [
        {
          name: "Шаблон 1",
          image: "./propsk.jpg",
          width: 400,
          height: 280,
        },
        {
          name: "Шаблон 2",
          image: "./propsk2.jpg",
          width: 400,
          height: 280,
        },
      ],
      selectedTemplate: null,
    };
  },
  methods: {
    selectTemplate(index) {
      this.selectedTemplate = this.templates[index];
      this.index = this.selectedTemplate.name;
    },
    createCertificate() {
      this.showCard = true;
      const canvas = this.$refs.canvas;
      const template = this.selectedTemplate;

      if (!template) {
        // обработка ошибки, например вывод сообщения для пользователя
        return;
      }
      canvas.width = template.width;
      canvas.height = template.height;
      const fabricCanvas = new fabric.Canvas(canvas);
      const templateImage = new fabric.Image.fromURL(template.image, (img) => {
        img.scaleToWidth(template.width);
        fabricCanvas.setBackgroundImage(
          img,
          fabricCanvas.renderAll.bind(fabricCanvas)
        );
        const nameText = new fabric.Textbox(this.fn, {
          left: 20,
          top: 150,
          fontFamily: "Helvetica",
          fontSize: 15,
        });
        const surnameText = new fabric.Textbox(this.ln, {
          left: 20,
          top: 175,
          fontFamily: "Helvetica",
          fontSize: 15,
        });
        const corpus = new fabric.Textbox(this.corpus, {
          left: 20,
          top: 205,
          fontFamily: "Helvetica",
          fontSize: 14,
          width: 200,
        });
        const group = new fabric.Textbox(this.group, {
          left: 200,
          top: 206,
          fontFamily: "Helvetica",
          fontSize: 13,
          width: 200,
        });
        let floor = new fabric.Textbox(` Этаж ${this.floor.toString()} /`, {
          left: 72,
          top: 229,
          fontFamily: "Helvetica",
          fontSize: 15,
          width: 200,
        });

        const obsh = new fabric.Textbox(` Общ ${this.obsh.toString()}/`, {
          left: 20,
          top: 229,
          fontFamily: "Helvetica",
          fontSize: 15,
          width: 200,
        });
        const room = new fabric.Textbox(` Комната ${this.room.toString()}`, {
          left: 135,
          top: 229,
          fontFamily: "Helvetica",
          fontSize: 15,
          width: 200,
        });
        const image = new fabric.Image.fromURL("./logo.png", function (img) {
          img.scale(0.85);
          img.set({
            left: 283,
            top: 50,
          });
          fabricCanvas.add(img);
        });
        fabricCanvas.add(floor);
        fabricCanvas.add(room);
        fabricCanvas.add(obsh);
        fabricCanvas.add(corpus);

        fabricCanvas.add(nameText);
        fabricCanvas.add(group);
        fabricCanvas.add(surnameText);
      });
      // сохранение грамоты
    },
    downloadImage() {
      const canvas = this.$refs.canvas;
      const link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.download = "certificate.png";
      link.click();
    },
    clearCanvas() {
      this.showCard = false;
      const canvas = this.$refs.canvas;
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
    },
  },
  async created() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.currentUser = user;
        // Получаем данные пользователя из Firestore
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        console.log(userDoc.data());
        if (userDoc.exists()) {
          this.payment = userDoc.data().payment;
          this.fn = userDoc.data().firstName;
          this.ln = userDoc.data().lastName;
          this.corpus = userDoc.data().corpus;
          this.group = userDoc.data().group;
          this.floor = userDoc.data().floor;
          this.obsh = userDoc.data().dormitory;
          this.room = userDoc.data().room;
          this.payment = userDoc.data().payment;
          this.access = userDoc.data().access;
        }
      }
    });
  },
};
</script>
