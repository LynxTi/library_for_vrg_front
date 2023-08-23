import { Store } from "vuex";
import Emitter from "tiny-emitter";

const emitter = new Emitter();

export const eventBus = {
  $on: (...args) => emitter.on(...args),
  $once: (...args) => emitter.once(...args),
  $off: (...args) => emitter.off(...args),
  $emit: (...args) => {
    emitter.emit(...args);
  },
};

export default {
  install(app) {
    app.config.globalProperties.$bus = eventBus;
    Store.prototype.$bus = eventBus;
  },
};
