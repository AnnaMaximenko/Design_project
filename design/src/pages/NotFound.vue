<template>
  <Header />
  <NotFoundComp />
</template>

<script>
import Header from "@/components/Header.vue";
import NotFoundComp from "@/components/NotFoundComp.vue";

export default {
  components: {
    Header,
    NotFoundComp,
  },
};
</script>

<style lang="scss" scoped></style>
