import { createRouter, createWebHistory } from "vue-router";

import AboutUs from "./../components/AboutUs.vue"
import Alumni from "./../components/Alumni.vue"
import ContactUs from "./../components/ContactUs.vue"
import Courses from "./../components/Courses.vue"
import Events from "./../components/Events.vue"
import HomePage from "./../components/Homepage.vue"
import Library from "./../components/Library.vue"
import Partnerships from "./../components/Partnerships.vue"

const routes =[
    {
        path: '/aboutUs',
        name: 'aboutUs',
        component: AboutUs,
    },
    {
        path: '/alumni',
        name: 'alumni',
        component: Alumni,
    },
    {
        path: '/contactUs',
        name: 'contactUs',
        component: ContactUs,
    },
    {
        path: '/courses',
        name: 'courses',
        component: Courses,
    },
    {
        path: '/events',
        name: 'events',
        component: Events,
    },
    {
        path: '/',
        name: 'homepage',
        component: HomePage,
    },
    {
        path: '/library',
        name: 'library',
        component: Library,
    },
    {
        path: '/partnerships',
        name: 'partnerships',
        component: Partnerships,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router