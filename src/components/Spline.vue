<script setup>
import { onMounted } from 'vue';
import { gsap, Scroller } from '../util/scroll.js';

gsap.defaults = { ease: 'none', duration: 30 };

onMounted(() => {
  // gsap.to('circle', { fill: 'pink' });
  const length = document.querySelector('path').getTotalLength();
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: 'path',
      start: 'top 80%',
      end: 'bottom top',
      scrub: true,
      markers: true,
    },
  });
  console.log(length);
  tl.fromTo(
    'path',
    {
      strokeDashoffset: 240,
    },
    {
      strokeDashoffset: 0 - length + 100,
    }
  );
  // .to('rect', {
  //   strokeDashoffset: 50,
  // });
});
</script>

<template>
  <div class="my-[100vh]">
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:bx="https://boxy-svg.com"
    >
      <defs>
        <!-- <bx:grid x="0" y="0" width="332.587" height="170.706"></bx:grid> -->
      </defs>
      <path
        style="stroke: rgb(0, 0, 0); fill: none; stroke-dasharray: 250px 600px"
        d="M -12.788 148.272 L 65.229 183.015 L 217.209 137.459 L 349.227 209.18 L 395.744 159.556 L 437.883 182.925 L 525.535 122.756"
      ></path>
    </svg>
  </div>
</template>
