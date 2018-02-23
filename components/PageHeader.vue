<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <p class="title">
              {{ title }}
            </p>
            <p class="subtitle">
              {{ subtitle }}
            </p>
            <p>
              {{ content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "PageHeader",

    props: {
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: false,
      },
      content: {
        type: String,
        required: false,
      },
    }
  }
</script>

<style scoped>

</style>
