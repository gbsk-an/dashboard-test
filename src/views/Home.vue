<template>
  <div class="container">
    <Menu />
    <router-view v-slot="{ Component }">
      <transition name="slide-down">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
  name: "Home",
  components: {
    Menu,
  },
};
</script>

<style lang="scss">
@import "@/styles/variables";
.container {
  margin: 0 auto;
  padding: 13em 0;
  max-width: 1140px;
  display: flex;
  gap: 0 2em;
}
</style>
