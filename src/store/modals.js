const modalStoreModule = {
  namespaced: true,
  state: () => ({
    activation: { isOpened: false },
  }),
  getters: {
    isOpenedActivation(state) {
      return state.activation.isOpened;
    },
  },
  mutations: {
    setIsOpenedActivation(state, newVal) {
      state.activation.isOpened = newVal;
    },
  },
};

export default modalStoreModule;
