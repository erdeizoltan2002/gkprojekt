<script setup >
  import {RouterLink,useRouter} from 'vue-router'
  import axios from 'axios'
  



  const router = useRouter();
 
  const logout = async() =>{
    await axios.post('/logout')
    localStorage.clear('token')
    router.push('/login')
  }

</script>

<template>
  <div>
    <navbar id="navi">
      <!-- <RouterLink to="/termekek/polok" class="r-link">
        Gross pólók
      </RouterLink>

      <RouterLink to="/termekek/puloverek" class="r-link">
        Gross Puloverek
      </RouterLink>

      <RouterLink to="/termekek/nadragok" class="r-link">
            Gross Nadrágok
        </RouterLink>

      <RouterLink to="/kosar" class="r-link">
        Kosarad
      </RouterLink> -->
<br>
  <div id="kijel">
    <form action="" @submit.prevent="logout" id="logout">
        <button type="submit" id="ki">Kijelentkezés</button>
    </form>
  </div>
</navbar>


</div>


  <br>
  <div class="Head"><h3>Termék infók</h3></div>

  <div class="about">
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  Fuga ipsa, totam harum qui quos quia vel itaque quae eaque eum
  atque modi quaerat dolores saepe earum corrupti consectetur
  nesciunt accusantium.</p>
  </div>

</template>
<style>
  .r-link{
    color: black;
    text-decoration: none;
    font-size: large;
  }
  .r-link:hover{
    color: crimson;
    font-weight: bold;
  }
  .Head{
    border-width: 2px;
    border-style: solid;
    text-align: center;
    height: 65px;
    padding: 2%;
  }
  .about{
    border-top: 0px;
    border-style: solid;
    padding: 15px;
    height: 25%;
    display: block;
  }
  #navi{
    display: block;
    text-align: center;
    margin-top: 20px;
  }
  #logout{
    display: inline-block;
    align-self: center;
    font-weight: bold;
  }


  
</style>
