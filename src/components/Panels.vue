<script setup>
import { ref, nextTick, onMounted, useSlots, useAttrs } from 'vue';
import { Scroller } from '../util/scroll';

const container = ref(null);
const slots = useSlots();
const attrs = useAttrs();

onMounted(() => {
  const panels = [].slice.call(container.value.children);
  let a = slots,
    b = slots[0];

  const timelines = {
    first: new Scroller({
      scrollTrigger: {
        trigger: panels[0],
        start: 'top bottom',
        end: panels[0].clientHeight,
        scrub: true,
      },
    }),
    main: new Scroller({
      scrollTrigger: {
        trigger: container.value,
        start: `top top`,
        end: container.value.clientHeight * panels.length - 1,
        scrub: true,
        // markers: true,
        pin: true,
      },
    }),
  };

  timelines.first.timeline.from(panels[0], { xPercent: -100 });

  const options = {
    top: {
      yPercent: 100,
    },
    right: {
      xPercent: 100,
    },
    bottom: {
      yPercent: 100,
    },
    left: {
      xPercent: -100,
    },
  };
  const defaults = Object.keys(options);
  nextTick(() => {
    for (let index = 0; index < panels.length - 1; index++) {
      const panel = panels[index + 1];
      const currentDefault = defaults[index + 1] || 0;

      const [top, right, bottom, left] = Object.keys(panel.dataset);
      console.log(top, right, bottom, left);

      timelines.main.timeline.from(panel, config);
    }
    // let a = panels[1].dataset.gsap;
  });
});
</script>

<template>
  <div>
    <div>
      {{ $slots }}
    </div>
    <div ref="container" class="container">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: #f1f1f1;
  height: 100vh;
  position: relative;
}
.container >>> section {
  height: 100vh;
  width: 100%;
  position: absolute;
}
</style>
