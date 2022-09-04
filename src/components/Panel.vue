<script setup>
import { ref, onMounted } from 'vue';
// import {  timeline } from '../util/scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const box = ref(null);

onMounted(() => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: box.value,
      start: 'top center',
      end: 'top 100px',
      scrub: 3,
      markers: true,
      // pin: true,
    },
  });
  timeline.to(box.value, {
    x: 100,
    duration: 2,
  });
});
</script>

<template>
  <div class="panel">
    <p>a</p>
    <p class="f">b</p>
    <p><slot /></p>
    <div class="box" ref="box">box</div>
  </div>
</template>

<style>
.panel {
  height: 100vh;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.panel:nth-child(even) {
  background: lightgoldenrodyellow;
}
</style>
