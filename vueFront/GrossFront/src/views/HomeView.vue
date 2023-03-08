<script setup>
  import { RouterLink, RouterView } from 'vue-router'
 

 

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
  </navbar>
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
