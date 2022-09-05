<script setup>
import { ref, nextTick, onMounted, useSlots, useAttrs } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ ease: 'none', duration: 1.5 });

onMounted(() => {
  const elements = document.querySelectorAll('[data-target]');
  // ScrollTrigger.batch(elements, {

  // });
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.demoWrapper',
      start: 'top bottom',
      end: '+=1000',
      toggleActions: 'restart none none reverse',
      markers: true,
      scrub: 1.1,
    },
  });

  elements.forEach((el) => {
    tl.from(el, { y: el.dataset.distance }, 0);
  });
  // .from('.background', { y: 50 })
  // .from('.middleground', { y: 150 }, 0)
  // .from('.foreground', { y: 250 }, 0)
  // .from('.text', { y: 500 }, 0);
});
</script>

<template>
  <div class="flexContainer">
    <h1>Scroll down to trigger the animations</h1>
  </div>

  <div class="demoWrapper dark">
    <div class="demo">
      <img
        class="stars"
        data-target
        data-distance="10"
        src="https://assets.codepen.io/32887/parallax-mountain-stars.png"
      />
      <img
        class="background"
        data-target
        data-distance="50"
        src="https://assets.codepen.io/32887/background.png"
      />
      <img
        class="middleground"
        data-target
        data-distance="80"
        src="https://assets.codepen.io/32887/middleground.png"
      />
      <img
        class="foreground"
        data-target
        data-distance="200"
        src="https://assets.codepen.io/32887/foreground.png"
      />
      <img
        class="text"
        data-target
        data-distance="130"
        src="https://assets.codepen.io/32887/night-drive-text.png"
      />
    </div>
  </div>
  <div class="flexContainer footer">
    <h1>more text</h1>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@700&display=swap');

.demo img {
  position: absolute;
  width: 600px;
  height: 600px;
  filter: brightness(1.3);
}

.dark {
  background: #020202;
}

.dark h1 {
  color: #ccc;
}

body {
  font-family: 'Barlow Semi Condensed', sans-serif;
  color: #333;
  margin: 0;
  background: #efefef;
}

.flexContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.demoWrapper {
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
}

.demo {
  position: relative;
  overflow: hidden;
  width: 600px;
  background: #2e2155;
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    #2e2155 1%,
    #040313 100%
  );
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    #2e2155 1%,
    #040313 100%
  );
  background: radial-gradient(ellipse at center, #2e2155 1%, #040313 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2e2155', endColorstr='#040313',GradientType=1 );
}

/* responsive css
@media only screen and (max-width: 600px) {
	.demo img {
		width:300px;
		height:300px;
	}
	
	.demoWrapper {
		height:300px;
	}
	.demo {
		height:300px;
		width:300px;
	}
}
*/
</style>
