<template>
  <Header />
  <IndexHtml />
  <Footer />
  <Header />
  <ArticleAndNews />
  <Header />
  <BlogDetails />
  <Footer />
  <Header />
  <Project />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import IndexHtml from "./components/IndexHtml.vue";
import Footer from "./components/Footer.vue";
import ArticleAndNews from "./components/ArticleAndNews.vue";
import BlogDetails from "./components/BlogDetails.vue";
import Project from "./components/Project.vue";

export default {
  components: {
    Header,
    IndexHtml,
    Footer,
    ArticleAndNews,
    BlogDetails,
    Project,
  },
};
</script>

<style lang="scss"></style>
