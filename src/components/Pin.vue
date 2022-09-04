<script setup>
import { ref, onMounted } from 'vue';
import { Scroller } from '../util/scroll';

const base = ref(null);
const container = ref(null);

let go = false;

onMounted(() => {
  const scroller = new Scroller({
    scrollTrigger: {
      trigger: container.value,
      start: 'top top',
      end: `+=${document.documentElement.clientWidth * 3}`,
      scrub: true,
      markers: true,
      pin: true,
    },
  });
  const tl = scroller.timeline;

  const panels = [].slice.call(container.value.children);

  for (let panel of panels) {
    tl.from(panel, {
      xPercent: 100,
    });
  }
  // tl.from(r.value, {
  //   yPercent: 100,
  // })
  //   .from(g.value, {
  //     xPercent: -100,
  //   })
  //   .from(b.value, {
  //     yPercent: -100,
  //   });
});
</script>

<template>
  <div class="base" ref="base">
    <div class="container" ref="container">
      <section ref="r" class="r"><p>1</p></section>
      <section ref="g" class="g"><p>2</p></section>
      <section ref="b" class="b"><p>3</p></section>
    </div>
  </div>
</template>

<style scoped>
.base {
  background: darkorange;
  position: relative;
  overflow: hidden;
  z-index: -1;
}
.container {
  position: relative;
  /* top: -100vh; */
}
.container > section {
  height: 100vh;
  width: 100%;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
}
p {
  color: white;
}
.r {
  background: maroon;
}
.g {
  background: #111;
}
.b {
  background-color: indigo;
}
</style>
