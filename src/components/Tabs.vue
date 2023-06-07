<template>
  <div>
    <ul
      class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 ml-[200px]"
    >
      <li class="mr-2">
        <a
          href="#"
          :class="[
            'inline-block px-4 py-3 rounded-lg',
            activeTab === 1
              ? 'text-white bg-blue-600 active'
              : 'focus:outline-none dark:bg-gray-700 dark:text-white',
          ]"
          @click="setActiveTab(1)"
          aria-current="page"
        >
          {{ $t("book.obsh1") }}</a
        >
      </li>
      <li class="mr-2">
        <a
          href="#"
          :class="[
            'inline-block px-4 py-3 rounded-lg',
            activeTab === 2
              ? 'text-white bg-blue-600 active'
              : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white',
          ]"
          @click="setActiveTab(2)"
          aria-current="page"
          >{{ $t("book.obsh2") }}</a
        >
      </li>
      <li class="mr-2">
        <a
          href="#"
          :class="[
            'inline-block px-4 py-3 rounded-lg',
            activeTab === 3
              ? 'text-white bg-blue-600 active'
              : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white',
          ]"
          @click="setActiveTab(3)"
          aria-current="page"
          >{{ $t("book.obsh3") }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1,
    };
  },
  methods: {
    setActiveTab(tabNumber) {
      this.activeTab = tabNumber;
      this.$emit("tab-changed", this.activeTab);
    },
  },
};
</script>

<style lang="scss" scoped></style>
