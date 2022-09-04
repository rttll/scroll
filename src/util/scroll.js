import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

class Scroller {
  constructor(args) {
    this._timeline = gsap.timeline({ ...args });
  }

  get timeline() {
    return this._timeline;
  }
}

export { Scroller };
export { gsap };
