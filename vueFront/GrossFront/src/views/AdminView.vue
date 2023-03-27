<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()


const ujAdatok = reactive({
    kategoria: '',
    megnevezes: '',
    meret: '',
    osszeg: ''
})

const logout = async () => {
    await axios.post('/logout')
    localStorage.clear('token')
    router.push('/login')
}

const feltolt = async () => {
    await axios.post('/termekek/' + ujAdatok.kategoria, {
        kep: 'grosskid.jpg',
        meret: ujAdatok.meret,
        osszeg: ujAdatok.osszeg,
        megnevezes: ujAdatok.megnevezes
    })
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
                            <select name="" id="" v-model="ujAdatok.kategoria">
                                <option value="" id="hidden" hidden></option>
                                <option value="polok">Pólók</option>
                                <option value="puloverek">Pulóverek</option>
                                <option value="nadragok">Nadrágok</option>
                            </select>
                        </div>
                        <br>
                        <h5>Megnevezés</h5>
                        <div id="megnevForm">
                            <input type="text" name="megnevezes" v-model="ujAdatok.megnevezes">
                        </div>
                        <br>
                        <h5>Méret:</h5>
                        <div id="meretForm">
                            <select name="" id="" v-model="ujAdatok.meret">
                                <option value="" hidden></option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>
                        <br>
                        <h5>Összege:</h5>
                        <div id="osszeg">
                            <input type="text" name="osszeg" v-model="ujAdatok.osszeg">
                        </div>
                    </div>
                    <br>
                </div>
                <div class="col">
                    <h5>Összegzés:</h5>

                </div>
                <div class="row">
                    <div class="col"></div>
                    <div class="col">
                        <button type="submit" id="upload" @click="feltolt()">Feltöltés</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

#upload {
    float: right;
}

#logout {
  display: block;
  align-self: center;
  font-weight: bold;
}

#ki {
  float: right;
  margin-right: 15px;
  margin-top: 15px;
  color: white;
  background-color: black;
  border: 2px solid white;
  font-weight: bold;
  height: 40px;
}

</style>
