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
        <div id="logout">
            <form action="" @submit.prevent="logout">
                <button type="submit">Kijelentkezés</button>
            </form>
        </div>
    </div>
<br>

<h4>Termék feltöltés:</h4>
<div class="container">
    <div class="row">
        <div class="col">
    <div id="feltoltForm">
        <div id="termForm">
            <h5>Új termék a következőkhöz:</h5>
            <select name="" id="">
                <option value="" id="hidden" hidden></option>
                <option value="">Pólók</option>
                <option value="">Pulóverek</option>
                <option value="">Nadrágok</option>
            </select>
        </div>
    <br>
    <h5>Méret:</h5>
    <div id="meretForm">
        <select name="" id="">
            <option value="" hidden></option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
        </select>
    </div>
     <br>
     <h5>Összege:</h5>
        <div id="osszeg">
            <input type="text" name="osszeg">
        </div>
    </div>
    <br>
    </div>
    <div class="col">
        <h5>Összegzés:</h5>
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
