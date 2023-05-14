<template>
  <div class="bg-[#FFFF] w-full ml-[25px] rounded-[15px] p-[25px] h-[800px]">
    <div v-if="!payment">сделайте бронирование</div>
    <div v-else>
      <div>
        <h2>Выберите шаблон грамоты:</h2>
        <img style="height: 35px" src="../assets/logo.png" alt="" />
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
            <p class="pl-[20px]">Выбран {{ index }}</p>
            <p v-if="selectedTemplate" class="pl-[20px]">Намжите создать</p>
          </div>
        </div>

        <canvas ref="canvas" />
        <button @click="createCertificate">Создать грамоту</button>
        <br />

        <button @click="downloadImage" v-if="showCard">Скачать грамоту</button
        ><br />
        <button @click="clearCanvas" v-if="selectedTemplate && showCard">
          Очистить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
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
  data() {
    return {
      payment: true,
      index: null,
      showCard: false,
      ln: "",
      fn: "",
      corpus: "",
      group: "",
      room: "",
      obsh: "",
      floor: "",
      templates: [
        {
          name: "Шаблон 1",
          image: "/src/assets/propsk.jpg",
          width: 400,
          height: 280,
        },
        {
          name: "Шаблон 2",
          image: "/src/assets/propsk2.jpg",
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
        const image = new fabric.Image.fromURL("../assets/logo.png", function (
          img
        ) {
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
        }
      }
    });
  },
};
</script>
