import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import TermekekView from '../views/TermekekView.vue'
import TermekekNavView from '../views/TermekekNavView.vue'
import KivalasztottTermekekView from '../views/KivalasztottTermekekView.vue'
import RegisztView from '../views/RegisztView.vue'
import axios from 'axios'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta:{
        requiresAuth:true     //majd a vásárlási felület mert védett útvonal
      },
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      meta: {
        requiresAuth:false    //ha kell hogy alapból be legyél jelentkezve: true
      },
      name: 'Bejelentkezes',
      component: LoginView
    },
    {
      path: '/register',
      meta: {
        requiresAuth:false    //ha kell hogy alapból be legyél jelentkezve: true
      },
      name: 'Regisztráció',
      component: RegisztView
    },
    {
      path:'/termekek/:id',
      meta:{
        requiresAuth:true
      },
      name:'Termekeknav',
      component: TermekekNavView,
      children:[{path:'',name:'termekek',component:TermekekView},
      {path:':termek',name:'termek', component:KivalasztottTermekekView}]
      
    }
  ]
})

async function isAuthenticated(){
  if(JSON.parse(localStorage.getItem('token')) != null){
    console.log(JSON.parse(localStorage.getItem('token')));
    let valid = false
    await axios.get('http://localhost:8080/verify', {
      headers: {
        Authorization: JSON.parse(localStorage.getItem('token'))
      }
    }).then(function(response){
      console.log(response)
        valid = true
      }).catch(function(error) {
        console.log(error)
        localStorage.removeItem('token')
        valid = false;
      })
    return valid
  }else{
    return false;
  }
}

router.beforeEach(async (to,from,next) =>{
  if(to.matched.some((record) => record.meta.requiresAuth)){
    if(await isAuthenticated() == true){
      next()
    }else{
      next('/login')
    }
  }
  else{
    next()
  } 
})




export default router
