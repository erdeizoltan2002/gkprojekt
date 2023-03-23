<script setup>
    import axios from 'axios';
    import { reactive } from 'vue';
    import { useRoute,useRouter } from 'vue-router';
    import Swal from 'sweetalert2'
    
    const route = useRoute()
    const router = useRouter()


const ujAdatok = reactive({
        kategoria:'',
        megnevezes:'',
        meret:'',
        osszeg:''
    })

const logout = async() =>{
    await axios.post('/logout')
    localStorage.clear('token')
    router.push('/login')
    }

const feltolt = async() =>{
    await axios.post('/termekek/'+ ujAdatok.kategoria, {
        kep:'grosskid.jpg',
        meret: ujAdatok.meret,
        osszeg: ujAdatok.osszeg,
        megnevezes: ujAdatok.megnevezes
    },
    Swal.fire(
        'Sikeres feltöltés',
        'success'
        )
    )
}

</script>

<template >
<div>
    <div id="mainV">
        <div id="logout">
            <form action="" @submit.prevent="logout">
                <button type="submit">Kijelentkezés</button>
            </form>
        </div>
    </div>
<br>
<div id="main">
    <div id="termFe">
        <h4>Termék feltöltés:</h4>
    </div>
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
                        <option value="" hidden ></option>
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
     <div class="col" id="osszegzes">
        <br>
        <h3>Ha a feltöltés sikeres itt megtekintheted:</h3>
        <br>
        <a href="http://localhost/phpmyadmin/index.php?route=/database/structure&db=grosskidz" id="GrossDb">GrossDatabase</a>
        <br>
        <br>
        <h3>Egyébb jegyzetek feltöltéshez:</h3>
        <p>Termékek jelenleg legyen pulóver, póló vagy nadrág 'ex_' jelzőt használnak,tartsd ezt így..</p>
        
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
</div>
</template>
<style scoped>
    #logout{
        float: right;
        padding: 5%;
    }
    #upload{
        float: right;
    }
    h5,h4{
        color:#B98EA7;
    }
    h3,p{
        color: #F0D3F7;
    }
    p{
        font-size: 18px;
    }
    #body{
        background-color: #120d31;
    }
    #mainNav{
        background-color: #302F4D;
    }
    #main{
        margin-left: 20px;
        margin-right: 20px;
        background-color: #302F4D;
        border-radius: 25px;
    }
    #termFe{
        padding-top: 2%;
        padding-left: 2%;
    }
    #osszegzes{
        background-color: #B98EA7;
        border-radius: 25px;
    }
    #GrossDb{
    color: black;
    text-decoration: none;
    font-size: large;
    }
    #GrossDb:hover{
    color: crimson;
    font-weight: bold;
    }
</style>
