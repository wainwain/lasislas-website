window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const wrapper = document.querySelector('.lore-wrapper');

  wrapper.style.backgroundPosition = `center calc(50% + ${scrollY * 0.2}px)`;
});
