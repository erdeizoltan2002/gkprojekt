<script setup >
    import axios from 'axios'
    import { onMounted,ref } from 'vue';
    import { useRoute,useRouter } from 'vue-router';

    const router = useRouter();
    const felhasznalonev = ref('');
    const emailcim = ref('');
    const jelszo = ref('');
    const jelszo2 = ref('');
    const outPut =ref('');

    const register = async()=>{
        if(jelszo.value != jelszo2.value){
            return
        }
        await axios.post('/register',{
            felhasznalonev: felhasznalonev.value,
            emailcim: emailcim.value,
            jelszo: jelszo.value,
            jelszo2: jelszo2.value
        }).then(
            function(response){
                if(response.data.status == 'succesful'){
                    outPut.value = 'sikeres regisztráció'
                    router.push('/login')
                }
            }
        )
    }


</script>

<template>
    <div>
    
    <div v-show="outPut">
        {{ outPut }}
        <br>
    </div>
    <div class="row">
        <div class="col">
        <form @submit.prevent="register">
            <input type="text" v-model="felhasznalonev" placeholder="Felhasználó név:"><br>
            <input type="text" v-model="emailcim" placeholder="Email Cím:"><br>
            <input type="password" v-model="jelszo" placeholder="Jelszó:"><br>
            <input type="password" v-model="jelszo2" placeholder="Jelszó:"><br>
            <button type="submit">Bejelentkezés</button>
        </form>
        </div>
    </div>
    </div>
</template>