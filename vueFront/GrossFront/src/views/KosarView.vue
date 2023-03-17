<script setup>
    import { ref,onMounted,watch } from 'vue';
    import { useRoute,useRouter } from 'vue-router';
    

    const kosar = ref([])
    const termekek = ref([])
    const Route = useRoute()
    const Router = useRouter()

    const person = {
    name: "asd",
    location: "asda",
}

onMounted(async ()=>{
        kosar.value = JSON.parse(localStorage.getItem("kosar")) || [] //a kosár lekérése
    })

const termek = async(id) =>{
    kosar.value.push({
        id:id.id,
        megnevezes : id.megnevezes,
        meret: id.meret,
        osszeg: id.osszeg
    })
}

watch(kosar, (torolKosar) =>{
        localStorage.setItem("kosar",JSON.stringify(torolKosar))
    },{
        deep:true
    })

    const torol = async(id) =>{
        console.log(id)
        for (let i = 0; i < kosar.value.length; i++) {
            if(i == id && kosar.value[i].mennyiseg < 2){
                kosar.value.splice(i,1);
            }else if( i == id && kosar.value[i].mennyiseg >= 2){
                kosar.value[i].mennyiseg -= 1;
            }
            
        }
    }
   
</script>

<template>
    <div id="shoppingcart">
        <h1>Kosarad</h1>
        {{ kosar }}
        <div id="osszesit" >
            <div v-for="(items,id) in kosar">
                <div id="megjelenit">
                    <div id="kep">
                        <img src="/gorsskid.jpg" alt="" id="termkep" >
                    </div>
                    <div id="adatok">
                        <div id="megnev">Termék megnevezés:{{ items?.megnevezes }}</div>
                        <div id="menny">Darabszám: {{ items?.mennyiseg }}</div>
                        <div id="meret">Mérete: {{ items?.meret }}</div>
                        <div id="ar">Ára: {{ items?.osszeg }}ft</div>
                        <div id="torol">
                            <button type="submit" @click="torol(id)">Törlés</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="bottom"></div>
                <div id="end">
                    <select name="fizOp" id="">
                        <option value="" hidden>Fizetési opciók</option>
                        <option value="utalas">Fizetési banki utalással</option>
                        <option value="atvetel">Fizetés átvételkor</option>
                    </select>
                    <div>
                        <button type="submit">Megrendelés</button>
                    </div>
                </div>
        </div>
    </div>
</template>

<style>
    #shoppingcart{
        padding: 2%;
    }
    #osszesit{
        border-width: 1px;
        border-top: solid;
    }
    #data{
        border-style: solid;
        border-width: 2px;
        border-width: 1px;
        width: 160px;
        margin:auto;
    }
    
    #termkep{
        width: 140px;
        height: 160px;
        margin-bottom: 8px;
    }
    #megjelenit{
        border-style: solid;
        border-color: blanchedalmond;
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 1%;
    }
    #bottom{
        border-width: 1px;
        border-top: solid;
    }
    #end{
        float:right;
        
        padding-top: 1%;
    }
    #kep{
        display: inline-block;
    }
    #adatok{
        padding: 2%;
        display: inline-block;
       
    }
    #meret{
        padding: 2%;
        display: inline-block;
    }
    #menny{
        padding: 2%;
        display: inline-block;
    }
    #megnev{
        padding: 2%;
        display: inline-block;
    }
    #ar{
        padding: 2%;
        display: inline-block;
    }
    
</style>