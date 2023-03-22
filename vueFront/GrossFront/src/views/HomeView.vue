<script setup >
import { routerKey, RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
import { useRouter } from 'vue-router'




const router = useRouter();

const logout = async () => {
  await axios.post('/logout')
  localStorage.clear('token')
  router.push('/login')
}

</script>

<template>
  <div>
    <form action="" @submit.prevent="logout" id="logout">
      <button type="submit" id="ki">Kijelentkezés</button>
    </form>
    <img src="../../kepek/gk_logo.jpg" id="logo" alt="">
  </div>

  <div>
    <navbar id="navi">
      <RouterLink to="/termekek/polok" class="r-link">
        Gross pólók
      </RouterLink>
      &nbsp;&nbsp;
      <RouterLink to="/termekek/puloverek" class="r-link">
        Gross Pulóverek
      </RouterLink>
      &nbsp;&nbsp;
      <RouterLink to="/termekek/nadragok" class="r-link">
        Gross Nadrágok
      </RouterLink>
      &nbsp;&nbsp;
      <RouterLink to="/kosar" class="r-link-kosar">
        Kosarad
      </RouterLink>
      <br>
    </navbar>


  </div>


  <br>
  <div class="Head">
    <h3>Termék infók</h3>
  </div>

  <div class="about">
    <iframe style="border-radius:12px"
      src="https://open.spotify.com/embed/playlist/7mIA2wJilXJVFsV09Xcvmc?utm_source=generator&theme=0" width="40%"
      height="352" frameBorder="0" allowfullscreen="" id="spotify"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a saepe sapiente ea quam minus eius quos cum voluptatibus. Animi vel aut doloribus reiciendis accusantium sit repudiandae incidunt soluta possimus! </p>
  </div>
</template>
<style>
* {
  background-color: black;
  color: white;
}

.r-link {
  color: white;
  text-decoration: none;
  font-size: x-large;
  font-family: 'Garamond';
}

.r-link:hover {
  color: crimson;
  font-weight: bold;
}

.r-link-kosar {
  color: white;
  text-decoration: none;
  font-size: x-large;
  font-family: 'Garamond';  
}

.r-link-kosar:hover {
  color: crimson;
  font-weight: bold;
}

.Head {
  border-width: 2px;
  border-style: solid;
  text-align: center;
  height: 65px;
  padding: 2%;
}

.about {
  border-top: 0px;
  border-style: solid;
  padding: 15px;
  height: 25%;
  display: block;
}

#navi {
  display: block;
  text-align: center;
  margin-top: 20px;
}

#logout {
  display: block;
  align-self: center;
  font-weight: bold;
}

#ki {
  float: right;
  margin-right: 15px;
  margin-top: 15px;
  color: white;
  background-color: black;
  border: 2px solid white;
  font-weight: bold;
  height: 40px;
}

#logo {
  height: 300px;
  width: 300px;
  display: block;
  margin-left: 810px;
}

#spotify{
  position: relative;
    
}

</style>