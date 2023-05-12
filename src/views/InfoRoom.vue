<template>
  <div v-if="selectedRoom" class="flex pt-[50px] justify-between w-full">
    <div>
      <p class="text-[20px] text-blue-700">Комната{{ selectedRoom.number }}</p>

      <p>Свободно {{ selectedRoom.capacity }}из 3 мест</p>

      <div>
        <button @click="saveAccount">Add</button>
      </div>
    </div>
    <div class="students">
      <div
        v-for="user in users"
        class="student flex border-[3px] rounded-[15px] p-[10px] mb-[15px] w-[450px]"
      >
        <img
          class="rounded-full w-[60px] max-h-[60px] mr-[7px]"
          :src="user.ImageUrl"
        />
        <div>
          <div class="flex">
            <p>Имя:</p>
            <p>{{ user.fName }}</p>
          </div>
          <div class="flex">
            <p>Фамилия :</p>
            <p>{{ user.Name }}</p>
          </div>
          <div class="flex">
            <p>Корпус :</p>
            <p>{{ user.corpus }}</p>
          </div>
          <div class="flex">
            <p>Группа :</p>
            <p>{{ user.group }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectedRoom", "users", "saveAccount"],
};
</script>

<style lang="scss" scoped></style>
