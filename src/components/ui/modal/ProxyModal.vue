<template>
  <teleport v-if="opened" to="body">
    <div class="modal-overlay">
      <div class="modal" :class="[$attrs.class]">
        <div
            v-if="showCloseButton"
            class="modal__close-button"
            @click="closeWithoutAction()"
        >
          <i class="fas fa-times" />
        </div>

        <div class="modal__header">
          <div class="modal__title">
            {{ title }}
          </div>
          <div class="modal__sup-title">
            <slot name="sup_title" />
          </div>
        </div>

        <div class="divider modal__divider" />

        <div>
          <slot />
        </div>

        <div class="modal__footer">
          <slot name="button" />
          <div class="modal__footer-bottom-block">
            <slot v-if="isShowBottomBlock" name="bottomBlock" />
          </div>
        </div>

        <!-- визульно этот элемент выводится над футером, но из-за особенностей css должен быть в -->
        <!-- DOM-дереве после footer'а и потом стилями выводится до него       -->
      </div>
    </div>
  </teleport>
</template>

<script>

export default {
  name: "ProxyModal",
  props: {
    title: {
      type: String,
      default: "",
    },
    isShowBottomBlock: {
      type: Boolean,
      default: false,
    },
    blocking: {
      type: Boolean,
      default: false,
    },
    modalTheme: {
      type: String,
      default: "",
    },
    showCloseButton: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    open() {
      this.opened = true;
    },
    closeWithoutAction() {
      this.opened = false;
      document.body.style.height = "";
      document.body.style.overflow = "";
      this.onClose(true);
    },
    close(value) {
      this.opened = false;
      this.onClose(value);
    },
    onClose(value) {
      document.body.style.height = "";
      document.body.style.overflow = "";
      this.$emit("close", value);
    },
  },
};
</script>