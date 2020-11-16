import Vue from "vue";
import VueRouter from "vue-router";
import ProductList from "./components/ProductsList";
import Product from "./components/Product";
import Cart from "./components/Cart";
import E404 from "./components/E404";
import { store } from "./store";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: { name: "products" }
  },
  {
    name: "products",
    path: "/products",
    component: ProductList
  },
  {
    path: "/products/:id",
    component: Product
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "*",
    component: E404
  }
];

export const router = new VueRouter({
  routes,
  mode: "history"
});
