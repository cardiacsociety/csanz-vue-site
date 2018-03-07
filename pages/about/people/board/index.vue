<template>
  <div>
    <PageHeader
      title="Board Members"
      subtitle=""
      :subnav="$store.state.nav.about"
    />
    <PageSection>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores hic in inventore laboriosam quo. Ad
        assumenda maiores optio repellendus similique tempora voluptate! Harum minus molestiae nam, neque
        ratione repudiandae velit?</p>

      <div class="columns is-multiline">

        <div class="column is-3" v-for="_ in 10">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3 is-marginless">
                <img src="~/assets/images/Mark_Webster.jpg">
              </figure>
            </div>
            <div class="card-content">
              <h4 class="title is-4">Prof&nbsp;Mark&nbsp;Webster</h4>
              <h5 class="subtitle is-6">President</h5>
            </div>
          </div>
        </div>
      </div>

      <h3 class="title is-3">CSANZ Board</h3>
      <h3 class="title is-3">CSANZ Board</h3>
      <h3 class="title is-3">CSANZ Board</h3>
      <h3 class="title is-3">CSANZ Board</h3>
      <h3 class="title is-3">CSANZ Board</h3>
      <h3 class="title is-3">CSANZ Board</h3>
      <h3 class="title is-3">CSANZ Board</h3>

    </PageSection>
  </div>
</template>

<script>
</script>

<style scoped>
</style>
