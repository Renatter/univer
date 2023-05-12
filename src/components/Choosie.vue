<template>
  <div>
    <div
      class="m-[20px] rounded-[10px] border w-[60px] h-[60px] hover:bg-blue-600 hover:text-white cursor-pointer"
      @click="showCapacity(item)"
    >
      <p class="text-center pt-[17px]">
        {{ item.number }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "selectedRoom"],
  methods: {
    showCapacity(item) {
      this.$emit("show-capacity", item);
    },
  },
};
</script>

<style lang="scss" scoped></style>
