document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const rect = img.getBoundingClientRect();
    for (let i = 0; i < 10; i++) {
      const butterfly = document.createElement('img');
      butterfly.src = 'butterfly.png';
      butterfly.className = 'butterfly';
      butterfly.style.position = 'fixed';
      butterfly.style.left = `${rect.left + Math.random() * rect.width}px`;
      butterfly.style.top = `${rect.top + Math.random() * rect.height}px`;
      butterfly.style.width = '30px';
      butterfly.style.height = '30px';
      butterfly.style.pointerEvents = 'none';
      butterfly.style.zIndex = 20;
      butterfly.style.animation = 'butterfly-fly 4s ease-out forwards';
      butterfly.style.transition = 'opacity 1s ease-out';
      document.body.appendChild(butterfly);
      setTimeout(() => butterfly.remove(), 4000);
    }
  });
});