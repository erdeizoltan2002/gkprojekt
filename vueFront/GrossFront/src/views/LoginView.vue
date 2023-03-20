<script setup>
    import {ref} from 'vue'
    import axios from 'axios'
    import {useRouter} from 'vue-router'

    const felhnev = ref('');
    const jelszo = ref('');
    const router = useRouter();

    const adminNev = ref('admin');
    const adminJel = ref('admin');

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
                }else if(felhnev.value == adminNev.value){
                localStorage.setItem('token',JSON.stringify(response.data.token))
                console.log(response.data.token)
                router.push('/admin')
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
    <form @submit.prevent="login">
        <input type="text" v-model="felhnev" placeholder="Felhasználó név:">
        <input type="password" v-model="jelszo" placeholder="Jelszó:">
        <button type="submit">Bejelentkezés</button>
    </form>
    <RouterLink to="/register" class="r-link">
     Vagy regisztrálj...
    </RouterLink>
    
</template>