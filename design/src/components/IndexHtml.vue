<template>
  <section class="section-1 center">
    <div class="section-1__wrapper">
      <h2 class="section-1__title">
        Let Your Home<br />
        Be&nbsp;Unique
      </h2>
      <p class="section-1__text">
        There are many variations of&nbsp; the passages of&nbsp;<br />lorem
        Ipsum fromavailable, majority.
      </p>
      <router-link
        v-for="link in Arr"
        :key="link.id"
        :to="link.url"
        class="section-1__button"
      >
        <p class="section-1__btn-text">Get Started</p>
        <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
            stroke="#CDA274"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
  </section>
  <section class="section-2 center">
    <h2 class="section-2__title">Follow Our Projects</h2>
    <p class="section-2__text">
      It&nbsp;is&nbsp;a&nbsp;long established fact that a&nbsp;reader will
      be&nbsp;distracted by&nbsp;the of&nbsp;readable <br />content of&nbsp;page
      lookings at&nbsp;its layouts points.
    </p>
    <ul class="section-2__container">
      <li
        class="section-2__cart"
        v-for="(item, index) in ourProjects"
        :key="index"
      >
        <router-link :to="item.url">
          <img class="section-2__img" :src="item.img" alt="kitchen" />
          <div class="section-2__wrapper">
            <div class="section-2__container-cart">
              <h4 class="section-2__subtitle">{{ item.title }}</h4>
              <p class="section-2__text-cart">Decor&nbsp;/ Artchitecture</p>
            </div>
            <svg
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
              <path
                d="M32 44L40 35L32 26"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg></div
        ></router-link>
      </li>
    </ul>
  </section>
  <aside class="counter center">
    <div class="counter__item counter__item_line">
      <p class="counter__number">12</p>
      <p class="counter__text">Years Of&nbsp;Experiance</p>
    </div>
    <div class="counter__item counter__item_line">
      <p class="counter__number">85</p>
      <p class="counter__text">Success Project</p>
    </div>
    <div class="counter__item counter__item_line">
      <p class="counter__number">15</p>
      <p class="counter__text">Active Project</p>
    </div>
    <div class="counter__item">
      <p class="counter__number">95</p>
      <p class="counter__text">Happy CUstomers</p>
    </div>
  </aside>
  <section class="articleAndNews center">
    <h2 class="articleAndNews__title">Articles &amp;&nbsp;News</h2>
    <p class="articleAndNews__text">
      It&nbsp;is&nbsp;a&nbsp;long established fact that a&nbsp;reader will
      be&nbsp;distracted by&nbsp;the of&nbsp;readable content <br />
      of&nbsp;a&nbsp;page when lookings at&nbsp;its layouts the points
      of&nbsp;using.
    </p>
    <ul class="articleAndNews__container" id="app">
      <li
        class="articleAndNews__cart"
        v-for="(cart, index) in dataArr"
        :key="index"
      >
        <img :src="cart.img" alt="kitchen" class="articleAndNews__img" />
        <h4 class="articleAndNews__title-cart">{{ cart.title }}</h4>
        <div class="articleAndNews__wrap">
          <p class="articleAndNews__text-cart">{{ cart.text }}</p>

          <router-link :to="cart.url" class="articleAndNews__link">
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
          </router-link>
        </div>
        <div class="articleAndNews__extra-content">
          <p class="articleAndNews__extra-text">{{ cart.extra_text }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dataArr: [
        {
          img: require("@/assets/img/articles_img1.jpg"),
          title: "Let’s Get Solution For Building Construction Work",
          text: "26 December,2022",
          extra_text: "Kitchan Design",
          url: "/article_and_news",
        },
        {
          img: require("@/assets/img/articles_img2.png"),
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          text: "22 December,2022",
          extra_text: "Living Design",
          url: "/article_and_news",
        },
        {
          img: require("@/assets/img/articles_img3.png"),
          title: "Best For Any Office & Business Interior Solutions",
          text: "25 December,2022",
          extra_text: "Interior Design",
          url: "/article_and_news",
        },
      ],
      ourProjects: [
        {
          id: 0,
          title: "Modern Kitchan",
          img: require("@/assets/img/section2_img1.jpg"),
          url: "/project",
        },
        {
          id: 1,
          title: "Modern Kitchan",
          img: require("@/assets/img/section2_img2.jpg"),
          url: "/project",
        },
        {
          id: 2,
          title: "Modern Kitchan",
          img: require("@/assets/img/section2_img3.jpg"),
          url: "/project",
        },
        {
          id: 3,
          title: "Modern Kitchan",
          img: require("@/assets/img/section2_img4.jpg"),
          url: "/project",
        },
      ],
      Arr: [{ id: 0, name: "Project", url: "/project" }],
    };
  },
};
</script>

<style lang="scss" scoped></style>
