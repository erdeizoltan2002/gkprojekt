<script setup>
    import axios from 'axios'
    import { onMounted,ref } from 'vue';
    import { useRoute,useRouter } from 'vue-router';

    const termekek = ref([]);
    const loading = ref(false)
    const route = useRoute()
    const router = useRouter()

    //termék lista feltöltése
    onMounted(async ()=>{
         await axios.get(`/termekek/${route.params.id}`).then(function(response){
            console.log(response.data.termekek)
            loading.value = true
            termekek.value = (response.data.termekek)
        })
    })

    //termék egyenkénti megtekintése
    const termekMegtekint = async (id) => {
        router.push(`./${route.params.id}/${id}`)
    }


</script>


<template>
    <!-- termékek kiiratása -->
    <div v-if="loading == true">
        <h1>{{ $route.params.id }}</h1>
        {{ termekek }}
        <div v-for="termek in termekek" :key="termekek.id">
            <h2>{{ termek.megnevezes }}</h2>
            <p>termékkép</p>
            <p>Ára: {{ termek.osszeg }}</p>
            <p>Méret: {{ termek.meret }}</p>
            <button type="submit" @click="termekMegtekint(termek.id)">Termék megtekintése</button>
        </div>
    </div>
    <div v-else>
        Loading
        {{ loading }}
    </div>
</template>

