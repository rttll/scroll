<script setup>
import { onMounted } from 'vue';
import { gsap, Scroller } from '../util/scroll.js';

gsap.defaults = { ease: 'none', duration: 30 };

onMounted(() => {
  // gsap.to('circle', { fill: 'pink' });
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: 'rect',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      markers: true,
    },
  });
  tl.fromTo(
    'rect',
    {
      strokeDashoffset: 50,
    },
    {
      strokeDashoffset: -400,
    }
  );
  // .to('rect', {
  //   strokeDashoffset: 50,
  // });
});
</script>

<template>
  <div class="p-12 my-[100vh]">
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      class="block border border-pink-500"
    >
      <defs></defs>
      <rect
        x="100"
        y="100"
        width="100"
        height="100"
        style="
          stroke: rgb(30, 229, 186);
          fill: rgb(255, 255, 255);
          stroke-width: 5px;
          stroke-miterlimit: 20;
          stroke-linecap: round;
          stroke-dasharray: 50, 400;
        "
      ></rect>
    </svg>
  </div>
</template>
