(() => {
  const mobileMenu = document.querySelector('.js-menu-mobile');
  const openMenuBtn = document.querySelector('.js-open-menu-mobile');
  const closeMenuBtn = document.querySelector('.js-close-menu-mobile');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Закриття мобільного меню на широких екранах при зміні орієнтації
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });
})();