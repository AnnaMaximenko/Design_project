<template>
  <Header />
  <Project />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Project from "@/components/Project.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
    Project,
  },
};
</script>

<style lang="scss" scoped></style>
