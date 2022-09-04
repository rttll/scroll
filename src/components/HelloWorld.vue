<script setup>
import { ref, onMounted } from 'vue';
// import Panel from './Panel.vue';
import Pin from './Pin.vue';

onMounted(() => {
  // const panels = document.getElementsByClassName('panel');
  // for (let panel of panels) {
  //   tl.from(panel, { yPercent: -100 });
  // }
  // ScrollTrigger.create({
  //   animation: tl,
  //   trigger: container.value,
  //   start: 'top top',
  //   end: `+=${document.documentElement.clientHeight * panels.length}`,
  //   markers: true,
  //   pin: true,
  //   scrub: true,
  //   anticipatePin: 1,
  //   // toggleActions: 'restart pause resume pause',
  // });
});
</script>

<template>
  <section class="">
    <!-- <Panel> Hello </Panel> -->
    <Pin />
    <div class="spacer">spacer</div>
    <div class="spacer">spacer</div>
    <!-- <Panel /> -->
    <!-- <Panel /> -->
  </section>
</template>

<style scoped>
.spacer {
  height: 100vh;
}
</style>
