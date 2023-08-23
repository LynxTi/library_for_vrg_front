<template>
  <div class="book-form">
    <div class="book-form__title text-bold"> {{$t('global.edited_author')}}</div>
    <input type="text" v-model="name" class="ui-input" :placeholder="$t('global.nameAuthor')"/>

    <button class="custom-button" @click="edit" :disabled="disabledBtn">{{ $t("global.save") }}</button>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {eventBus} from "@/plugins/eventBus";

export default {
  name: "EditAuthorForm",
  components: {
  },
  data() {
    return {
      name: '',
    }
  },
  props: {
    author: {
      type: Object,
      required: true
    }
  },
  created() {
    this.name = this.author.name
  },
  computed: {
    disabledBtn() {
      if ((!this.name) || (this.name === this.author.name)) return true

      return false
    }
  },
  methods: {
    ...mapActions(['editAuthor']),

    async edit() {
      this.editAuthor({_id: this.author._id, name: this.name})

      await this.onCloseModal()
    },

    async onCloseModal () {
      this.name = '';
      eventBus.$emit("closeAuthorBookModal", true);
    }
  }
}
</script>