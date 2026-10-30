document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.exp-panel').forEach((panel) => {
    panel.addEventListener('mouseenter', () => activatePanel(panel));
    panel.addEventListener('click', () => activatePanel(panel));
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = document.querySelector('.nav-pill')?.offsetHeight || 0;
      window.scrollTo({ top: target.offsetTop - offset - 16, behavior: 'smooth' });
    });
  });

  initFavoritoPanelReflect();
});

function initFavoritoPanelReflect() {
  const section = document.querySelector('.favorito');
  const panel = document.querySelector('.favorito__panel');
  const sourceImg = section?.querySelector('.favorito__bg img');
  if (!section || !panel || !sourceImg) return;

  const sync = () => syncFavoritoPanelReflect(section, panel, sourceImg);
  if (sourceImg.complete) sync();
  else sourceImg.addEventListener('load', sync);

  window.addEventListener('resize', sync);
  window.addEventListener('scroll', sync, { passive: true });
}

function syncFavoritoPanelReflect(section, panel, sourceImg) {
  const reflectImg = panel.querySelector('.favorito__panel-reflect img');
  if (!reflectImg || !sourceImg.naturalWidth) return;

  const sectionRect = section.getBoundingClientRect();
  const panelRect = panel.getBoundingClientRect();
  const scale = Math.max(sectionRect.width / sourceImg.naturalWidth, sectionRect.height / sourceImg.naturalHeight);
  const width = sourceImg.naturalWidth * scale;
  const height = sourceImg.naturalHeight * scale;
  const offsetX = (sectionRect.width - width) / 2;
  const offsetY = (sectionRect.height - height) / 2;

  reflectImg.style.width = `${width}px`;
  reflectImg.style.height = `${height}px`;
  reflectImg.style.left = `${offsetX - (panelRect.left - sectionRect.left)}px`;
  reflectImg.style.top = `${offsetY - (panelRect.top - sectionRect.top)}px`;
}

function activatePanel(active) {
  document.querySelectorAll('.exp-panel').forEach((p) => {
    p.classList.toggle('exp-panel--active', p === active);
  });
}
