<script setup>
import { ref, nextTick, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scroller = ref(null);
const container = ref(null);
const scene = ref(null);
const sceneWidth = ref(4000);
const progress = ref(0);

let tl;

onMounted(() => {
  nextTick(() => {
    const foo = document.getElementById('foo');

    gsap.set([scroller.value, container.value, scene.value], {
      css: { width: sceneWidth.value + 'px' },
    });
    gsap.set([scroller.value], {
      css: { height: '4000px' },
    });
    tl = gsap.timeline({ paused: true });
    tl.to(scene.value, {
      // ease: 'expo.inOut',
      x: () => `-${sceneWidth.value}`,
      duration: 10,
    });
    const scroll = ScrollTrigger.create({
      trigger: scroller.value,
      end: () => `${sceneWidth.value * 20}`,
      onUpdate: (self) => {
        tl.progress(self.progress);
        const left = self.direction == 1;
        gsap.to(scene.value.children, {
          x: (index, el) => {
            return (left ? '-=' : '+=') + '50px';
            // return (left ? '-=' : '+=') + gsap.utils.random(30, 50) + 'px';
          },
          ease: 'back',
          duration: 0.7,
          stagger: 0.3,
          onInterrupt() {
            console.log('hi');
          },
        });
      },
    });
  });
});
</script>

<template>
  <div>
    <div ref="scroller" class="z-[-1] h-screen"></div>

    <div
      ref="container"
      data-container
      class="fixed inset-0 h-screen overflow-hidden bg-pink-100"
    >
      <div ref="scene" class="flex h-screen px-12 space-x-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1607749111659-e1c8e05f5f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJpZW5kc3xlbnwwfHwwfHw%3D&auto=format"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1543807535-eceef0bc6599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZW5kc3xlbnwwfHwwfHw%3D&auto=format"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJpZW5kc3xlbnwwfHwwfHw%3D&auto=format"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1607748851687-ba9a10438621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZyaWVuZHN8ZW58MHx8MHx8&auto=format"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style>
.stripes {
  background: repeating-linear-gradient(
    45deg,
    #606dbc,
    #606dbc 10px,
    #465298 10px,
    #465298 20px
  );
}
</style>
