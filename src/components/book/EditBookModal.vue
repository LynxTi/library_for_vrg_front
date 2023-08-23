<template>
  <ProxyModal
      ref="modal"
  >
    <EditBookForm  v-if="bookToEdit" :book="bookToEdit"/>
  </ProxyModal>
</template>

<script>

import ProxyModal from "@/components/ui/modal/ProxyModal.vue";
import EditBookForm from "@/components/book/EditBookForm.vue";

export default {
  name: "EditBookModal",
  data() {
    return {
      bookToEdit: null
    }
  },
  components: {
    EditBookForm,
    ProxyModal
  },
  mounted() {
    this.$bus.$on("openEditBookModal", (book) => {
      this.bookToEdit = book
      this.open();
    });
    this.$bus.$on("closeEditBookModal", this.close);
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

