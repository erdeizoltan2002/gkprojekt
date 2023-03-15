<script setup>
    import {ref} from 'vue'
    import axios from 'axios'
    import {useRouter} from 'vue-router'

    const felhnev = ref('');
    const jelszo = ref('');
    const router = useRouter();


    const login = async()=>{
        await axios.post('/login',{
            nev: felhnev.value,
            jelszo: jelszo.value,
        }).then(
            function(response){
                localStorage.setItem('token',JSON.stringify(response.data.token))
                console.log(response.data.token)
                router.push('/')
            }
        ).catch(
            function(error) {
                console.log(error)
            }
        )
    }
   
    
    // const adminLogin = async()=>{
    //     await axios.post('/login',{
    //         nev: felhnev.value,
    //         jelszo: jelszo.value,
    //     }).then(
    //         function(response){
    //             if(felhnev.value == 'admin'){
    //             localStorage.setItem('token',JSON.stringify(response.data.token))
    //             console.log(response.data.token)
    //             router.push('/admin')
    //             console.log(response.data.felhnev)
    //             }
    //         }
            
    //     ).catch(
    //         function(error) {
    //             console.log(error)
    //         }
    //     )
        
    //}
   
    
    
</script>

<template>
<br>
    <form @submit.prevent="login">
        <input type="text" v-model="felhnev" placeholder="Felhasználó név:">
        <input type="password" v-model="jelszo" placeholder="Jelszó:">
        <button type="submit">Bejelentkezés</button>
    </form>
    <RouterLink to="/register" class="r-link">
     Vagy regisztrálj...
    </RouterLink>
    
</template>