<template>

  <div class="book-form">
    <div class="book-form__title text-bold"> {{ $t("global.createBook") }}</div>
    <input type="text" v-model="name" class="ui-input" :placeholder="$t('global.nameAuthor')"/>
    <button class="custom-button" @click="create" :disabled="disabledBtn">{{$t('global.add_author')}}</button>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {eventBus} from "@/plugins/eventBus";

export default {
  name: "CreateAuthorForm",
  components: {
  },
  data() {
    return {
      name: '',
    }
  },
  computed: {
    disabledBtn() {
      if (this.name) return false

      return true
    }
  },
  methods: {
    ...mapActions(['createAuthor']),

    async create() {
      if ( this.name) {
        this.createAuthor({name: this.name} )
      }
      await this.onCloseModal()
    },

    async onCloseModal () {
      this.name = '';
      eventBus.$emit("closeCreateAuthorModal", true);
    }
  }
}
</script>


