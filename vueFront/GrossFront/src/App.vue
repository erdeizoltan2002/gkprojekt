<script setup>
import axios from 'axios';
import { RouterLink, RouterView,useRouter } from 'vue-router'


const router =  useRouter();

if (!localStorage.getItem('token')) {
  router.push('/login')
}
</script>

<template>
  <img src="../../kepek/gk_logo.jpg" id="logo" alt="">
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


