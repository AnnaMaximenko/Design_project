<template>
  <section class="banner banner__article center">
    <div class="banner__wrapper">
      <h3 class="banner__title">Our Project</h3>
      <p class="banner__text">Home / Project</p>
    </div>
  </section>
  <nav class="categories center">
    <div class="categories__wrapper">
      <as
        href="#"
        v-for="button in buttons"
        :key="button.id"
        @click="changeArticle(button.id)"
        :class="[
          'categories__name',
          button.id === buttonIsActive ? 'categories__name_active' : false,
        ]"
      >
        {{ button.title }}
      </as>
    </div>
  </nav>
  <div class="project center">
    <ul class="project__ul">
      <li
        class="project__li"
        v-for="(article, index) in activeArticle"
        :key="index"
      >
        <router-link :to="article.url" class="project-link">
          <img :src="article.img" :alt="article.title" class="project__img" />
          <div class="project__block">
            <div class="project__wrapper">
              <h5 class="project__title">{{ article.title }}</h5>
              <div class="project__wrapper-link">
                <a href="#" class="project__a">{{ article.linkLeft }}</a
                ><a href="#" class="project__a">{{ article.linkRight }}</a>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
            >
              <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
              <path
                d="M32 44L40 35L32 26"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </router-link>

        <label class="project__button_star">
          <input type="checkbox" id="active" />
          <svg
            width="36"
            height="35"
            viewBox="0 0 36 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="project__star"
          >
            >
            <g filter="url(#filter0_d_993_156)">
              <path
                id="notActive"
                d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
                fill="none"
                stroke="#4d5053"
                stroke-width="0.5"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_993_156"
                x="0.186424"
                y="0.431396"
                width="35.6271"
                height="34.3619"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_993_156"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_993_156"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </label>
      </li>
    </ul>
  </div>

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
      showBtn: false,

      buttons: [
        { id: "bathroom", title: "Bathroom" },
        { id: "bedroom", title: "Bed Room" },
        { id: "kitchan", title: "Kitchan" },
        { id: "livingArea", title: "Living Area" },
      ],

      listOfArticles: [
        {
          id: "bedroom",
          title: "Minimal Bedroom",
          img: require("@/assets/img/project_badroom-1.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "bedroom",
          title: "Classic Minimal Bedroom",
          img: require("@/assets/img/project_badroom-2.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "bedroom",
          title: "Classic Minimal Bedroom",
          img: require("@/assets/img/project_badroom-3.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "bedroom",
          title: "Minimal Bedroom table",
          img: require("@/assets/img/project_badroom-4.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "bedroom",
          title: "Modern Medroom",
          img: require("@/assets/img/project_badroom-5.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "bedroom",
          title: "Minimal Bedroom",
          img: require("@/assets/img/project_badroom-6.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "bedroom",
          title: "System Table",
          img: require("@/assets/img/project_badroom-7.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "bedroom",
          title: "Modern Medroom",
          img: require("@/assets/img/project_badroom-8.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },

        {
          id: "bathroom",
          img: require("@/assets/img/project_bathroom-1.jpg"),
          title: "Modern Bathroom",
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "bathroom",
          title: "Classic Minimal Bathroom",
          img: require("@/assets/img/project_bathroom-2.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "bathroom",
          title: "Classic Minimal Bathroom",
          img: require("@/assets/img/project_bathroom-4.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "bathroom",
          title: "Minimal Bathroom table",
          img: require("@/assets/img/project_bathroom-3.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "bathroom",
          img: require("@/assets/img/project_bathroom-2.jpg"),
          title: "Modern Bathroom",
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "bathroom",
          title: "Classic Minimal Bathroom",
          img: require("@/assets/img/project_bathroom-4.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "bathroom",
          title: "Classic Minimal Bathroom",
          img: require("@/assets/img/project_bathroom-3.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "bathroom",
          title: "Minimal Bathroom table",
          img: require("@/assets/img/project_bathroom-1.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },

        {
          id: "kitchan",
          title: "Minimal Kitchan table",
          img: require("@/assets/img/project_kitchan-1.jpeg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "kitchan",
          title: "Classic Kitchan",
          img: require("@/assets/img/project_kitchan-3.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "kitchan",
          title: "Minimal Kitchan table",
          img: require("@/assets/img/project_kitchan-2.jpeg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "kitchan",
          title: "Minimal Kitchan",
          img: require("@/assets/img/project_kitchan-4.jpeg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "kitchan",
          title: "Minimal Kitchan table",
          img: require("@/assets/img/project_kitchan-3.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "kitchan",
          title: "Kitchan",
          img: require("@/assets/img/project_kitchan-2.jpeg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },

        {
          id: "kitchan",
          title: "Minimal Kitchan",
          img: require("@/assets/img/project_kitchan-4.jpeg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "kitchan",
          title: "Classic Minimal Kitchan",
          img: require("@/assets/img/project_kitchan-1.jpeg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },

        {
          id: "livingArea",
          title: "Classic Minimal Living Area",
          img: require("@/assets/img/project_leave-1.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "livingArea",
          title: "Classic Living Area",
          img: require("@/assets/img/project_leave-3.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "livingArea",
          title: "Classic Minimal Living Area",
          img: require("@/assets/img/project_leave-2.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "livingArea",
          title: "Living Area",
          img: require("@/assets/img/project_leave-4.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "livingArea",
          title: "Classic Living Area",
          img: require("@/assets/img/project_leave-3.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "livingArea",
          title: "Classic Minimal Living Area",
          img: require("@/assets/img/project_leave-1.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "livingArea",
          title: "Classic Living Area",
          img: require("@/assets/img/project_leave-4.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "livingArea",
          title: "Classic Minimal Living Area",
          img: require("@/assets/img/project_leave-2.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
      ],

      activeArticle: [
        {
          id: "bedroom",
          title: "Minimal Bedroom",
          img: require("@/assets/img/project_badroom-1.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "bedroom",
          title: "Classic Minimal Bedroom",
          img: require("@/assets/img/project_badroom-2.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "bedroom",
          title: "Classic Minimal Bedroom",
          img: require("@/assets/img/project_badroom-3.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "bedroom",
          title: "Minimal Bedroom table",
          img: require("@/assets/img/project_badroom-4.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "bedroom",
          title: "Modern Medroom",
          img: require("@/assets/img/project_badroom-5.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "bedroom",
          title: "Minimal Bedroom",
          img: require("@/assets/img/project_badroom-6.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "bedroom",
          title: "System Table",
          img: require("@/assets/img/project_badroom-7.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
        {
          id: "bedroom",
          title: "Modern Medroom",
          img: require("@/assets/img/project_badroom-8.jpg"),
          linkLeft: "Decor",
          linkRight: "Artchitecture",
          url: "/project_details",
        },
      ],
      buttonIsActive: "bedroom",

      currentButton: [{ id: "bedroom", title: "bedroom" }],
    };
  },
  methods: {
    changeArticle(id) {
      const buttonId = id;
      this.activeArticle = [];

      this.listOfArticles.forEach((article) => {
        if (buttonId === article.id) {
          this.buttonIsActive = id;
          this.activeArticle.push(article);
        }
      });
      return this.activeArticle;
    },

    toggleBtn() {
      this.showBtn = !this.showBtn;
    },
  },
};
</script>

<style lang="scss" scoped></style>
