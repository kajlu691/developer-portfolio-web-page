import { elements } from './views/base';

// Mobile navigation hamburger menu
elements.hamburger.addEventListener('click', e => {
  // Prevent event from firing twice
  e.stopImmediatePropagation();
  // Navigation's animation toggle
  elements.hamburger.classList.toggle('hamburger--active');
  elements.nav.classList.toggle('navigation--active');
});
