<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from '../util/scroll.js';

gsap.defaults = { ease: 'none', duration: 130 };
const path = ref(null);
const tl = gsap.timeline({
  repeat: -1,
  repeatDelay: gsap.utils.random(0.7, 3),
});

const defaults = {
  duration: 1,
  ease: 'none',
};

const getPosition = (e) => {
  let total = window.innerWidth,
    x = e.clientX,
    position = x / total;
  return defaults.duration * position;
};

const onMousemove = (e) => {
  const rect = path.value.getBoundingClientRect();
  const { top, bottom } = rect;
  const inside = e.clientY < bottom && e.clientY > top;
  if (!inside) return tl.play();
  tl.pause();
  const position = getPosition(e);
  tl.seek(position);
};

onMounted(() => {
  document.addEventListener('mousemove', (e) => onMousemove(e));

  tl.fromTo(
    path.value,
    {
      ...defaults,
      strokeDashoffset: 240,
    },
    {
      ...defaults,
      strokeDashoffset: 10 - path.value.getTotalLength(),
    }
  );
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
        ref="path"
        style="stroke: rgb(0, 0, 0); fill: none; stroke-dasharray: 250px 600px"
        d="M -12.788 148.272 L 65.229 183.015 L 217.209 137.459 L 349.227 209.18 L 395.744 159.556 L 437.883 182.925 L 525.535 122.756"
      ></path>
    </svg>
  </div>
</template>
