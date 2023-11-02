<template>
  <Header />
  <BlogDetails />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import BlogDetails from "@/components/BlogDetails.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
    BlogDetails,
  },
};
</script>

<style lang="scss" scoped></style>
