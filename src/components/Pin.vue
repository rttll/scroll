<script setup>
import { ref, onMounted } from 'vue';
import { Scroller } from '../util/scroll';

const base = ref(null);
const container = ref(null);

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  // const base = document.querySelector('.base');
  const container = document.querySelector('.container');
  let panels = document.querySelectorAll('.panel');
  panels = [].slice.call(panels);

  const hero = document.querySelector('.hero');
  const tlHero = gsap.timeline({
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: hero.clientHeight * 2,
      scrub: true,
    },
  });
  // tlHero.to(hero, { rotation: 90, transformOrigin: '-50% -50%' });

  const intro = document.querySelector('.intro');
  const t = gsap.timeline({
    scrollTrigger: {
      trigger: intro,
      start: 'top bottom',
      end: intro.clientHeight,
      scrub: true,
    },
  });
  t.from(intro, { xPercent: -100 });

  const h = document.documentElement.clientHeight;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: `top top`,
      end: container.clientHeight * panels.length,
      scrub: true,
      // markers: true,
      pin: true,
    },
  });

  const props = [
    {
      xPercent: 100,
    },
    {
      yPercent: 100,
    },
    {
      xPercent: -100,
    },
  ];
  for (let index = 0; index < panels.length; index++) {
    const panel = panels[index];
    tl.from(panel, props[index]);
  }
});
</script>

<template>
  <section class="hero">
    <h1>Hello</h1>
  </section>
  <div class="container">
    <section class="intro">
      <p>Keep Scrolling</p>
    </section>
    <section class="panel maroon"><p>1</p></section>
    <section class="panel dark"><p>2</p></section>
    <section class="panel indigo"><p>3</p></section>
  </div>
  <div class="spacer"><p>blank</p></div>
</template>
