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
   
</div>
</template>
<style scoped>
    #logout{
        float: right;
        padding: 2%;
    }
</style>
