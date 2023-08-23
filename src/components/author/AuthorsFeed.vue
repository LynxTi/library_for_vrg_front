<template>
  <TheHeader>
    <input class="ui-input" v-model="filterName"/>
    <div class="the-header__item custom-button" @click="createAuthors"> Додати автора</div>
  </TheHeader>
  <div class="authors-feed" v-if="filterAuthors">
    <AuthorCard
        v-for="author in filterAuthors"
        :author="author"
        :key="author._id"
    />
  </div>

</template>

<script>
import TheHeader from "@/components/theHeader/TheHeader.vue";
import AuthorCard from "@/components/author/AuthorCard.vue";
import {eventBus} from "@/plugins/eventBus";

export default {
  name: 'AuthorsFeed',
  components: { AuthorCard, TheHeader},
  data() {
    return {
      filterName: ''
    }
  },
  props: {
    authors: {
      type: Array,
      default: null
    }
  },
  computed: {
    filterAuthors () {
      let filteredAuthors = this.authors

      if (this.filterName) {
        filteredAuthors = filteredAuthors.filter((item)=> {
          if(item.name.includes(this.filterName)) return item
        })
      }
      if (filteredAuthors) return filteredAuthors
      return []

    }
  },
  methods: {
    createAuthors() {
      eventBus.$emit('openCreateAuthorModal', true)
    }
  }

}
</script>

<style scoped>

</style>