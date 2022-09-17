<script setup>
import { watch, toRef, onMounted } from 'vue';
import { gsap } from 'gsap';
import { times } from 'lodash';

const props = defineProps(['progress']);
const progress = toRef(props, 'progress');

const getStyle = (i) => {
  let top = gsap.utils.random(
    -100,
    document.documentElement.clientHeight + 100
  );
  let left = gsap.utils.random(
    -100,
    document.documentElement.clientWidth + 100
  );
  let d = gsap.utils.random(1, 5);
  let o = gsap.utils.random(0.1, 1);
  return {
    d,
    style: `top: ${top}px; left: ${left}px; width: ${d}px; height: ${d}px; opacity: ${o}`,
  };
};

const stars = times(300, Number).map((int) => {
  const config = getStyle(int);
  return { style: config.style, d: config.d };
});

const tl = gsap.timeline({ paused: true });

onMounted(() => {
  tl.to('.star', {
    x: (i, target, targets) => {
      return parseInt(target.dataset.d) * gsap.utils.random(10, 35);
    },
  });
});

watch(progress, (a) => {
  tl.progress(a);
});
</script>

<template>
  <div class="fixed inset-0 stars-container">
    <div ref="container">
      <template v-for="star in stars">
        <span class="star" :style="star.style" :data-d="star.d"></span>
      </template>
    </div>
  </div>
</template>

<style scoped>
.stars-container {
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
</style>