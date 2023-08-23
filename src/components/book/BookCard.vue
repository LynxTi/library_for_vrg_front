<template>
  <div class="book-card">
    <div class="book-card__header">
      <div class="book-card__genre">
        {{book.genreName}}
      </div>
    </div>
    <div class="book-card__image-container">
      <img src='@/assets/img/book.png'>
    </div>
    <div class="book-card__footer">
      <div class="book-card__book-name">{{book.name}}</div>
      <div class="book-card__author-name">{{book.authorName}}</div>
      <div class="book-card__button-wrap">
          <div class="book-card__button" @click="editBook"> <i class="fa-solid fa-pen"></i> </div>
          <div class="book-card__button" @click="removeBook"> <i class="fa-solid fa-trash"></i> </div>
      </div>
    </div>
  </div>
</template>

<script>
import {eventBus} from "@/plugins/eventBus";

export default {
  name: 'BookCard',
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  methods: {
    editBook() {
      eventBus.$emit('openEditBookModal', this.book)
    },
    removeBook() {
      eventBus.$emit('openRemoveBookModal', this.book)
    }
  }
}
</script>