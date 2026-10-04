'use strict';
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
  }));
}
const filters = document.querySelectorAll('.filter');
const search = document.querySelector('#project-search');
const cards = [...document.querySelectorAll('.project-card')];
let category = 'All projects';
function updateProjects() {
  const query = search.value.toLowerCase().trim();
  let visible = 0;
  cards.forEach(card => {
    const match = (category === 'All projects' || card.dataset.category === category) && card.dataset.search.includes(query);
    card.hidden = !match; if (match) visible++;
  });
  document.querySelector('#result-count').textContent = `${visible} ${visible === 1 ? 'project' : 'projects'}`;
  document.querySelector('#no-results').hidden = visible !== 0;
}
filters.forEach(button => button.addEventListener('click', () => {
  category = button.dataset.filter;
  filters.forEach(other => { const selected = other === button; other.classList.toggle('active', selected); other.setAttribute('aria-pressed', String(selected)); });
  updateProjects();
}));
if (search) search.addEventListener('input', updateProjects);
const lightbox = document.querySelector('#lightbox');
if (lightbox) {
  document.querySelectorAll('.enlarge').forEach(button => button.addEventListener('click', () => {
    lightbox.querySelector('img').src = button.dataset.image;
    lightbox.querySelector('img').alt = button.dataset.caption;
    lightbox.querySelector('p').textContent = button.dataset.caption;
    lightbox.showModal(); document.body.classList.add('dialog-open');
  }));
  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => { if (event.target === lightbox) { const r=lightbox.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)lightbox.close(); } });
  lightbox.addEventListener('close', () => document.body.classList.remove('dialog-open'));
}
