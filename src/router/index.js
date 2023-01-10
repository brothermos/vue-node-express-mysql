import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
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
      path: "/user/edit/:userId",
      name: "EditUser",
      component: EditUser,
   },
   {
      path: "/user/view/:userId",
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
