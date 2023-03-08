<script setup >
    import axios from 'axios'
    import { onMounted,ref,watch } from 'vue';
    import { useRoute,useRouter } from 'vue-router';
    import { createPopper } from '@popperjs/core';   
    import bootstrap from 'bootstrap';       



    const termekek = ref([]);
    const loading = ref(false)
    const route = useRoute()
    const router = useRouter()

    const kosar = ref([])

    
    //kosár 
    onMounted(async ()=>{
        kosar.value = JSON.parse(localStorage.getItem("kosar")) || {}   //a kosárba helyez termékek megmaradnak oldal elhagyása után is
         await axios.get(`/termekek/${route.params.id}/${route.params.termek}`).then(function(response){
            console.log(response.data.termekek)
            loading.value = true
            termekek.value = (response.data.termekek)
        })
    })


    watch(kosar, (newkosar) =>{
        localStorage.setItem("kosar",JSON.stringify(newkosar))
    },{
        deep:true
    })

    //kosárba helyezés
    const kosarbaHelyez = async (id) => {
        kosar.value.push({
            id:id.id,
            megnevezes : id.megnevezes,
            meret: id.meret,
            osszeg: id.osszeg
        })
        
    }



</script>


<template>
<div>
    <!-- termék kiiratása -->
    <div v-if="loading == true">
        <h1>{{ $route.params.id }}</h1>
        <!-- {{ kosar }} -->
        <div v-for="termek in termekek" :key="termekek.id">
            <!-- {{ termek }} -->
            <h2>{{ termek.megnevezes }}</h2>
            <p>termékkép</p>
            <p>Ára: {{ termek.osszeg }}</p>
            <p>Méret: {{ termek.meret }}</p>
            <button type="submit" @click="kosarbaHelyez(termek)">Termék kosárba helyezése</button>
        </div>
    </div>
    <div v-else>
        Loading
        {{ loading }}
    </div>
    <div>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>
</div>
</template>

