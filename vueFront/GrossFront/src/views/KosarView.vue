<script setup>
    import { useRoute,useRouter } from 'vue-router';
    

    const Route = useRoute()
    const Router = useRouter()

</script>

<template>
    <div id="shoppingcart">
        <h1>Ez a kosár</h1>
        <div id="data">
            data
        </div>
    </div>
</template>

<style>
    #shoppingcart{
        margin-top: 60px;
        
        border-style: solid;
        border-width: 2px;
        padding: auto;
        text-align: center;
        width: 180px;
        height: 100px;
    }
    #data{
        border-style: solid;
        border-width: 2px;
        border-width: 1px;
        width: 160px;
        margin:auto;
    }
</style>