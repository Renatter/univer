<template>
  <div>
    <qrcode-vue ref="qrcode" v-if="data" :value="qrData" size="150" level="H" />
    <button
      class="mt-[15px] focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      @click="downloadQRCode"
    >
      Скачать QR-код
    </button>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";
export default {
  props: {
    data: String,
  },

  components: {
    QrcodeVue,
  },
  computed: {
    qrData() {
      return JSON.stringify(this.data); // Преобразуйте объект данных в строку JSON
    },
  },
  methods: {
    downloadQRCode() {
      const canvas = this.$refs.qrcode.$el;

      if (!canvas) {
        console.error("QR-код еще не готов для сохранения.");
        return;
      }

      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "qr-code.png";
      link.click();
    },
  },
};
</script>
