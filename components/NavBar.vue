<template>
  <nav class="navbar is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="~/assets/images/csanz_header_logo.png" alt="CSANZ">
        </a>
        <div class="navbar-burger burger" v-on:click="toggleMenu" :class="{'is-active': menuActive}">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div :class="{'navbar-menu': true, 'is-active': menuActive}" @click="menuActive = false">
        <div class="navbar-start">
          <nuxt-link to="/about" class="navbar-item" activeClass="is-active">About</nuxt-link>
          <nuxt-link to="/conferences" class="navbar-item" activeClass="is-active">Conferences</nuxt-link>
          <nuxt-link to="/contact" class="navbar-item" activeClass="is-active">Contact</nuxt-link>
          <nuxt-link to="/cpd" class="navbar-item" activeClass="is-active">CPD</nuxt-link>
          <nuxt-link to="/membership" class="navbar-item" activeClass="is-active">Membership</nuxt-link>
          <nuxt-link to="/resources" class="navbar-item" activeClass="is-active">Resources</nuxt-link>
          <div class="navbar-item has-dropdown is-hoverable" activeClass="is-active">
            <a class="navbar-link" href="/documentation/overview/start/">
              Docs
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="/documentation/overview/start/">
                Overview
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                Modifiers
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                Columns
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                Layout
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                Form
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                Elements
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/components/breadcrumb/">
                Components
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          end
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

  export default {

    data() {
      return {
        menuActive: false
      }
    },

    methods: {
      toggleMenu() {
        console.log(this.menuActive)
        this.menuActive = !this.menuActive
        console.log(this.menuActive)
      }
    }

  }
</script>

<style scoped>

</style>
