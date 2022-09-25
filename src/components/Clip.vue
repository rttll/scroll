<script setup>
import { ref, reactive, nextTick, watch, onMounted } from 'vue';
import { gsap } from 'gsap';

const circle = (i, x = 'center', y = 'center') => {
  return `circle(${i} at ${x} ${y})`;
};

const duration = 0.25;
const toggleTrigger = ref(null);
const menu = reactive({ open: false });
let tl = gsap.timeline(),
  animation = null;

const buildAnimation = (e) => {
  const r = Math.max(
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  const x = e.pageX + 'px',
    y = e.pageY + 'px';

  animation = tl.fromTo(
    '.clip',
    {
      clipPath: circle('0', x, y),
    },
    {
      clipPath: circle(r * 2 + 'px', x, y),
      ease: 'expo.inOut',
      duration: duration,
    }
  );
};

const toggleMenu = (e) => {
  menu.open = !menu.open;
  if (!animation) buildAnimation(e);
  menu.open ? tl.play() : tl.reverse();
};

onMounted(() => {
  const path = circle('0%');
  gsap.set('.clip', { clipPath: path });
});
</script>

<template>
  <div class="w-screen h-screen">
    <div class="fixed top-0 right-0 z-10">
      <a
        href="#"
        ref="toggleTrigger"
        @click.prevent="toggleMenu"
        class="inline-block p-4 text-3xl leading-none"
        >&times;</a
      >
    </div>
    <section class="p-12">
      <h1 class="text-3xl">fooooo</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        obcaecati rem maxime at, fugiat beatae libero dignissimos porro,
        molestias repellat labore quaerat nisi eius, saepe perspiciatis. Illum
        delectus ipsa aspernatur!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        obcaecati rem maxime at, fugiat beatae libero dignissimos porro,
        molestias repellat labore quaerat nisi eius, saepe perspiciatis. Illum
        delectus ipsa aspernatur!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        obcaecati rem maxime at, fugiat beatae libero dignissimos porro,
        molestias repellat labore quaerat nisi eius, saepe perspiciatis. Illum
        delectus ipsa aspernatur!
      </p>
    </section>

    <div
      class="fixed overflow-y-auto top-0 w-screen h-screen p-12 bg-pink-500 border-[4px] border-white clip"
    >
      <h1 class="text-3xl text-white">hiiiiii</h1>
      <div class="space-y-12">
        <p class="text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum nemo
          blanditiis repudiandae optio maiores hic, minus modi facilis
          reiciendis iusto aliquid libero tempora doloremque saepe magnam
          necessitatibus, nulla minima ad.
        </p>
        <!-- <template v-for="i in 1" :key="i"> </template> -->
      </div>
    </div>
  </div>
</template>
