import { CountUp } from 'countup.js';

const counterEl = document.querySelectorAll('[data-counter]');

counterEl.forEach(item => {
  const endVal = item.dataset.counter;

  const demo = new CountUp(item, endVal, {
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });
  demo.start();
});