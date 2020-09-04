import "./scss/style.scss";

window.Vue = require("vue/dist/vue.js");
import Vuelidate from "vuelidate";
import VueSweetalert2 from "vue-sweetalert2";

Vue.use(VueSweetalert2);
Vue.use(Vuelidate);
Vue.component(
  "form-validate",
  require("./components/vue-form-validate.vue").default
);

const app = new Vue({
  el: "#app",
});
