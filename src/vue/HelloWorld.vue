<script setup>
// import { defineProps} from "vue";

// переменная
const props = defineProps({
    msg: {
      type: String,
      default: "Hello",
    }
})
</script>

<template>
  <h1>{{ props.msg }}</h1>
</template>