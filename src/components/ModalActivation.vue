<template>
  <div @click.stop="hideModal" class="modal">
    <div class="activation-modal">
      <div class="activation-modal-content" @click.stop>
        <h3 class="activation-modal-content_title">Запрос кода активации</h3>
        <p class="activation-modal-content_text">
          Введите исходный код, который выдает программа
        </p>
        <div class="activation-modal-content_code">
          <input
            class="activation-modal-content_code-input"
            type="text"
            placeholder="0"
          />
          <input
            class="activation-modal-content_code-input"
            type="text"
            placeholder="0"
          />
          <input
            class="activation-modal-content_code-input"
            type="text"
            placeholder="0"
          />
          <input
            class="activation-modal-content_code-input"
            type="text"
            placeholder="0"
          />
          <input
            class="activation-modal-content_code-input"
            type="text"
            placeholder="0"
          />
          <input
            class="activation-modal-content_code-input"
            type="text"
            placeholder="0"
          />
          <input
            class="activation-modal-content_code-input"
            type="text"
            placeholder="0"
          />
          <input
            class="activation-modal-content_code-input"
            type="text"
            placeholder="0"
          />
          <input
            class="activation-modal-content_code-input"
            type="text"
            placeholder="0"
          />
          <input
            class="activation-modal-content_code-input"
            type="text"
            placeholder="0"
          />
          <input
            class="activation-modal-content_code-input"
            type="text"
            placeholder="0"
          />
          <input
            class="activation-modal-content_code-input"
            type="text"
            placeholder="0"
          />
          <input
            class="activation-modal-content_code-input"
            type="text"
            placeholder="0"
          />
          <input
            class="activation-modal-content_code-input"
            type="text"
            placeholder="0"
          />
          <input
            class="activation-modal-content_code-input"
            type="text"
            placeholder="0"
          />
        </div>
        <textarea class="activation-modal-content_textarea">
Комментарий...</textarea
        >
        <button type="button" class="activation-modal-content_button">Запросить код</button>
      </div>
      <button class="activation-modal_hide-button" @click.stop="hideModal" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalActivation",
  methods: {
    hideModal() {
      this.$store.commit("modals/setIsOpenedActivation", false);
    },
  },
  computed: {
    isOpenedModal() {
      return this.$store.getters["modals/isOpenedActivation"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
.modal {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 15em;
  background-color: $blackAlt;
}
.activation-modal {
  display: flex;
  justify-content: center;
  gap: 0 1.25em;

  &-content {
    max-width: 600px;
    padding: 2.5em 2.5em 2.8em 2.5em;
    border-radius: 10px;
    background-color: $white;
    box-shadow: $shadow2;
    &_title {
      margin-bottom: 0.6em;
    }
    &_text {
      margin-bottom: 2.1em;
      color: $primaryGreyAlt2;
    }
    &_code {
      display: flex;
      justify-content: space-between;
      gap: 0.3em;
      margin-bottom: 1.25em;
      &-input {
        width: 30px;
        height: 45px;
        border: 1px solid $lightGrey;
        border-radius: 5px;
        text-align: center;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: $lightGrey;
      }
    }
    &_textarea {
      width: 100%;
      height: 118px;
      margin-bottom: 2.5em;
      padding: 0.9em;
      resize: none;
      border-radius: 5px;
      border: 1px solid $lightGrey;
      color: $primaryGreyAlt2;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
    }
    &_button {
      width: fit-content;
      height: fit-content;
      padding: .75em 1.5em;
      background: transparent;
      border-radius: 50px;
      border: 1px solid $lightGrey;
      color: $lightGrey;
      font-family: $themeFont;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      cursor: pointer;
    }
  }
  &_hide-button {
    width: 45px;
    height: 45px;
    background-image: url("@/assets/svg/close-white.svg");
    background-repeat: no-repeat;
    cursor: pointer;
  }
}
</style>
