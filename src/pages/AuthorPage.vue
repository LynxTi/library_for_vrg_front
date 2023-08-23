<template>
  <BooksFeed :books="books" :isShowFilter="false"/>
</template>

<script>

import BooksFeed from "@/components/book/BooksFeed.vue";
import {mapActions} from "vuex";
export default {
  name: 'AuthorPage',
  components: {BooksFeed},
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      books: []
    }
  },
  methods: {
    ...mapActions(['getBooksbyId'])
  },
  async created() {
    this.books = await this.getBooksbyId(this.id)
  }
}
</script>
