<script setup>
    import { ref,onMounted } from 'vue';
    import { useRoute,useRouter } from 'vue-router';
    

    const kosar = ref([])
    const Route = useRoute()
    const Router = useRouter()

    const person = {
    name: "asd",
    location: "asda",
}

onMounted(async ()=>{
        kosar.value = JSON.parse(localStorage.getItem("kosar")) || [] //a kosár lekérése
    })

   
</script>

<template>
    <div id="shoppingcart">
        <h1>Ez a kosár</h1>
        {{ kosar }}
    </div>
</template>

<style>
    #shoppingcart{
        margin-top: 60px;
        margin-left: 20px;
        border-style: solid;
        border-width: 2px;
        padding: auto;
        text-align: center;
        width: 180px;
        height: 100px;
    }
    #data{
        border-style: solid;
        border-width: 2px;
        border-width: 1px;
        width: 160px;
        margin:auto;
    }
</style>