<script setup>
import { onMounted, watch, ref, reactive } from 'vue';
import { gsap } from '../util/scroll.js';

gsap.defaults = { ease: 'none', duration: 130 };

const path = ref(null);
const head = ref(0);
const tail = ref(0);
const currentOffset = ref(0);
const mouse = ref({
  x: 0,
  y: 0,
});

const dash = {
  width: 100,
  offset: { start: 100, end: 0 },
  gap: {
    width: 720,
  },
};

const tl = gsap.timeline({
  repeat: -1,
  repeatDelay: gsap.utils.random(0.7, 3),
});

let animation;

const defaults = {
  duration: 2,
  ease: 'none',
};

const getPosition = () => {
  let position = mouse.value.x / window.innerWidth;
  return tl.duration() * position;
};

const mouseIsInside = () => {
  const rect = path.value.parentNode.parentNode.getBoundingClientRect();
  const { top, bottom } = rect;
  return mouse.value.y < bottom && mouse.value.y > top;
};

const currentDashPosition = (i) => {
  const offset = animation
    .targets()[0]
    .style.strokeDashoffset.replace('px', '');
  currentOffset.value = parseFloat(offset);
  head.value = dash.width - currentOffset.value;
  tail.value = 0 - currentOffset.value;
};

const onMousemove = (e) => {
  mouse.value = { x: e.clientX, y: e.clientY };
};

watch(mouse, (is, was) => {
  const inside = mouseIsInside();
  if (!was) return;
  if (!inside) return tl.play();
  tl.pause();
  const position = getPosition();
  tl.seek(position);
});

onMounted(() => {
  dash.offset.end = 0 - path.value.getTotalLength();

  document.addEventListener('mousemove', (e) => onMousemove(e));

  animation = gsap.fromTo(
    path.value,
    {
      ...defaults,
      strokeDashoffset: dash.offset.start,
    },
    {
      ...defaults,
      strokeDashoffset: dash.offset.end,
    }
  );
  tl.add(animation);
});
</script>

<template>
  <div class="my-[50vh]">
    <div class="fixed top-0 left-0">
      <div class="flewx">
        <p>head: {{ head }}</p>
        <p>tail: {{ tail }}</p>
      </div>
      <div>
        <p>{{ currentOffset }}</p>
      </div>
    </div>
    <div class="px-12">
      <div class="py-12 border border-gray-800">
        <svg class="w-full h-4">
          <path
            ref="path"
            d="M 0 0 H 720"
            :style="`stroke: #8a11de; stroke-width:20px; 
            fill: none; 
            stroke-dasharray: ${dash.width}px ${dash.gap.width}px;
            stroke-dashoffset: 100px
            `"
          />
        </svg>
      </div>
    </div>

    <!-- <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:bx="https://boxy-svg.com"
      class="border border-pink-600"
    >
      
      <path
        ref="path"
        :style="`stroke: rgb(0, 0, 0); fill: none; stroke-dasharray: ${dash.width}px ${dash.gap.width}px`"
        d="M -12.788 148.272 L 65.229 183.015 L 217.209 137.459 L 349.227 209.18 L 395.744 159.556 L 437.883 182.925 L 525.535 122.756"
      ></path>
    </svg> -->
  </div>
</template>
