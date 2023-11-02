import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage";
import BlogDetails from "@/pages/BlogDetails";
import Project from "@/pages/Project";
import ArticleAndNews from "@/pages/ArticleAndNews";
import ProjectDetails from "@/pages/ProjectDetails";
import NotFound from "@/pages/NotFound";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/blog_details",
    name: "blog_details",
    component: BlogDetails,
  },
  {
    path: "/project",
    name: "project",
    component: Project,
  },
  {
    path: "/article_and_news",
    name: "ArticleAndNews",
    component: ArticleAndNews,
  },
  {
    path: "/project_details",
    name: "project_details",
    component: ProjectDetails,
  },
  {
    path: "/:CatchAll(.*)",
    name: "404",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
