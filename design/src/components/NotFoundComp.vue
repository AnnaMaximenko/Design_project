<template>
  <section class="not-found center">
    <div class="not-found__left">
      <h1 class="not-found__title">404</h1>
      <p class="not-found__text">
        We are sorry, but the page you <br />
        requested was not found
      </p>
      <router-link
        v-for="link in Arr"
        :key="link.id"
        :to="link.url"
        class="not-found__button"
      >
        <p class="not-found__button-text">Back To Home</p>
        <svg
          class="not-found__svg"
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
            stroke="#CDA274"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
    <div class="not-found__right"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      Arr: [
        {
          id: 0,
          url: "/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
