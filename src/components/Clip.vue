<script setup>
import { ref, reactive, nextTick, watch, onMounted } from 'vue';
import { gsap } from 'gsap';

const toggleTrigger = ref(null);
const menu = reactive({ open: false });
const toggleMenu = (e) => {
  menu.open = !menu.open;
  const r = Math.max(
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  const path = circle(
    menu.open ? r * 2 + 'px' : '0%',
    e.pageX + 'px',
    e.pageY + 'px'
  );

  animate(path);
};

const circle = (i, x = 'center', y = 'center') => {
  return `circle(${i} at ${x} ${y})`;
};

const masks = {
  circle: {
    hide: circle(0),
    show: circle(200),
  },
  hide: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
};

const animate = (v) => {
  gsap.to('.clip', {
    clipPath: v,
    // ease: 'elastic.out(1, 0.5)',
    ease: 'expo.inOut',
    duration: 0.25,
  });
};

onMounted(() => {
  gsap.set('.clip', { clipPath: masks.circle.hide });
});
</script>

<template>
  <div class="w-screen h-screen bg-pink-500">
    <a
      href="#"
      ref="toggleTrigger"
      @click.prevent="toggleMenu"
      class="fixed top-0 right-0 z-10 p-4 text-3xl leading-none"
      >&times;</a
    >
    <h1 class="text-3xl">fooooo</h1>

    <div
      class="fixed top-0 w-screen min-h-screen p-12 bg-white border border-white clip"
    >
      <h1 class="text-3xl">hiiiiii</h1>
      <p>{{ menu.open }}</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum nemo
        blanditiis repudiandae optio maiores hic, minus modi facilis reiciendis
        iusto aliquid libero tempora doloremque saepe magnam necessitatibus,
        nulla minima ad.
      </p>
    </div>
  </div>
</template>
