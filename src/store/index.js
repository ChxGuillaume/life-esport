import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
    key: 'life-esport-app',
    storage: window.localStorage
});

export default new Vuex.Store({
    state: {
        selectedLang: 'https://cdn.discordapp.com/attachments/686733304455495809/686769004530237540/Fr.png',
    },
    mutations: {
        changeLang(state, lang) {
            state.selectedLang = lang;
        },
    },
    actions: {},
    modules: {},
    plugins: [vuexPersist.plugin],
})
