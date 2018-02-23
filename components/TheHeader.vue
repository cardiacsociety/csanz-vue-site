<template>
  <div>
    <NavBar />
  </div>
</template>

<script>

  import NavBar from '~/components/NavBar'

  export default {
    name: "header",

    components: {
      NavBar,
    }
  }

</script>

<style scoped>
  img {
    width: 280px;
    margin-bottom: 0;
  }

</style>
