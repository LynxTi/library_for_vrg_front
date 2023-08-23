<template>
  <AuthorsFeed
      v-if="authors"
      :authors="authors"
  />
</template>

<script>
import AuthorsFeed from "@/components/author/AuthorsFeed.vue";
import {mapState} from "vuex";
export default {
  components: {AuthorsFeed},
  name: 'AuthorsPage',
  computed: {
    ...mapState(['authors'])
  }
}
</script>
