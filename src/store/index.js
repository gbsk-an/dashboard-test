import { createStore } from "vuex";
import modalStoreModule from "@/store/modals";

export default createStore({
  modules: {
    modals: modalStoreModule,
  },
});
