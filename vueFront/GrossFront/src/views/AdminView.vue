<script setup>
    import { useRoute,useRouter } from 'vue-router';
    const route = useRoute()
    const router = useRouter()
</script>

<template>
    <form action="" @submit.prevent="logout">
        <button type="submit">Kijelentkezés</button>
    </form>
<div>
    
    <h1>kaki</h1>
</div>
</template>