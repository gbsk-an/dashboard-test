<template>
  <div class="menu">
    <h5 class="menu-item">Дашборд</h5>
    <h5 class="menu-item">Мои заказы</h5>
    <router-link to="/MyPrograms" class="menu-item">
      <h5>Мои программы</h5>
    </router-link>
    <h5 class="menu-item">Учебный центр</h5>
    <h5 class="menu-item">Запрос токена</h5>
    <h5 class="menu-item">Техподдержка</h5>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.menu {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: $menuWidth;
  margin-top: 99px;

  &-item {
    position: relative;
    padding: 1.25em 0;
    text-decoration: none;

    &:hover {
      color: $themeBlue;

      &::after {
        content: "";
        position: absolute;
        width: 19px;
        height: 15px;
        background-image: url("@/assets/svg/arrow-right-blue.svg");
        background-repeat: no-repeat;
        background-position: center;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
      }
      
      & > h5 {
        color: $themeBlue;
      }
    }

    &:not(:last-child) {
      border-bottom: 1px solid $themeBlueAlt;
    }
  }
}
</style>
