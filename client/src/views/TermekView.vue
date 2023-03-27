
<script setup>
    import { Router } from "vue-router";
    import axios from "axios"
    import { ref,onBeforeMount } from "vue";
    const nadragok = ref("Semmi")
    const router = new Router();
    console.log(router)
    onBeforeMount(()=>{
        axios.get("http://localhost:8080/termekek/nadragok").then((
            Response
        )=>{
            nadragok.value = Response.data.termekek;
        })
    })
</script>
    <!-- itt css -->
<template>
    <div v-for="items in nadragok">
        <h1>Nadragok</h1>
        <p>{{items.megnevezes}}</p>
        <h5>{{items.meret }}</h5>
        <h5>{{items.osszeg}}</h5>
        <button><RouterLink :to="`/nadragok/${items.id}`">Tovább</RouterLink></button>
    </div>
</template>