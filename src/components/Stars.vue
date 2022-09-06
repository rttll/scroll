<script setup>
import { ref, nextTick, onMounted, useSlots, useAttrs } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { times } from 'lodash';
import { Scroller } from '../util/scroll';

const getStyle = (i) => {
  let top = gsap.utils.random(
    -100,
    document.documentElement.clientHeight + 100
  );
  let left = gsap.utils.random(
    -100,
    document.documentElement.clientWidth + 100
  );
  return `top: ${top}px; left: ${left}px;`;
};

const stars = times(300, Number).map((int) => {
  return { style: getStyle(int) };
});

const scroller = new Scroller({});

onMounted(() => {
  scroller.timeline.to('.star', { x: 100 });
});
</script>

<template>
  <div class="container">
    <div ref="container">
      <template v-for="star in stars">
        <span class="star" :style="star.style"></span>
      </template>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  background: #0a0133;
}
.star {
  background: white;
  width: 5px;
  height: 5px;
  position: absolute;
  display: flex;
}
.back {
  border-radius: 50%;
  filter: blur(1px);
  opacity: 0.4;
}
</style>
