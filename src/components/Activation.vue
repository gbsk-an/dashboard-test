<template>
  <div class="activation">
    <div class="activation-top">
      <h4 class="activation-top_title">Доступно к активации: 2</h4>
      <p class="activation-top_text">Запросите код и активируйте программу</p>
      <button-blue @click="showActivationModal">Запросить код</button-blue>
    </div>
    <div class="activation-body">
      <div class="activation-body-info">
        <p>
          Дата активации:
          <span>2022-09-15 13:54:59</span>
        </p>
        <p class="activation-body-info_important">
          Наименование компьютера:
          <span>HOME-PC</span>
          <img @mouseover="tooltip = true" @mouseleave="tooltip = false" src="@/assets/svg/important-blue.svg" width="20" height="20" />
          <div v-show="tooltip" class="tooltip">
            <div class="triangle"></div>
            <div class="tooltip-info-important">
              <p class="p-mini">Роман</p>
              <p class="p-mini">Pentium (R) Dual-Core CPU T440 @ 2.20 GHz</p>
              <p class="p-mini">Майкрософт Windows 8.1 Профессиональная</p>
            </div>
            
          </div>
        </p>
        <p>
          Комментарий:
          <span
            >Хочу перенести программу</span
          >
        </p>
      </div>
      <button-blue-border class="activation-body-btn"
        >Деактивировать</button-blue-border
      >
    </div>
    <div class="activation-body">
      <div class="activation-body-info">
        <p>
          Дата активации:
          <span>2022-09-15 13:54:59</span>
        </p>
        <p class="activation-body-info_important">
          Наименование компьютера:
          <span>HOME-PC</span>
          <img src="@/assets/svg/important-blue.svg" width="20" height="20" />
        </p>
        <p>
          Комментарий:
          <span
            >Хочу перенести программу</span
          >
        </p>
      </div>
      <button-blue-border class="activation-body-btn" 
        >Деактивировать</button-blue-border
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Activation",
  data() {
    return {
      activationModal: { isOpened: false },
      tooltip: false
    };
  },
  methods: {
    showActivationModal() {
      this.$store.commit("modals/setIsOpenedActivation", true);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
.activation {
  padding: 2.8em 1.6em 2.8em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0 1.8em;
  &-top {
    background-image: url("@/assets/picture_01.png");
    padding-bottom: 2.8em;
    &_title {
      margin-bottom: 1em;
    }
    &_text {
      margin-bottom: 2.1em;
      color: $black;
    }
  }
  &-body {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 1.8em 0;
    &:not(:last-child) {
      border-bottom: 1px solid $lightGreyAlt;
    }
    &-info {
      display: flex;
      flex-direction: column;
      gap: 0.9em;
      &_important {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    &-btn {
      align-self: flex-end;
    }
  }
}
.tooltip {
  position: absolute;
  left: 318px;
  z-index: 1000;
  display: flex;
  &-info-important {
  
  display: flex;
  flex-direction: column;
  gap: .3em;
  padding: 1.6em;
  border-radius: 5px;
  background-color: $white;
  box-shadow: $shadow1;
}
}
.triangle {
  width: 0;
  height: 0;
  margin-top: 1em;
  border-top: 6px solid transparent;
  border-right: 10px solid #FFFFFF;;
  border-bottom: 6px solid transparent;
}
</style>
