<template>
  <Header />
  <IndexHtml />
  <Footer />
  <Header />
  <ArticleAndNews />
  <Header />
  <BlogDetails />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import IndexHtml from "./components/IndexHtml.vue";
import Footer from "./components/Footer.vue";
import ArticleAndNews from "./components/ArticleAndNews.vue";
import BlogDetails from "./components/BlogDetails.vue";

export default {
  components: { Header, IndexHtml, Footer, ArticleAndNews, BlogDetails },
};
</script>

<style lang="scss"></style>
