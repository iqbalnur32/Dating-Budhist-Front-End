import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store/index";

Vue.use(VueRouter);

const BaseRouter = [
    {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '@/views/home/home')
    },
    {
        path: '/login',
		name: 'Login',
		component: () => import(/* webpackChunkName: "about" */ '@/views/auth/login')
    },
];

const routes = new VueRouter({
    mode: 'history',
    routes: BaseRouter
})

routes.beforeEach((to, before, next) => {
    console.log(store.state.isLogin, to.path);
    if(to.path != '/login'){
        if (store.state.isLogin == true){
            next();
        }else{
            next({
                path: '/login'
            })
        }
    }else{
        next()
    }
    next()
})

export default routes