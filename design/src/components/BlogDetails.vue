<template>
  <section class="banner__details center"></section>
  <article id="app" class="article center">
    <ul class="article__ul">
      <li
        class="article__list"
        v-for="article in activeArticle"
        :key="article.id"
      >
        <h2 class="article__title">{{ article.firstheading }}</h2>
        <img
          :src="article.imgBig"
          alt="design"
          class="article__img article__img-big"
        />
        <div class="article__inner">
          <p class="article__date">{{ article.date }}</p>
          <ul class="article__breadcrumps">
            <li class="article__breadcrump">
              <a href="#" class="article__link">Interior</a>
            </li>
            <li class="article__breadcrump">
              <a href="#" class="article__link">Home</a>
            </li>
            <li class="article__breadcrump">
              <a href="#" class="article__link">Decore</a>
            </li>
          </ul>
        </div>
        <p class="article__text">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many
          variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injecthumour, or randomised words
          which don't look even slightly believable.
        </p>
        <p class="article__text">
          Embarrassing hidden in the middle of text. All the Lorem Ipsum
          generators on the Internet tend to repeat predefined chunks as
          necessary.
        </p>
        <div class="article__block">
          <svg
            width="74"
            height="56"
            viewBox="0 0 74 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z"
              fill="#CDA274"
            />
          </svg>

          <p class="article__text_big">
            The details are not the details. They make the design.
          </p>
        </div>
        <h2 class="article__title">{{ article.secondheading }}</h2>
        <p class="article__text">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many
          variations of passages of Lorem Ipsum available, but the majority have
          suffered.
        </p>
        <ol class="article__ol">
          <li class="article__list_number">
            <p class="article__text">
              Contrary to popular belief.There are many variations of passages
              of Lorem Ipsum available, but the majority have suffered.
            </p>
          </li>
          <li class="article__list_number">
            <p class="article__text">
              Contrary to popular belief.There are many variations of passages
              of Lorem Ipsum available, but the majority have suffered.
            </p>
          </li>
          <li class="article__list_number">
            <p class="article__text">
              Contrary to popular belief.There are many variations of passages
              of Lorem Ipsum available, but the majority have suffered.
            </p>
          </li>
        </ol>
        <img
          :src="article.imgSmall"
          alt="design"
          class="article__img article__img_small"
        />

        <p class="article__text">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many
          variations of passages of Lorem Ipsum available, but the majority have
          suffered.
        </p>
      </li>
    </ul>

    <div class="article__button-box">
      <h4 class="article__button-title">Tags</h4>
      <div class="article__button-wrapper">
        <button
          v-for="button in buttons"
          :key="button.id"
          @click="changeArticle(button.id)"
          type="button"
          :class="[
            'article__button',
            button.id === buttonIsActive ? 'article__button_active' : false,
          ]"
        >
          {{ button.title }}
        </button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      activeArticle: [
        {
          id: "kitchen",
          firstheading: "Let’s Get Solution for Building Construction Work",
          date: "26 December,2022",
          secondheading: "Design sprints are great",
          imgBig: require("@/assets/img/tags_kitchen-1.jpg"),
          imgSmall: require("@/assets/img/tags_kitchen-2.jpg"),
        },
      ],
      currentButton: [{ id: "kitchen", title: "Kitchen" }],

      listOfArticles: [
        {
          id: "kitchen",
          firstheading: "Let’s Get Solution for Building Construction Work",
          date: "26 December,2022",
          secondheading: "Design sprints are great",
          imgBig: require("@/assets/img/tags_kitchen-1.jpg"),
          imgSmall: require("@/assets/img/tags_kitchen-2.jpg"),
        },
        {
          id: "bedroom",
          firstheading: "Elegant modern solutions for the bedroom",
          date: "24 December,2022",
          secondheading: "Our team is ready to act, let's discuss your project",
          imgBig: require("@/assets/img/img-blog/1.jpg"),
          imgSmall: require("@/assets/img/img-blog/2.jpg"),
        },
        {
          id: "building",
          firstheading:
            "Country houses in the loft style attract and attract the eye with their creativity",
          date: "24 December,2022",
          secondheading:
            "Loft - gives a feeling of freedom, which allows you to avoid strict boundaries, gives free rein to creativity and creativity.",
          imgBig:
            "https://design.pibig.info/uploads/posts/2023-04/thumbs/1680750893_design-pibig-info-p-originalnie-doma-dizain-vkontakte-57.jpg",
          imgSmall:
            "https://vm-stroy.pro/wp-content/uploads/2020/11/4-1024x597.jpg",
        },
        {
          id: "architecture",
          firstheading: "Spectacular building in deconstructivist style",
          date: "20 December,2022",
          secondheading:
            "Modern architecture is changing the appearance of megacities, creating a more prosperous living environment",
          imgBig:
            "https://media.admagazine.ru/photos/61b203c9ff3c94c5af356c10/16:9/w_2560%2Cc_limit/CAL_53_05_4470.jpeg",
          imgSmall:
            "https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/8/65/755506845115658.jpg",
        },
        {
          id: "kitchen_planing",
          firstheading:
            "Working with space, radius headsets and comfortable minimalism",
          date: "28 December,2022",
          secondheading: "How to create a fashionable kitchen interior design",
          imgBig: "https://idm-eterno.ru/wp-content/uploads/2022/08/banner.jpg",
          imgSmall:
            "https://idm-eterno.ru/wp-content/uploads/2022/08/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80-%D0%A4%D0%B0%D1%81%D0%B0%D0%B4%D1%8B-47-%D0%9A%D1%83%D1%85%D0%BD%D1%8F-%D1%81-ETM07-Latte.jpg",
        },
        {
          id: "bedroom_1",
          firstheading:
            "A bedroom with a dressing room is a practical solution",
          date: "30 December,2022",
          secondheading:
            "The bedroom furniture is decorated in a single color scheme, which makes it even more cozy",
          imgBig:
            "https://yanamebel.ru/files/thumbnail/rodos-649c44d773961-800x500.jpg",
          imgSmall:
            "https://www.stilkuhni.ru/upload/iblock/463/w4756cz54g9l75d0883iqozipfqygowu/688_6_Flitvud-seraya-lava_-Oniks-seryy_-FUROR-plus-moss_.jpg.webp",
        },
      ],

      buttons: [
        { id: "kitchen", title: "Kitchen" },
        { id: "bedroom", title: "Bedroom" },
        { id: "building", title: "Building" },
        { id: "architecture", title: "Architecture" },
        { id: "kitchen_planing", title: "Kitchen Planning" },
        { id: "bedroom_1", title: "Bedroom" },
      ],

      buttonIsActive: "kitchen",
    };
  },
  methods: {
    changeArticle(id) {
      const buttonId = id;
      this.listOfArticles.forEach((article) => {
        if (buttonId === article.id) {
          this.activeArticle = [];
          this.buttonIsActive = id;
          return this.activeArticle.push(article);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
