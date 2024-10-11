import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas, far, fab);
const app = createApp(App);
import Logo from "./layout/Logo.vue";
app.component("Logo", Logo);
import NavBar from "./layout/Nav/navBar.vue";
app.component("NavBar", NavBar);
import Container from "./components/UI/Container.vue";
app.component("Container", Container);
import Carousel from "./components/UI/Carousel.vue";
app.component("Carousel", Carousel);
import Swiper from "./components/UI/Swiper.vue";
app.component("Swiper", Swiper);
import ItemCard from "./components/ItemCard.vue";
app.component("ItemCard", ItemCard);
import ImageBox from "./components/ImageBox.vue";
app.component("ImageBox", ImageBox);
import Title from "./components/pagesComponents/Title.vue";
app.component("Title", Title);
import EstateCard from "./components/estateCard.vue";
app.component("EstateCard", EstateCard);

import Section from "./components/pagesComponents/Section.vue";
app.component("Section", Section);

import Footer from "./layout/Footer/Footer.vue";
app.component("Footer", Footer);

import Field from "./components/UI/Field.vue";
app.component("Field", Field);
import Select from "./components/UI/Select.vue";
app.component("Select", Select);
import Button from "./components/UI/Button.vue";
app.component("Button", Button);
import IconBtn from "./components/UI/IconBtn.vue";
app.component("IconBtn", IconBtn);

import PageSplitter from "./components/pagesComponents/PageSplitter.vue";
app.component("PageSplitter", PageSplitter);
import Article from "./components/pagesComponents/Article.vue";
app.component("Article", Article);
import ArticleCard from "./components/ArticleCard.vue";
app.component("ArticleCard", ArticleCard);
import AccordionsGroup from "./components/UI/AccordionsGroup.vue";
app.component("AccordionsGroup", AccordionsGroup);
import Wrapper from "./components/Wrapper.vue";
app.component("Wrapper", Wrapper);
import WrapperEl from "./components/WrapperEl.vue";
app.component("WrapperEl", WrapperEl);
import i18n from "./i18n/i18n.js";

app.component("Icon", FontAwesomeIcon);
app.use(router);
app.use(store);
app.use(i18n);
app.mount("#app");
