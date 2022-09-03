<script setup>
import { ref, onMounted } from 'vue';
import { timeline } from '../util/scroll';
import Panel from './Panel.vue';

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
    <!-- <div ref="container" class="panel-container">
      <Panel v-for="n in 5" :key="n" ref="panels">
        <h1>{{ n }}</h1>
      </Panel>
    </div> -->
    <Panel> Hello </Panel>
    <Panel />
    <Panel />
  </section>
</template>

<style scoped>
.panel-container {
  border: 3px dashed black;
}

a {
  color: #42b983;
}
</style>
