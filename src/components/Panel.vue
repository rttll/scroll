<script setup>
import { ref, onMounted } from 'vue';
import { gsap, timeline } from '../util/scroll';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

timeline.scrollTrigger = {
  trigger: '.f',
  start: 'top center',
  end: 'top 100px',
  scrub: true,
};

const box = ref(null);

onMounted(() => {
  // timeline.to('.f', {
  //   x: 400,
  // });
  gsap.to('.f', {
    scrollTrigger: {
      trigger: '.f',
      toggleActions: 'reverse none none none',
    },
    x: 400,
  });

  gsap.to(box.value, {
    scrollTrigger: box.value, // start the animation when ".box" enters the viewport (once)
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
