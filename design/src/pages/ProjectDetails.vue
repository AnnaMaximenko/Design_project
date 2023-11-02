<template>
  <Header />
  <ProjectDetails />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import ProjectDetails from "@/components/ProjectDetails.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
    ProjectDetails,
  },
};
</script>

<style lang="scss" scoped></style>
