<template>
  <ProxyModal
      ref="modal"
  >
    <EditAuthorForm  v-if="authorToEdit" :author="authorToEdit"/>
  </ProxyModal>
</template>

<script>

import ProxyModal from "@/components/ui/modal/ProxyModal.vue";
import EditAuthorForm from "@/components/author/EditAuthorForm";

export default {
  name: "EditAuthorModal",
  data() {
    return {
      authorToEdit: null
    }
  },
  components: {
    EditAuthorForm,
    ProxyModal
  },
  mounted() {
    this.$bus.$on("openAuthorBookModal", (author) => {
      this.authorToEdit = author
      this.open();
    });
    this.$bus.$on("closeAuthorBookModal", this.close);
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

