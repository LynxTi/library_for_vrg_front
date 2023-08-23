<template>
  <ProxyModal
      ref="modal"
  >
    <div class="remoove-book-modal">
      Ви впевнені що хочете видилати цього автора?
    </div>
    <div class="custom-button" @click="remove">Видалити</div>
    <div class="custom-button" @click="close">Нехай буде</div>

  </ProxyModal>
</template>

<script>
import ProxyModal from "@/components/ui/modal/ProxyModal.vue";
import {mapActions} from "vuex";

export default {
  name: 'RemoveAuthModal',
  data() {
    return {
      authorToRemove: null
    }
  },
  components: {
    ProxyModal
  },
  mounted() {
    this.$bus.$on("openRemoveAuthorModal", (author) => {
      this.authorToRemove = author
      this.open();
    });
    this.$bus.$on("closeRemoveAuthorModal", this.close);
  },
  methods: {
    ...mapActions(['removeBook', 'removeAuthor', 'getBooksbyId']),

    async remove() {
      const books = await this.getBooksbyId(this.authorToRemove._id)
      for (const book of books) {
        this.removeBook(book)

      }
      this.removeAuthor(this.authorToRemove)
      this.close()
    },
    open() {
      this.$refs.modal.open();
    },
    close() {
      this.$refs.modal.close();
    },
  },
};
</script>