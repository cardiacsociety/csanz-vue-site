<template>
  <div>
    <PageHeader
      title="About"
      subtitle="General Information and Resources"
    />
    <SubNav/>
    <PageSection>
      <p>
        The Cardiac Society of Australia and New Zealand is the professional body for cardiologists and those
        working
        in the area of cardiology including researchers, scientists, cardiovascular nurses, allied health
        professionals
        and other health care workers.
      </p>

      <p>
        The Society is the chief advocacy group for the profession and aims to facilitate training, professional
        development and improve medical practice to enhance the quality of care for patients with cardiovascular
        disease.
      </p>
    </PageSection>
  </div>
</template>

<script>
  import SubNav from "~/components/SubNavAbout"

  export default {
    name: "about-index",

    components: {
      SubNav,
    },

  }
</script>

<style scoped>

</style>
