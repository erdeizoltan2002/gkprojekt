<script setup>
    import axios from 'axios';
    import { useRoute,useRouter } from 'vue-router';
    
    const route = useRoute()
    const router = useRouter()
    


const logout = async() =>{
    await axios.post('/logout')
    localStorage.clear('token')
    router.push('/login')
    }


</script>

<template>
<div>
    <div>

    </div>
    <div id="logout">
        <form action="" @submit.prevent="logout">
            <button type="submit">Kijelentkezés</button>
        </form>
    </div>
    <div id="productUp">
        <h5>Termék felvétel:</h5>

        <select name="product" placeholder="Termékek" id="">
            <option value="hidden">Válasz terméket</option>
            <option value="" name="pulover">Pulóverek</option>
            <option value="" id="polo">Pólók</option>
            <option value="" id="nadrag">Nadrágok</option>
        </select>
        <button type="submit" >Kiválaszt</button>

        <div v-for="termek in termekek">
            <div>
            <input type="text" placeholder="Megnevezés" name="megnevezes"><br>
                <input type="text" placeholder="Méret" name="meret"><br>
                <input type="text" placeholder="Összeg" name="osszeg"><br>
                <button type="submit">Feltöltés</button>
            </div>    
        </div>

        <div v-if="termekek == pulover">
            <div v-show="pulover">
                <h6>Pulóverekhez</h6>
                
            </div>
        </div>

        <div v-else-if="termekek == polo">
            <div v-show="polo">
                <h6>Pólókhoz</h6>
                <input type="text" placeholder="Megnevezés" name="megnevezes"><br>
                <input type="text" placeholder="Méret" name="meret"><br>
                <input type="text" placeholder="Összeg" name="osszeg"><br>
                <button type="submit">Feltöltés</button>
            </div>
        </div>

        <div v-else-if="termekek == nadrag">
            <div v-show="nadrag">
                <h6>Nadrágokhoz</h6>
                <input type="text" placeholder="Megnevezés" name="megnevezes"><br>
                <input type="text" placeholder="Méret" name="meret"><br>
                <input type="text" placeholder="Összeg" name="osszeg"><br>
                <button type="submit">Feltöltés</button>
            </div>
        </div>

    </div>
</div>
</template>
<style scoped>
    #logout{
        float: right;
        padding: 2%;
    }
</style>
