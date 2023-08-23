<template>
  <ProxyModal
      ref="modal"
  >
    <div class="book-form">
      <div class="remoove-book-modal text-bold">
        {{$t('global.remove_author_title')}}
      </div>
      <div class="custom-button" @click="remove">{{ $t('global.remove')}}</div>
      <div class="custom-button" @click="close">{{ $t('global.not_remove')}}</div>
    </div>
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