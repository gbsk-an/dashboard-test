<template>
    <button type="button" class="button-blue-border">
      <slot>
        
      </slot>
    </button>
  </template>
  
  <script>
  export default {
    name: "button-blue-border",
  };
  </script>
  
  <style lang="scss" scoped>
  @import "@/styles/variables";
  .button-blue-border {
    width: fit-content;
    height: fit-content;
    padding: .75em 1.5em;
    background: transparent;
    border-radius: 50px;
    border: 1px solid $themeBlue;
    color: $themeBlue;
    font-family: $themeFont;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
  }
  </style>