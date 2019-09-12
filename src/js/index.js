const hamburger = document.querySelector('.hamburger');

const handleClick = () => {
  hamburger.preventDefault();
  hamburger.classList.toggle('hamburger--active');
  console.log('elo');
};

hamburger.addEventListener('click', handleClick);
