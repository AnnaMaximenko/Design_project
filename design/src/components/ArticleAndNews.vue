<template>
  <section class="banner banner__article center">
    <div class="banner__wrapper">
      <h3 class="banner__title">Articles & News</h3>
      <p class="banner__text">Home / Blog</p>
    </div>
  </section>
  <section class="section-post center">
    <h3 class="section-post__title">Latest Post</h3>
    <a class="section-post__container" href="#">
      <img src="@/assets/img/article&news_post.png" alt="" />
      <div class="section-post__wrapper">
        <h3 class="section-post__subtitle">
          Low Cost Latest Invented Interior <br />
          Designing Ideas
        </h3>
        <p class="section-post__text">
          Lorem ipsum dolor sit amet, adipiscing Aliquam <br />eu&nbsp;sem vitae
          turpis dignissim maximus.posuere <br />
          in.Contrary to&nbsp;popular belief.
        </p>
        <p class="section-post__text">
          Lorem Ipsum is&nbsp;not simply random text. It&nbsp;has <br />
          roots in&nbsp;a&nbsp;piece of&nbsp;classica.
        </p>
        <div class="section-post__box">
          <p class="section-post__date">26 December,2022</p>
          <svg
            width="52"
            height="53"
            viewBox="0 0 52 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
            <path
              d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </a>
  </section>
  <section id="app" class="articleAndNews center">
    <h2 class="articleAndNews__title-left">Articles & News</h2>
    <ul class="articleAndNews__container">
      <li
        class="articleAndNews__cart"
        v-for="(cart, index) in data"
        :key="index"
      >
        <img :src="cart.img" alt="kitchen" class="articleAndNews__img" />
        <h4 class="articleAndNews__title-cart">{{ cart.title }}</h4>
        <div class="articleAndNews__wrap">
          <p class="articleAndNews__text-cart">{{ cart.text }}</p>
          <a href="#" class="articleAndNews__link">
            <svg
              class="articleAndNews__svg"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="35" cy="35.0001" r="35" fill="#F4F0EC" />
              <path
                d="M32 44.0001L40 35.0001L32 26.0001"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <div class="articleAndNews__extra-content">
          <p class="articleAndNews__extra-text">{{ cart.extra_text }}</p>
        </div>
      </li>
    </ul>
  </section>
  <nav class="pages">
    <a href="#"><li class="pages__page">01</li></a>
    <a href="#"> <li class="pages__page">02</li></a>
    <a href="#"> <li class="pages__page">03</li></a>
    <a href="#"
      ><li class="pages__page">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
        >
          <path
            d="M1.55714 15L7.5 8.31429L1.55714 1.62857"
            stroke="#292F36"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg></li
    ></a>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          img: require("@/assets/img/articles_img1.jpg"),
          title: "Let’s Get Solution For Building Construction Work",
          text: "26 December,2022",
          extra_text: "Kitchan Design",
        },
        {
          img: require("@/assets/img/articles_img2.png"),
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          text: "22 December,2022",
          extra_text: "Living Design",
        },
        {
          img: require("@/assets/img/articles_img3.png"),
          title: "Best For Any Office & Business Interior Solutions",
          text: "25 December,2022",
          extra_text: "Interior Design",
        },
        {
          img: require("@/assets/img/articles_img4.jpg"),
          title: "Let’s Get Solution For Building Construction Work",
          text: "26 December,2022",
          extra_text: "Kitchan Design",
        },
        {
          img: require("@/assets/img/articles_img5.jpg"),
          title: "Low Cost Latest Invented Interior Designing  Ideas.",
          text: "22 December,2022",
          extra_text: "Living Design",
        },
        {
          img: require("@/assets/img/articles_img6.jpg"),
          title: "Best For Any Office & Business Interior Solutions",
          text: "25 December,2022",
          extra_text: "Interior Design",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
