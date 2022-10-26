<template>
  <input class="input-search" placeholder="Введите название" />
</template>

<script>
export default {
  name: "InputSearch",
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
.input-search {
  position: relative;
  padding: 1.25em 0 1.25em 2em;
  width: 100%;
  color: $lightGreyAlt;
  background-color: $white;
  border: none;
  border-bottom: 1px solid $lightGrey;
  background-clip: padding-box;
  background-image: url("@/assets/svg/search.svg");
  background-repeat: no-repeat;
  background-position: left;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
}
</style>
