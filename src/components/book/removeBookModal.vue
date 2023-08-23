<template>
  <ProxyModal
      ref="modal"
  >
    <div class="remoove-book-modal">
     {{ $t('global.confirm_remove_book')}}
    </div>
    <div class="custom-button" @click="remove">{{ $t('global.remove')}}</div>
    <div class="custom-button" @click="close">{{ $t('global.not_remove')}}</div>

  </ProxyModal>
</template>

<script>
import ProxyModal from "@/components/ui/modal/ProxyModal.vue";
import {mapActions} from "vuex";

export default {
  name: 'RemoveBookModal',
  data() {
    return {
      bookToRemove: null
    }
  },
  components: {
    ProxyModal
  },
  mounted() {
    this.$bus.$on("openRemoveBookModal", (book) => {
      this.bookToRemove = book
      this.open();
    });
    this.$bus.$on("closeRemoveBookModal", this.close);
  },
  methods: {
    ...mapActions(['removeBook']),

    remove() {
      this.removeBook(this.bookToRemove)
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