<script setup>
import { onMounted, ref } from 'vue';
import { Scroller, gsap, ScrollTrigger } from '../util/scroll';

const container = ref(null);

onMounted(() => {
  const targets = document.querySelectorAll('[data-scroll]');

  targets.forEach((target) => {
    let tl = gsap.timeline().to(target, { y: '-=30px', duration: 1 });
    ScrollTrigger.create({
      trigger: target,
      animation: tl,
      start: 'top bottom',
      end: 'bottom top',
      toggleActions: 'play none none reverse',
      scrub: true,
      markers: true,
      onLeave: () => {
        console.log('done');
      },
    });
  });
  // targets.forEach((target) => {
  //   const scroller = new Scroller({
  //     scrollTrigger: {
  //       trigger: target,
  //       start: 'top 90%',
  //       end: window.innerHeight,
  //       scrub: true,
  //     },
  //   });
  //   scroller.timeline.to(target, { y: '-=100', duration: 1 });
  // });
});
</script>

<template>
  <div class="">
    <div class="h-screen">blank</div>
    <div class="flex items-center">
      <section class="m-auto space-y-4">
        <h2 class="text-lg">the heading</h2>
        <div class="grid grid-cols-2 gap-4">
          <div data-scroll>
            <img src="https://picsum.photos/400/600" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/400/600" alt="" />
          </div>
        </div>
      </section>
    </div>
    <div class="h-screen">blank</div>

    <div class="flex items-center">
      <section class="m-auto space-y-4">
        <h2 class="text-lg">the heading</h2>
        <div class="grid grid-cols-2 gap-4">
          <div data-scroll>
            <img src="https://picsum.photos/400/600" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/400/600" alt="" />
          </div>
        </div>
      </section>
    </div>
    <div class="h-screen">blank</div>
  </div>
</template>

<style>
.stripes {
  background: repeating-linear-gradient(
    0deg,
    #606dbc,
    #606dbc 1px,
    #465298 3px,
    #465298 3px
  );
}
</style>
