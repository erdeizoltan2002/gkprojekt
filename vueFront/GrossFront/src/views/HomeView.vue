<script setup>
  import { routerKey, RouterLink, RouterView } from 'vue-router'
  import axios from 'axios'
  import {useRouter} from 'vue-router'



  const router = useRouter();
 
  const logout = async() =>{
    await axios.post('/logout')
    localStorage.clear('token')
    router.push('/login')
  }
    
      
    
 

</script>

<template>

  <navbar>
    <RouterLink to="/termekek/nadragok" class="r-link">
      Gross Nadrágok 
    </RouterLink>

    <RouterLink to="/termekek/polok" class="r-link">
      Gross pólók
    </RouterLink>

    <RouterLink to="/termekek/puloverek" class="r-link">
      Gross Puloverek 
    </RouterLink>

    <RouterLink to="/Kosar" class="r-link">
      Kosarad
    </RouterLink>
  </navbar>
  
  <form action="" @submit.prevent="logout">
    <button type="submit">Kijelentkezés</button>
  </form>
  <br>
  <h3>Termék infók</h3> 
  <p>Termékekről</p>

</template>
<style>
  .r-link{
    color: black;
    text-decoration: none;
    font-size: large;
  }
  .r-link:hover{
    color: crimson;
    font-weight: bold;
  }
  
</style>
