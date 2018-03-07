<template>
  <div class="tabs">
    <ul>
      <nuxt-link tag="li" to="/about/history" activeClass="is-active"><a>History</a></nuxt-link>
      <nuxt-link tag="li" to="/about/constitution" activeClass="is-active"><a>Constitution</a></nuxt-link>
      <nuxt-link tag="li" to="/about/board" activeClass="is-active"><a>Board</a></nuxt-link>
      <nuxt-link tag="li" to="/about/councils" activeClass="is-active"><a>Councils</a></nuxt-link>
      <nuxt-link tag="li" to="/about/committees" activeClass="is-active"><a>Committees</a></nuxt-link>
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
