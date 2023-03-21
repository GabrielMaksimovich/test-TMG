'use strict';

// Sticky nav
function makeNavSticky(stickyElSelector, targetSelector) {
  const stickyEl = document.querySelector(`.${stickyElSelector}`);
  const targetEl = document.querySelector(targetSelector);
  const targetElOffsetTop = targetEl.offsetTop;

  function handleScroll() {
    if (window.scrollY >= targetElOffsetTop) {
      stickyEl.classList.add(`${stickyElSelector}--sticky`);
    } else {
      stickyEl.classList.remove(`${stickyElSelector}--sticky`);
    }
  }

  window.addEventListener('scroll', handleScroll);
}

makeNavSticky('nav-wrapper', '.recommends');
// const intro = document.querySelector('.nav-wrapper');
// // eslint-disable-next-line no-undef
// const obs = new IntersectionObserver(
//   function(entries) {
//     const ent = entries[0];
//
//     if (ent.isIntersecting === false) {
//       document.body.classList.add('nav-wrapper--sticky');
//     }
//
//     if (ent.isIntersecting === true) {
//       document.body.classList.remove('nav-wrapper--sticky');
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: '-80px',
//   }
// );
//
// obs.observe(intro);
