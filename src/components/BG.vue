<script setup>
import { ref, nextTick, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const loading = ref(true);
const container = ref(null);
const sceneWidth = ref(0);

let tl, panel;

const getParent = () => {
  let parent = container.value.parentNode;
  while (true) {
    if (parent.classList.contains('pin-spacer')) parent = parent.parentNode;
    else {
      break;
    }
  }
  return parent;
};

const setSceneWidth = () => {
  const parent = getParent();
  sceneWidth.value = parent.scrollWidth;
};

ScrollTrigger.addEventListener('refreshInit', setSceneWidth);

onMounted(() => {
  panel = container.value.querySelector('[data-bg]');
  setSceneWidth();
  nextTick(() => {
    const scroller = ScrollTrigger.create({
      trigger: container.value,
      start: 'top top',
      end: 'top top',
      endTrigger: '#end',
      scrub: true,
      onUpdate: (self) => {
        console.log(self);
      },
    });

    tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.value,
        start: 'top top',
        end: () => `+=${sceneWidth.value * 20}`,
        pin: true,
        scrub: true,
        // markers: true,
        invalidateOnRefresh: true,
      },
    });
    tl.to(panel, {
      ease: 'none',
      x: () => `-${sceneWidth.value}`,
      duration: 1,
    });
  });
});
</script>

<template>
  <div
    ref="container"
    class="fixed inset-0 h-screen bg-purple-200"
    :style="`width: ${sceneWidth}px; min-width: ${sceneWidth}px`"
  >
    <section
      data-bg
      :style="`width: ${sceneWidth}px; min-width: ${sceneWidth}px`"
      class="w-full h-screen bg-indigo-900"
    >
      hiii
    </section>
  </div>
</template>
