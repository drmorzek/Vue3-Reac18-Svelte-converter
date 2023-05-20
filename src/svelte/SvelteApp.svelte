<script>
	import ReactAdapter from "../utils/convertors/react-converter/ReactAdapter.js";
	import VueAdapter from "../utils/convertors/vue-conveter/VueAdapter.js";
	import { App} from "../react/ReactApp.jsx"
	import HelloWorld from "../vue/HelloWorld.vue";
	
	export const name = "From svelte1"

	
	// react mui components
  </script>

  <main>
	<h1>React inside Svelte</h1>
	
	<ReactAdapter 
	  el={App}	  
	  msg={name}
	/>
	
	<VueAdapter 
		el= {HelloWorld}
	/>
  </main>