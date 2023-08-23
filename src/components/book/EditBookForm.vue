<template>
  <div class="book-form">
    <div class="book-form__title text-bold"> {{ $t("global.edited_book") }}</div>
    <input type="text" v-model="name" class="ui-input" placeholder="$t('global.name_book')"/>
    <SelectInput
        v-if="genres"
        :options="genres"
        v-model="genre"
        :placeholder="$t('global.selectGenre')"
    />
    <SelectInput
        v-if="authors"
        :options="authors"
        v-model="author"
        :placeholder="$t('global.selectAuthor')"
    />

    <button class="custom-button" @click="edit" :disabled="disabledBtn">{{ $t("global.save") }}</button>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import SelectInput from "@/components/ui/SelectInput.vue";
import {eventBus} from "@/plugins/eventBus";

export default {
  name: "EditBookForm",
  components: {
    SelectInput,
  },
  data() {
    return {
      name: '',
      author: null,
      genre: null,
      currentBooks: []
    }
  },
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  created() {
    this.name = this.book.name
    this.genre = {name: this.book.genreName, _id: this.book.genreId}
    this.author = {name: this.book.authorName, _id: this.book.authorId}
  },
  computed: {
    ...mapState(['genres', 'authors']),
    disabledBtn() {
      if ((!this.genre || !this.author || !this.name) ||
          (this.name === this.book.name &&
              this.genre._id === this.book.genreId &&
              this.author._id === this.book.authorId
          )) return true

      return false
    }
  },
  methods: {
    ...mapActions(['editBook','getBooks']),

    async edit() {
      if (this.genre && this.author && this.name) {
        this.editBook({_id: this.book._id, name: this.name, authorId: this.author._id, genreId: this.genre._id} )
      }
      await this.onCloseModal()
    },

    async onCloseModal () {
      await this.getBooks()
      this.name = '';
      this.author = null;
      this.genre = null;
      eventBus.$emit("closeEditBookModal", true);
    }
  }
}
</script>