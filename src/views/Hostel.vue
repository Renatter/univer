<template>
  <div
    class="bg-[#FFFF] w-full ml-[25px] rounded-[15px] p-[25px] h-[800px] flex flex-wrap"
  >
    <Card
      class="mr-[35px]"
      v-for="(card, index) in cards"
      :key="index"
      :name="card.name"
      :max="card.max"
      :min="card.min"
      :image="card.img[0]"
      :images="card.img"
      :place="card.place"
    />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import { db } from "../firebase/index";
import { collection, getDocs, doc } from "firebase/firestore";
export default {
  components: {
    Card,
  },
  data() {
    return {
      cards: [],
    };
  },
  async created() {
    const hotelsRef = collection(db, "hotel");

    const querySnapshot = await getDocs(hotelsRef);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const card = {
        name: data.Name,
        counFloor: data.counFloor,
        countRoom: data.countRoom,
        max: data.max,
        min: data.min,
        place: data.place,
        img: data.img,
        ulica: data.ulica,
        infoHome: data.infoHome,
        Equipment: data.equipment,
        price: data.price,
        lengths: data.lengths,
        conditions: data.conditions,
      };
      this.cards.push(card);
    });
  },
};
</script>

<style lang="scss" scoped></style>
