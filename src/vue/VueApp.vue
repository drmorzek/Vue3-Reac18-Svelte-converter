<template>
  <div>

    <ReactComponent msg="asfasfasf1111" />
    <SvelteComponent name="Vue" />

  </div>
</template>

<script setup>

import { SvelteToVue, ReactToVue } from "../utils/convertors"
//Svelte component prepare
import SvelteApp from "../svelte/SvelteApp.svelte"


//React component prepare
import { App } from "../react/ReactApp.jsx"

defineProps({
  foo: String
})

//React and Svelte components mount
const SvelteComponent = SvelteToVue(SvelteApp)
const ReactComponent = ReactToVue(App)

</script>