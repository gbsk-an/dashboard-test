<template>
  <button type="button" class="button-more">Показать еще</button>
</template>

<script>
export default {
  name: "button-more",
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
.button-more {
  width: fit-content;
  height: fit-content;
  background: transparent;
  border: none;
  color: $lightGreyAlt2;
  font-family: $themeFont;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
}
</style>
