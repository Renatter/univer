<template>
  <div class="certificate">
    <div class="header"></div>
    <div class="body">
      <img class="rounded-full w-[150px] h-[150px]" :src="imageUrl" alt="" />
      <p>Имя : {{ name }}</p>
      {{ imageUrl }}
      <ul>
        <li>Фамилия: {{ lastName }}</li>

        <li>Комната: {{ room }}</li>
        <li>Этаж: {{ floor }}</li>
        <li>Общ: {{ obsh }}</li>
        <li>Корпус: {{ corpus }}</li>
        <li>Группа: {{ group }}</li>
      </ul>
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Certificate",
  props: {
    name: String,
    text: Object,
    course: String,
    lastName: String,
    corpus: String,
    group: String,
    room: Number,
    obsh: Number,
    floor: Number,
    imageUrl: String,
  },
};
</script>

<style>
.certificate {
  border: 1px solid black;
  padding: 20px;
}

.body {
  font-size: 18px;
}
</style>
