import Vue from 'vue'
import VueRouter from 'vue-router'
//import { component } from 'vue/types/umd'

Vue.use(VueRouter)

import Mainpage from './components/mainpage.vue'
import Wishlist from './components/wishlist.vue'
import Anmeldung from './components/anmeldung.vue'
import Festbeitrag from './components/festbeitrag.vue'
import Ort from './components/ort.vue'
import AnmeldungView from './components/anmeldungView.vue'
import coronamassnahmen from './components/coronamassnahmen.vue'
import video from './components/video.vue'

const routes = [
    {
        path: '/',
        component: Mainpage
    },
    {
        path: '/wunschliste',
        component: Wishlist
    }, 
    {
        path: '/anmeldung',
        component: Anmeldung
    }, 
    {
        path: '/festbeitrag',
        component: Festbeitrag
    },
    {
        path: '/ort',
        component: Ort
    },
    {
        path: '/anmeldungView',
        component: AnmeldungView
    },
    {
        path: '/coronamassnahmen',
        component: coronamassnahmen
    },
    {
        path: '/video',
        component: video
    },


]

export const router = new VueRouter({
    routes
})