<script setup>
import {navItems} from "./stores/menu"
import Plantilla from "./components/plantilla/Plantilla.vue"
</script>

<template>
<Plantilla :navItems="navItems"> </Plantilla>
</template>
  
<style scoped>

</style>
