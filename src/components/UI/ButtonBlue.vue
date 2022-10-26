<template>
    <button type="button" class="button-blue">
      <slot>
        
      </slot>
    </button>
  </template>
  
  <script>
  export default {
    name: "button-blue",
  };
  </script>
  
  <style lang="scss" scoped>
  @import "@/styles/variables";
  .button-blue {
    width: fit-content;
    height: fit-content;
    padding: .75em 2.1em;
    background: $themeBlue;
    border-radius: 50px;
    color: $white;
    font-family: $themeFont;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
  }
  </style>