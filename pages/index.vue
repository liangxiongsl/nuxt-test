<template>
  <div>
    hello world

    {{ x }}
    <nuxt-logo />
    <Tutorial />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const x = ref('jiba')

</script>
