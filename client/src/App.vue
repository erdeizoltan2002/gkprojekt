<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <nav>
      <ul>
        <li><RouterLink to="Fooldal">asd</RouterLink></li>
      </ul>
    </nav>
  </div>
  <RouterView />
</template>



