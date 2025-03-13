import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.about-me__list', {
    duration: 400,
    showMultiple: true,
    openOnInit: [0],
    elementClass: 'about-me__item',
    triggerClass: 'about-me__inner',
    panelClass: 'about-me__details',
    collapse: true,
    beforeOpen: element => {
      const arrowIcon = element.querySelector('.about-me__icon');
      if (arrowIcon) {
        arrowIcon.style.transform = 'rotate(180deg)';
      }
    },
    beforeClose: element => {
      const arrowIcon = element.querySelector('.about-me__icon');
      if (arrowIcon) {
        arrowIcon.style.transform = 'rotate(0deg)';
      }
    },
  });
});

const refs = {
  nextSkillsButton: document.querySelector('.about-me__skills-button-next'),
};

const swiper = new Swiper('.swiper.about-me__skills', {
  modules: [Navigation, Keyboard],
  loop: true,
  slidesPerView: 2,
  speed: 300,
  navigation: {
    nextEl: '.about-me__skills-button-next',
  },
  breakpoints: {
    768: { slidesPerView: 3 },
    1440: { slidesPerView: 6 },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

refs.nextSkillsButton.addEventListener('mousedown', () => {
  setTimeout(() => refs.nextSkillsButton.blur(), 0);
});
