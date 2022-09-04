import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

(() => {
  // const base = document.querySelector('.base');
  const container = document.querySelector('.container');
  let panels = document.querySelectorAll('.panel');
  panels = [].slice.call(panels);

  const h = document.documentElement.clientHeight;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      // start: `top ${h}px`,
      // start: `top 700px`,
      start: `top top`,
      end: container.clientHeight * panels.length,
      scrub: true,
      markers: true,
      pin: true,
      // pinSpacing: false,
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
})();
