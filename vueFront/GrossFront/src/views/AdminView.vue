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
    <div id="logout">
        <form action="" @submit.prevent="logout">
            <button type="submit">Kijelentkezés</button>
        </form>
        
    </div>
    <div id="productUp">
        <h5>Termék felvétel:</h5>
        <select name="product" id="">
            <option value="hidden">Válasz terméket</option>
            <option value="pulover" on-click="pulover">Pulóverek</option>
            <option value="polo" on-click="polo">Pólók</option>
            <option value="nadrag" on-click="nadrag">Nadrágok</option>
        </select>
        <button type="submit">Kiválaszt</button>

        <div v-if="pulover">
            <div v-show="pulover">
                <h6>Pulóverekhez</h6>
                <input type="text" placeholder="Megnevezés" name="megnevezes"><br>
                <input type="text" placeholder="Méret" name="meret"><br>
                <input type="text" placeholder="Összeg" name="osszeg"><br>
                <button type="submit">Feltöltés</button>
            </div>
        </div>

        <div v-if="value == polo">
            <div v-show="polo">
                <h6>Pólókhoz</h6>
                <input type="text" placeholder="Megnevezés" name="megnevezes"><br>
                <input type="text" placeholder="Méret" name="meret"><br>
                <input type="text" placeholder="Összeg" name="osszeg"><br>
                <button type="submit">Feltöltés</button>
            </div>
        </div>
        <div v-if="value == nadrag">
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