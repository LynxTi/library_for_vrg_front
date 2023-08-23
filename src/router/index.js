import { createRouter, createWebHashHistory } from "vue-router";
import BooksPage from "@/pages/BooksPage.vue";
import AuthorsPage from "@/pages/AuthorsPage.vue";
import AuthorPage from "@/pages/AuthorPage";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: BooksPage
    },
    {
        path: '/authors',
        name: 'AuthorsPage',
        component: AuthorsPage
    },
    {
        path: '/author/:id',
        name: 'AuthorPage',
        component: AuthorPage,
        props:true
    }
]



const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            if (to.hash) {
                if (to.name === from.name) {
                    return {
                        el: to.hash,
                        behavior: "smooth",
                    };
                }
            }
            return { left: 0, top: 0 };
        }
    },
});

export default router
