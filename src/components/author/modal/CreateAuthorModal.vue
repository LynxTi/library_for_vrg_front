<template>
  <ProxyModal
      ref="modal"
  >
    <CreateAuthorForm/>
  </ProxyModal>
</template>

<script>

import ProxyModal from "@/components/ui/modal/ProxyModal.vue";
import CreateAuthorForm from "@/components/author/CreateAuthorForm.vue";

export default {
  name: "CreateAuthorModal",
  components: {
    CreateAuthorForm,
    ProxyModal
  },
  mounted() {
    this.$bus.$on("openCreateAuthorModal", () => {
      this.open();
    });
    this.$bus.$on("closeCreateAuthorModal", this.close);
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

