<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();
const el = ref(null);

onMounted(() => {});
</script>

<template>
  <section class="container">
    <div ref="el">hiiii</div>
  </section>
</template>

<style scoped>
.container {
  background: #222;
  color: #888;
  height: 100vh;
}
</style>
