<template>
  <Header />
  <ArticleAndNews />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import ArticleAndNews from "@/components/ArticleAndNews.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    ArticleAndNews,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
