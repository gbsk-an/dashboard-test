<template>
    <button type="button" class="button-manual"></button>
  </template>
  
  <script>
  export default {
    name: "button-manual",
  };
  </script>
  
  <style lang="scss" scoped>
  @import "@/styles/variables";
  .button-manual {
    width: 24px;
    height: 32px;
    background-image: url("@/assets/svg/file-blue.svg");
    cursor: pointer;
  }
  </style>
  