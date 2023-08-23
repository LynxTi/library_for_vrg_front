<template>
  <BooksFeed v-if="books" :books="books"/>

</template>

<script>
import BooksFeed from "@/components/book/BooksFeed.vue";
import {mapState} from "vuex";
export default {
  name: 'BooksPage',
  components: {BooksFeed},
  computed: {
    ...mapState(['books'])
  }
}

</script>

