<template>
  <ProxyModal
      ref="modal"
  >
    <CreateBookForm/>
  </ProxyModal>
</template>

<script>

import ProxyModal from "@/components/ui/modal/ProxyModal.vue";
import CreateBookForm from "@/components/book/CreateBookForm.vue";

export default {
  name: "CreateBookModal",
  components: {
    CreateBookForm,
    ProxyModal
  },
  mounted() {
    this.$bus.$on("openCreateBookModal", () => {
      this.open();
    });
    this.$bus.$on("closeCreateBookModal", this.close);
  },
  methods: {
    open() {
      this.$refs.modal.open();
    },
    close() {
      this.$refs.modal.close();
    },
  },
};
</script>

