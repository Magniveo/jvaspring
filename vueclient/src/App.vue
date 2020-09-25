<template>
    <v-app>
        <v-app-bar color="black"
                   dense
                   dark app>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            <v-btn v-for="item in menuItems"
                       :key="item.title"
                       :to="item.path">
                    <v-icon>{{ item.icon }}</v-icon>
                    {{ item.title }}
            </v-btn>
        </v-app-bar>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
    components: {
    }
})
export default class App extends Vue {
    name!: "App";
    data() {
        return {
            appTitle: 'VueAppJs',
            sidebar: false,
            menuItems: [
                { title: 'Станции', path: '/loadfile', icon: 'mdi-radio-tower' },
            ]
        }
    }
    constructor(){
        super();
        //console.log(this.$store.state.auth.user);
    }
}
</script>
