<template>
    <v-app>
        <v-app-bar
            app
            color="primary"
            dark>
            <div class="d-flex align-center justify-center">
                <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="https://i.imgur.com/Yhn5PRB.png"
                    transition="scale-transition"
                    width="60"
                />
            </div>

            <v-spacer></v-spacer>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn
                        color="primary"
                        dark
                        v-on="on">
                        <v-img
                            alt="Vuetify Logo"
                            class="shrink mr-2"
                            contain
                            :src="items[selectedLang]"
                            transition="scale-transition"
                            width="60"
                        />
                    </v-btn>
                </template>
                <v-list>
<!--                    .filter(e => e !== selectedLang)-->
                    <v-list-item
                        v-for="(lang, key) in items"
                        :key="key"
                        :hidden="key === selectedLang">
                        <v-list-item-title>
                            <v-img
                                alt="Vuetify Logo"
                                class="shrink mr-2"
                                contain
                                :src="lang"
                                transition="scale-transition"
                                width="60"
                                @click="selectLang(key)"
                            />
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'App',
        components: {},
        data: () => ({
            items: {
                fr: 'https://cdn.discordapp.com/attachments/686733304455495809/686769004530237540/Fr.png',
                en: 'https://cdn.discordapp.com/attachments/686733304455495809/686770659090628609/eng.png',
                cn: 'https://i.imgur.com/a4mKYBL.png',
            },
        }),
        computed: mapState([
            'selectedLang'
        ]),
        methods: {
            selectLang(lang) {
                this.$store.commit('changeLang', lang);
            },
        },
        mounted() {
            this.$vuetify.theme.dark = true;
        }
    };
</script>

<style>
    html, body {
        background: #200f21;
    }
</style>
