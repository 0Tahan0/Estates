import { root } from "postcss";
import { createStore } from "vuex";

// Create a new store instance.
const darkModeKey = "MasaratDarkMode";
const langKey = "MasaratLang";
const store = createStore({
  state: {
    root:document.querySelector(':root'),
    isDarkMode: JSON.parse(localStorage.getItem(darkModeKey)) || false,
    lang:
      JSON.parse(localStorage.getItem(langKey)) ||
      navigator.language.split("-")[0] ||
      "en",
  },
  mutations: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem(darkModeKey, JSON.stringify(state.isDarkMode));
    },
    toggleLang(state) {
      switch (state.lang) {
        case "ar":
          state.lang = "en";
          state.root.setAttribute('dir','rtl')
          break;
          case "en":
              state.lang = "ar";
              state.root.setAttribute('dir','ltr')
              break;
              default:
                  state.lang = "en";
                  state.root.setAttribute('dir','ltr')
          break;
      }
        
      localStorage.setItem(langKey, JSON.stringify(state.lang));
    },
  },
  actions: {
    toggleDarkMode({ commit }) {
      commit("toggleDarkMode");
    },
    toggleLang({ commit }) {
      commit("toggleLang");
    },
  },
  getters: {
    isDarkMode: (state) => state.isDarkMode,
    lang: (state) => state.lang,
  },
});

export default store;
