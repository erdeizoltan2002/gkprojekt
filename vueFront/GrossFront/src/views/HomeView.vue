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

  <div class="contaioner" id="about">
    <div class="row">
      <div class="col-sm">
        <iframe style="border-radius:12px"
          src="https://open.spotify.com/embed/playlist/7mIA2wJilXJVFsV09Xcvmc?utm_source=generator&theme=0" width="100%"
          height="352" frameBorder="0" allowfullscreen="" id="spotify"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div class="col-sm">
        <img src="../../kepek/gk_tags.jpg" id="tags" alt="">
      </div>
      <div class="col-sm">
        <p id="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus lacus. Cras finibus eleifend porttitor.
          In tellus mi, pulvinar in auctor quis, malesuada eu eros. Mauris nec velit tincidunt mauris elementum
          scelerisque. Phasellus tempus nisi eget ex semper, et consequat lacus viverra. Nullam nec eros ac ex condimentum
          ultricies ultricies et metus. Nullam vulputate id enim a gravida. Vestibulum malesuada risus quis viverra
          congue. Maecenas eu auctor mauris. Phasellus scelerisque tristique dui, quis dictum leo congue eget. Fusce
          volutpat vestibulum fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Cras feugiat elit at ex dapibus dignissim.

          Donec sagittis eget urna quis ultricies. Sed tristique lacus vel cursus bibendum. Aliquam feugiat enim at porta
          efficitur. In tincidunt pharetra nibh vel rhoncus. Quisque finibus et nisl in efficitur. Proin a odio ipsum.
          Integer rutrum libero ut nunc pretium, sit amet blandit ligula tristique. Nam sollicitudin non elit nec lacinia.
          Cras nulla nisi, finibus nec dui eu, semper rutrum magna. Vivamus quis dictum mauris. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eu felis diam. Ut vehicula velit urna,
          eget accumsan felis sollicitudin eu. Vivamus sit amet urna ex. Vestibulum purus enim, rutrum et congue at,
          suscipit quis magna. Vestibulum posuere pulvinar nisi nec molestie.</p>
      </div>
    </div>
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

#about {
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

#spotify {
  position: relative;
  height: 450px;
}

#paragraph{
  text-align: justify;
}

#tags {
  width: 550px;
  height: 330px;
  margin-left: 30px;
}
</style>