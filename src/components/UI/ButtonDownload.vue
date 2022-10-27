<template>
  <button type="button" class="button-download"></button>
</template>

<script>
export default {
  name: "button-download",
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
.button-download {
  width: 33px;
  height: 32px;
  background-image: url("@/assets/svg/download-green.svg");
  cursor: pointer;
}
</style>
