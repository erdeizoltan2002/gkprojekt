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
    <div></div>
    <div v-if="loading== true">
        <!-- termékek kiiratása -->
        <div class="row">
            <div class="col-3 "  v-for="termek in termekek" :key="termekek.id">
                <div class="card"  style="width: 18rem;">
                    <img src="/gorsskid.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ termek.megnevezes }}</h5>
                        <p class="card-text">Some quick example text to build on the card
                            title and make up the bulk of the card's content.</p>
                        <button type="submit" class="btn btn-primary" @click="termekMegtekint(termek.id)">Termék megtekintése</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

   <!-- <div v-else>
        Loading
        {{ loading }}
    </div> -->

</template>
<style scope>
    .row{
        padding: 25px;
    }
</style>