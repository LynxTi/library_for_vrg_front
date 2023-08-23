<template>
  <nav class="nav-menu">
    <div class="nav-menu__list">
      <router-link :to="{name: 'Home'}" class="nav-menu__list-item">
        {{$t('global.books')}}
      </router-link>
      <router-link :to="{name: 'AuthorsPage'}" class="nav-menu__list-item">
        {{$t('global.authors')}}
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavMenu"

}
</script>

