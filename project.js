// toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
document.addEventListener('click', function (e) {
  console.log('Target Klik:', e.target);
  console.log('Klik di dalam hamburger?', hamburger.contains(e.target));
  console.log('Klik di dalam navbar?', navbarNav.contains(e.target));
  
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
     console.log('Tutup Menu!');
     navbarNav.classList.remove('active');
  }
});