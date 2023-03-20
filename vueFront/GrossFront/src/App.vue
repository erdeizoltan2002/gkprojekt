<script setup >
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="mainNav">
    <RouterLink to="/termekek/polok" class="r-link">
        Gross pólók
      </RouterLink>

      <RouterLink to="/termekek/puloverek" class="r-link">
        Gross Puloverek
      </RouterLink>

      <RouterLink to="/termekek/nadragok" class="r-link">
            Gross Nadrágok
        </RouterLink>

      <RouterLink to="/kosar" class="r-link">
        Kosarad
      </RouterLink>
  </div>
  <div>


    <RouterView />
  </div>
    
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
  .Head{
    border-width: 2px;
    border-style: solid;
    text-align: center;
    height: 65px;
    padding: 2%;
  }
  .about{
    border-top: 0px;
    border-style: solid;
    padding: 15px;
    height: 25%;
    display: block;
  }
  #mainNav{
    display: block;
    text-align: center;
    margin-top: 20px;
  }
  #kijel{
    display: inline-block;
  }
</style>


