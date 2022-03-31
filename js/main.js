const target = document.getElementById("drower-menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("drower-nav");
  nav.classList.toggle('in');
});