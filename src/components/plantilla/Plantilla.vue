<template>
<section class=" fixed top-0 bottom-0 left-0 right-0 bg-slate-700 flex flex-col">
    <nav class=" h-16 bg-black/40 shadow-md  flex "><Icon :size="12" name="book"> </Icon></nav>
    <section class=" flex flex-grow"> <slot></slot></section>
    

</section>

</template>
<script setup>
const props=defineProps({navItems:Array})

</script>