<script setup>
    import {onMounted,ref} from 'vue'
    import axios from 'axios'
    import {useRouter} from 'vue-router'
    import Swal from 'sweetalert2'


    const felhnev = ref('');
    const jelszo = ref('');
    const router = useRouter();
    const adminNev = ref('admin');
    const adminJel = ref('admin');
    const tokenE = ref('');

    const login = async()=>{
        await axios.post('/login',{
            nev: felhnev.value,
            jelszo: jelszo.value,
            adminNev: felhnev.value,
            adminJel: jelszo.value
        }).then(
            function(response){
                if(felhnev.value != adminNev.value){
                localStorage.setItem('token',JSON.stringify(response.data.token))
                console.log(response.data.token)
                router.push('/')
                Swal.fire(
                'Üdv '+felhnev.value+' !',
                'Sikeres bejelentkezés',
                'success'
                )
                }else if(felhnev.value == adminNev.value){
                localStorage.setItem('token',JSON.stringify(response.data.token))
                console.log(response.data.token)
                router.push('/admin')
                Swal.fire(
                'Üdv '+felhnev.value+' !',
                'Sikeres bejelentkezés',
                'success'
                )
                console.log('admin vagy, hajrá')
                }
            }
        ).catch(
            function(error) {
                console.log(error)
            }
        )
    }
  
</script>

<template>
<br>
<div id="login">
    <h4>Belépés</h4>
    <br>
    <form @submit.prevent="login">
        <input type="text" v-model="felhnev" placeholder="Felhasználó név:"><br><br>
        <input type="password" v-model="jelszo" placeholder="Jelszó:"><br><br>
        <button type="submit">Bejelentkezés</button><br>
    </form>
    <br>    
    <RouterLink to="/register" class="r-link" id="regL">
     Vagy regisztrálj...
    </RouterLink>
</div>
</template>
<style scoped>
    #login{
     text-align: center;
     padding-top: 5%;
    }
    /* #regL{
        border-style: solid;
        padding-top: 3px;
        padding-bottom: 3px;
        padding-left:4px ;
        padding-right: 4px;
    } */
</style>