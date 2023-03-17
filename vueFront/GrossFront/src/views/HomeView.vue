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
  <br>
  <form action="" @submit.prevent="logout" id="logout">
    <button type="submit" id="ki">Kijelentkezés</button>
  </form>
  <div style="width: 100%;">
    <img id="logo" src="../../kepek/grosskidz_logo.jpg" alt="">
  </div>
  <div>
    <navbar id="navi">
      <RouterLink to="/termekek/polok" class="r-link">
        Pólók
      </RouterLink>
      &nbsp;&nbsp;
      <RouterLink to="/termekek/puloverek" class="r-link">
        Pulloverek
      </RouterLink>
      &nbsp;&nbsp;
      <RouterLink to="/termekek/nadragok" class="r-link">
        Nadrágok
      </RouterLink>
      &nbsp;&nbsp;
      <RouterLink to="/kosar" class="r-link">
        Kosarad
      </RouterLink>
    </navbar>
  </div>

  <div class="Head">
    <h3>Termék infók</h3>
  </div>

  <div class="about">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Fuga ipsa, totam harum qui quos quia vel itaque quae eaque eum
      atque modi quaerat dolores saepe earum corrupti consectetur
      nesciunt accusantium.</p>
  </div>
</template>
<style>
.r-link {
  color: white;
  text-decoration: none;
  font-size: large;
  word-spacing: 100px;
  position: relative;
}

.r-link:before {
  background: hsl(45 100% 70%);
  content: "";
  inset: 0;
  position: absolute;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s ease-in-out;
  z-index: -1;
}

.r-link:hover::before {
  transform: scaleX(1);
  transform-origin: left;
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
  align-self: right;
  font-weight: bold;
  text-align: right;
  margin-right: 50px;
}

#title {
  align-self: center;
  text-align: center;
}

#logo {
  display: flex;
  height: 300px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}
*{
  background-color: black;
  color: white;
}
</style>