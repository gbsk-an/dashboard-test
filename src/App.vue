<template>
  <Home></Home>
  <ModalActivation v-if="isOpenedActivationModal" />
</template>

<script>
import Home from "@/views/Home.vue";
import ModalActivation from "@/components/ModalActivation.vue";
export default {
  name: "App",
  components: {
    Home,
    ModalActivation,
  },
  computed: {
    isOpenedActivationModal() {
      return this.$store.getters["modals/isOpenedActivation"];
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/variables";

html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0 auto;
  background-color: $white;
  font-family: $themeFont;
}

#app {
  overflow-x: hidden;
}

button,
input,
optgroup,
select,
textarea {
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  font: inherit;
  color: inherit;
  letter-spacing: inherit;
}

span {
  color: $primaryGrey;
}
ul {
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
}
h1 {
  margin: 0;
  font-weight: 600;
  font-size: 38px;
  line-height: 46px;
  color: $primaryGrey;
}
h3 {
  margin: 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: $primaryGrey;
}
h4 {
  margin: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: $primaryGrey;
}
h5 {
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: $primaryGreyAlt;
}
p {
  margin: 0;
  color: $lightGrey;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
}
.p-mini {
  margin: 0;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: $lightGreyAlt;
}
</style>
