<template>
  <div class="wrapper">
    <NavMenu/>
    <div class="content">
      <router-view/>
    </div>
  </div>

  <RemoveAuthModal/>
  <CreateAuthorModal/>
  <EditAuthorModal/>
  <CreateBookModal/>
  <EditBookModal/>
  <RemoveBookModal/>
</template>

<script>
import '@/assets/sass/index.sass'
import NavMenu from "@/components/navMenu/Navmenu";
import {mapActions} from "vuex";
import RemoveAuthModal from "@/components/author/modal/removeAuthorModal.vue";
import CreateAuthorModal from "@/components/author/modal/CreateAuthorModal.vue";
import EditAuthorModal from "@/components/author/modal/EditAuthorModal.vue";
import CreateBookModal from "@/components/book/CreateBookModal.vue";
import EditBookModal from "@/components/book/EditBookModal.vue";
import RemoveBookModal from "@/components/book/removeBookModal.vue";

export default {
  name: 'App',
  components: {
    RemoveBookModal,
    EditBookModal,
    CreateBookModal,
    EditAuthorModal,
    CreateAuthorModal,
    RemoveAuthModal,
    NavMenu,
  },
  created() {
    this.getGenres()
    this.getAuthors()
    this.getBooks()
  },
  methods: {
    ...mapActions(['getGenres', "getAuthors", "getBooks"])
  }

}
</script>

