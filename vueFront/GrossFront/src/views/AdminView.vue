<script setup>
    import { useRoute,useRouter } from 'vue-router';
    const route = useRoute()
    const router = useRouter()
</script>

<<<<<<< Updated upstream
<template>
    <form action="" @submit.prevent="logout">
        <button type="submit">Kijelentkezés</button>
    </form>
=======
<!-- <template>
>>>>>>> Stashed changes
<div>
    
    
</div>
<<<<<<< Updated upstream
</template>
=======
</template>
<style scoped>
    #logout{
        float: right;
        
    }
</style> -->

<template>
	<div>
	  <select v-model="selectedOption" @change="getSelectedItemInfo">
		<option value="">--Válassz--</option>
		<option value="polo">Póló</option>
		<option value="pulcsi">Pulcsi</option>
		<option value="nadrág">Nadrág</option>
	  </select>
      <div>
        <p>A kiválasztott opció: {{ selectedOption }}</p>
        <label for="megnevezes">Termék neve: </label>
        <input type="text" id="megnevezes">
        <br>
        <label for="meret">Termék mérete: </label>
        <input type="text" id="meret">
        <br>
        <label for="osszeg">Termék összege: </label>
        <input type="text" id="osszeg">
        <br>
        <button type="submit">Bevitel</button>
      </div>
	</div>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		selectedOption: ""
	  };
	},
	methods: {
	  getSelectedItemInfo() {
		let selectedItem = "";
		switch (this.selectedOption) {
		  case "polo":
			selectedItem = "Póló";
			break;
		  case "pulcsi":
			selectedItem = "Pulcsi";
			break;
		  case "nadrág":
			selectedItem = "Nadrág";
			break;
		  default:
			selectedItem = "";
		}
		console.log(selectedItem); // itt kiírjuk a kiválasztott elem típusát a konzolba
		localStorage.setItem("selectedItem", selectedItem); // itt elmentjük a kiválasztott elem típusát a local storage-ba
	  }
	}

    
  };


  </script>
>>>>>>> Stashed changes
