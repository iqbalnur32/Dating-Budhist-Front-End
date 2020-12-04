<template>
	<div v-if="isLogin === true">
		<AppViews>
		</AppViews>
		<div class="image">
		   <h1 class="heading">Main Heading</h1>
		   <p><button class="btn btn-large">Big Button</button></p>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex'
import AppViews from "../layouts/AppViews"

export default {
	name: "Home",
	components: {
		AppViews
	},
	data() {
		return {

		};
	},
	computed: mapState(['isLogin'])
}

</script>

<style scoped="">

.image {
   background-color: #490D40;
   background: url(https://sonorangirl.github.io/Earth-Quotes/img/google-earth-view-South-Iceland3.jpg) no-repeat center center;
   background-size: cover;
   height: 570px;
   margin-top: -20px;
}

.heading {
  color: white;
  text-align: center;
  padding-top: 200px;
}

p {
  text-align: center;
  padding: 20px 60px;
}

.btn {
 background-color: transparent;
 color: white;
 border: 1px solid white;
 padding: 10px;
 font-size: 1.2em; 
}
.btn:hover{
	color: #C57ED3;
    border-color: #C57ED3;
}


</style>