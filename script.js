// Apple cursor that follows the real mouse
(() => {
  const apple = document.getElementById('apple-cursor');
  if (!apple) return;
  document.addEventListener('mousemove', (e) => {
    apple.style.left = e.clientX + 'px';
    apple.style.top = e.clientY + 'px';
  }, {passive:true});

  // gentle bob when idle
  let last = Date.now();
  let idle = false;
  document.addEventListener('mousemove', () => { last = Date.now(); if (idle) { apple.style.transform = 'translate(-50%,-50%) scale(1)'; idle=false } });
  setInterval(()=>{
    if (Date.now() - last > 1200){ idle = true; apple.style.transform = 'translate(-50%,-50%) rotate(-6deg) scale(0.95)'; }
  }, 500);
})();
