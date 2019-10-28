import VueRouter, { Route } from "vue-router";

declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter; // 这表示this下有这个东西
    $route: Route;
    axios: any; // 不知道类型就定为 any 吧（偷懒）
    $urls: any;
    $Message: any;
  }
}