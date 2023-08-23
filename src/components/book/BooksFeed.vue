<template>
  <TheHeader>
    <SelectInput
      class="the-header__item"
      v-if="genres && isShowFilter"
      :options="genres"
      v-model="filterGenreValue"
      :clearable="true"
      :placeholder="$t('global.selectGenre')"
    />
    <SelectInput
        class="the-header__item"
        v-if="authors && isShowFilter"
        :options="authors"
        v-model="filterAuthorValue"
        :clearable="true"
        :placeholder="$t('global.selectAuthor')"
    />
    <div class="the-header__item custom-button" v-if="isShowFilter" @click="createBook"> {{ $t("global.createBook") }}</div>
  </TheHeader>
  <div class="books-feed">
    <div
      v-for="book of filterBook"
      :key="book._id"
    >
      <BookCard :book="book"/>
    </div>
  </div>

</template>

<script>
import { mapState} from "vuex";
import BookCard from "@/components/book/BookCard.vue";
import TheHeader from "@/components/theHeader/TheHeader";
import SelectInput from "@/components/ui/SelectInput";
import {eventBus} from "@/plugins/eventBus";


export default {
  name: 'BooksFeed',
  components: {
    SelectInput,
    TheHeader,
    BookCard
  },
  data () {
    return {
      filterGenreValue: null,
      filterAuthorValue: null
    }
  },
  props: {
    books: {
      type: Array,
      required: true
    },
    isShowFilter: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    createBook() {
      eventBus.$emit("openCreateBookModal", true);
    }
  },
  computed: {
    ...mapState(['genres', 'authors', 'books']),

    filterBook() {
      let filteredBooks = this.books

      if (this.filterGenreValue) {
        filteredBooks = filteredBooks.filter((item)=>{
          if (item.genreId === this.filterGenreValue._id) return item
        })
      }

      if (this.filterAuthorValue) {
        filteredBooks = filteredBooks.filter((item)=>{
          if (item.authorId === this.filterAuthorValue._id) return item
        })
      }

      return filteredBooks
    }
  },
  mounted() {

  }
}
</script>
