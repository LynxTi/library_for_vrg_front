<template>
  <router-link :to="{name: 'AuthorPage', params: {id: author._id}}" class="author-card" v-if="author">
    <div class="author-card__button" @click="editAuthor"> <i class="fa-solid fa-pen"></i> </div>
      <div class='author-card__title text-bold'>{{author.name}}</div>
    <div class="author-card__button" @click="removeAuthor"> <i class="fa-solid fa-trash"></i> </div>
  </router-link>
</template>

<script>
import {eventBus} from "@/plugins/eventBus";

export default {
  name: 'AuthorCard',
  props: {
    author: {
      type: Object,
      required: true
    }
  },
  methods: {
    editAuthor(e) {
      e.preventDefault()
      eventBus.$emit('openAuthorBookModal', this.author)
    },
    removeAuthor(e) {
      e.preventDefault()
      eventBus.$emit('openRemoveAuthorModal', this.author)
    }

  },

}
</script>

<style scoped>

</style>