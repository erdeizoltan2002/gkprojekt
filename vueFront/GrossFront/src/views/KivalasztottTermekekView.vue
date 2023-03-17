<script setup >

    import axios from 'axios'
    import { onMounted,ref,watch } from 'vue';
    import { useRoute,useRouter } from 'vue-router';

    const termekek = ref([]);
    const loading = ref(false)
    const route = useRoute()
    const router = useRouter()

    const kosar = ref([])

    
    //kosár 
    onMounted(async ()=>{
        kosar.value = JSON.parse(localStorage.getItem("kosar")) || []   //a kosárba helyez termékek megmaradnak oldal elhagyása után is
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
        const newitem = ref(0);

        for (let i = 0; i < kosar.value.length; i++) {
            if(kosar.value[i].id == id.id && kosar.value[i].megnevezes == id.megnevezes) {
                kosar.value[i].mennyiseg += 1;
                newitem.value = 1;
            }
        }
        if(newitem.value == 0) {
            kosar.value.push({
                        id:id.id,
                        megnevezes : id.megnevezes,
                        meret: id.meret,
                        mennyiseg: 1,
                        osszeg: id.osszeg
                    })
            }
        }

</script>


<template>
    <div>
    <!-- termék kiiratása -->
    <div v-if="loading == true">
        <div class="row">
        <h1>{{ $route.params.id }}</h1>
        {{ kosar }}
            <div v-for="termek in termekek" :key="termekek.id">
                <div class="card" style="width: 18rem; border-width: 2.7px; border-color: lightgrey;">
                    <img src="/gorsskid.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h2>{{ termek.megnevezes }}</h2>
                        <p>Ára: {{ termek.osszeg }}</p>
                        <p>Méret: {{ termek.meret }}</p>
                        </div>
                    <button type="submit" class="btn btn-primary" @click="kosarbaHelyez(termek)">Termék kosárba helyezése</button>
                </div>
            </div>
        </div>
    </div>
            <div v-else>
                Loading
                {{ loading }}
            </div>
</div>

</template>

    
     
