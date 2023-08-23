<template>
  <div class="book-form">
    <div class="book-form__title text-bold"> {{ $t("global.create_author") }}</div>
    <input type="text" v-model="name" class="ui-input" :placeholder="$t('global.name_book')"/>
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

    <button class="custom-button" @click="create" :disabled="disabledBtn">{{ $t("global.createBook") }}</button>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import SelectInput from "@/components/ui/SelectInput.vue";
import {eventBus} from "@/plugins/eventBus";

export default {
  name: "CreateBookForm",
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
  computed: {
    ...mapState(['genres', 'authors']),
    disabledBtn() {
      if (this.genre && this.author && this.name) return false

      return true
    }
  },
  methods: {
    ...mapActions(['createBook','getBooks']),

    async create() {
      if (this.genre && this.author && this.name) {
        this.createBook({name: this.name, authorId: this.author._id, genreId: this.genre._id} )
      }
      await this.onCloseModal()
    },

    async onCloseModal () {
      await this.getBooks()
      this.name = '';
      this.author = null;
      this.genre = null;
      eventBus.$emit("closeCreateBookModal", true);
    }
  }
}
</script>


