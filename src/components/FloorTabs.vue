<template>
  <div>
    <ul
      class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400"
    >
      <a
        href="#"
        :class="[
          'inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg',
          floorTab === 1
            ? 'text-[#1e293b] bg-[#d1d5db]'
            : 'hover:text-[#1e293b] hover:bg-[#1e293b] ',
        ]"
        @click="floactiveTab(1)"
        aria-current="page"
      >
        {{ $t("book.floor1") }}</a
      >

      <a
        href="#"
        :class="[
          'inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg',
          floorTab === 2
            ? 'text-[#1e293b]  bg-[#d1d5db]'
            : 'hover:text-[#1e293b] hover:bg-[#1e293b] dark:hover:bg-gray-800 dark:hover:text-white',
        ]"
        @click="floactiveTab(2)"
        aria-current="page"
      >
        {{ $t("book.floor2") }}</a
      >
      <a
        href="#"
        :class="[
          'inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg',
          floorTab === 3
            ? 'text-[#1e293b]  bg-[#d1d5db]'
            : 'hover:text-[#1e293b] hover:bg-[#1e293b] dark:hover:bg-gray-800 dark:hover:text-white',
        ]"
        @click="floactiveTab(3)"
        aria-current="page"
      >
        {{ $t("book.floor3") }}</a
      >

      <a
        href="#"
        :class="[
          'inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg',
          floorTab === 4
            ? 'text-[#1e293b] bg-[#d1d5db]'
            : 'hover:text-[#1e293b] hover:bg-[#1e293b] dark:hover:bg-gray-800 dark:hover:text-white',
        ]"
        @click="floactiveTab(4)"
        aria-current="page"
      >
        {{ $t("book.floor4") }}</a
      >
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      floorTab: 1,
    };
  },
  methods: {
    floactiveTab(tabNumber) {
      this.floorTab = tabNumber;
      this.$emit("tab-x", this.floorTab);
    },
  },
};
</script>

<style lang="scss" scoped>
ul a {
  transition: background-color 0.3s ease;
}

ul a.active,
ul a:hover {
  background-color: #d1d5db;
}
</style>
