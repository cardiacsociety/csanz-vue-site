<template>
  <div class="tabs">
    <ul>
      <nuxt-link tag="li" to="/about/people" activeClass="is-active"><a>People</a></nuxt-link>
      <nuxt-link tag="li" to="/about/constitution" activeClass="is-active"><a>Constitution</a></nuxt-link>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "sub-nav-about"
    }
</script>

<style scoped>

</style>
