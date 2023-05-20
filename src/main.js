import './styles.css'
import App from "./vue/VueApp.vue";
import { App as ReactApp } from "./react/ReactApp.jsx"
import SvelteApp from "./svelte/SvelteApp.svelte"

import mounter from './utils/mounter';

mounter({
    selector: "#app",
    type: "svelte",
    component: SvelteApp
})