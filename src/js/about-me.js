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

const swiper = new Swiper('.about-me__skills', {
  modules: [Navigation],
  loop: true,
  slidesPerView: 2,
  spaceBetween: 0,
  speed: 1000,
  navigation: {
    nextEl: '.about-me__skills-button-next',
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1440: { slidesPerView: 6 },
  },
  on: {
    slideChange: function () {
      highlightActiveSkill(this);
    },
  },

  touchEventsTarget: 'wrapper',
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  grabCursor: true,
});

function highlightActiveSkill(swiper) {
  const skills = document.querySelectorAll('.about-me__skill-item');
  skills.forEach(skill => skill.classList.remove('active'));

  const activeIndex = swiper.realIndex; // отримуємо реальний індекс активного слайда
  skills[activeIndex]?.classList.add('active'); // додаємо клас для виділення активного кружечка
}
