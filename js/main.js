// Think Curious — main.js

const loader = document.getElementById('loader');
const loaderBar = document.getElementById('loaderBar');
const site = document.getElementById('site');

let progress = 0;
const duration = 2200; // ms
const interval = 40;   // ms per tick
const steps = duration / interval;
const increment = 100 / steps;

const timer = setInterval(() => {
  progress = Math.min(progress + increment + (Math.random() * increment * 0.5), 100);
  loaderBar.style.width = progress + '%';

  if (progress >= 100) {
    clearInterval(timer);
    setTimeout(() => {
      loader.classList.add('hidden');
      site.classList.add('visible');
    }, 300);
  }
}, interval);
