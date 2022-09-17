<script setup>
import { ref, nextTick, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BG from './BG.vue';
import Stars from './Stars.vue';

gsap.registerPlugin(ScrollTrigger);

const container = ref(null);
const sceneWidth = ref(0);
const progress = ref(0);

let tl, panels;

const setSceneWidth = () => {
  panels.map((p) => (sceneWidth.value += p.offsetWidth));
};

ScrollTrigger.addEventListener('refreshInit', setSceneWidth);

onMounted(() => {
  const star = document.getElementById('star');
  panels = [].slice.call(container.value.querySelectorAll('[data-section]'));
  setSceneWidth();
  nextTick(() => {
    const starTL = gsap.timeline({ paused: true });
    starTL.to(star, {
      ease: 'none',
      x: '-=200px',
      duration: 1,
    });

    tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.value,
        end: () => `+=${sceneWidth.value * 20}`,
        pin: true,
        scrub: true,
        // markers: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          progress.value = self.progress;
          starTL.progress(self.progress);
        },
      },
    });
    tl.to(panels, {
      ease: 'none',
      x: () => `-${sceneWidth.value}`,
      duration: 1,
    });
  });
});
</script>

<template>
  <div>
    <!-- <BG /> -->
    <Stars :progress="progress" />
    <div id="star" class="fixed z-40 w-3 h-3 bg-red-600 top-6 left-12"></div>
    <div ref="container" data-container class="fixed inset-0 flex h-screen">
      <section
        data-section
        class="flex items-center justify-center h-screen border-l border-r border-white w-[50%] shrink-0"
      >
        <p class="text-4xl text-gray-800">1</p>
      </section>
      <section data-section class="border border-white shrink-0">
        <img
          src="https://images.unsplash.com/photo-1663349487048-34ae9121f440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=278&q=80"
          alt=""
        />
      </section>
      <section
        data-section
        class="flex items-center justify-center w-screen h-screen border-r border-white shrink-0"
      >
        <p class="text-4xl text-gray-800">2</p>
      </section>
      <section
        data-section
        class="flex items-center justify-center w-screen h-screen border-r border-white shrink-0"
      >
        <p class="text-4xl text-gray-800">3</p>
      </section>
    </div>
  </div>
</template>
