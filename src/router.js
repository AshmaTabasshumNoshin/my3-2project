import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store.js'
import WelcomePage from './components/welcome/welcome.vue'
import DashboardPage from './components/dashboard/dashboard.vue'
import SignupPage from './components/auth/signup.vue'
import LoginPage from './components/auth/Login.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/signup', component: SignupPage },
  { path: '/Login', component: LoginPage,},
  { path: '/dashboard',
    component: DashboardPage,
    beforeEnter (_to, _from, next) {
      if(store.state.idToken) {
        next()
      }else{
        next('/Login')
      }
    }
  }
]

export default new VueRouter({mode: 'history', routes})
