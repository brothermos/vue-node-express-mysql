import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from '../views/AboutView.vue'
import UserProfile from "../views/UserProfile.vue";
import AddUser from "../views/AddUser.vue";
import EditUser from "../views/EditUser.vue";
import ViewUser from "../views/ViewUser.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
   {
      path: "/",
      name: "home",
      redirect: "/user",
      component: HomeView,
   },{
      path:"/about",
      name: "about",
      component: AboutView,
   },
   {
      path: "/user",
      name: "UserProfile",
      component: UserProfile,
   },
   {
      path: "/user/add",
      name: "AddUser",
      component: AddUser,
   },
   {
      path: "/user/edit/:id",
      name: "EditUser",
      component: EditUser,
   },
   {
      path: "/user/view/:id",
      name: "ViewUser",
      component: ViewUser,
   },
   {
      path: "/:pathMatch(.*)",
      name: "PageNotFound",
      component: PageNotFound,
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
