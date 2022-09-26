// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

import BootstrapVue from "bootstrap-vue";

import { StripePlugin } from "@vue-stripe/vue-stripe";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const options = {
  pk:
    "pk_test_51Exxn9JDRNaTs6ZucHaZaDI5Zmde7ZWMGA6jpmGolR3kP1yahu5PLgY9hfIvlJIMbIbGZsHb6bFXjQKOWeRSZqip00Gt6mZjlX",
  testMode: true, // Boolean. To override the insecure host warning
  locale: "en"
};

Vue.use(StripePlugin, options);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
