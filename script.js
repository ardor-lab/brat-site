/* ========================================================
   BRAT BURGER — ENGINE CINEMATOGRÁFICA & FOCO ÓPTICO
   ======================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------
  // 1. A INTRODUÇÃO CINEMATOGRÁFICA (SPLASH SCREEN)
  // --------------------------------------------------------
  const splashScreen = document.getElementById('splash-screen');
  
  if(splashScreen) {
    const col1 = document.getElementById('splash-col-1');
    const col2 = document.getElementById('splash-col-2');
    const col3 = document.getElementById('splash-col-3');
    const colsContainer = document.getElementById('splash-cols');
    const dot = document.getElementById('splash-dot');

    // Remove o scroll da página enquanto passa a intro
    document.body.style.overflow = 'hidden';

    // A. Revelar as 3 colunas em sequência (Batida Cardiaca)
    setTimeout(() => { col1.style.opacity = '1'; col1.style.transform = 'translateY(0)'; }, 300);
    setTimeout(() => { col2.style.opacity = '1'; col2.style.transform = 'translateY(0)'; }, 1100);
    setTimeout(() => { col3.style.opacity = '1'; col3.style.transform = 'translateY(0)'; }, 1900);

    // B. Apagar colunas e chamar o Mascote (O Ponto Amarelo)
    setTimeout(() => {
      colsContainer.style.opacity = '0';
      
      setTimeout(() => {
        dot.style.opacity = '1';
        dot.style.transform = 'translate(-50%, -50%) scale(1)';
      }, 400); // Entra mal as colunas começam a apagar
    }, 3200);

    // C. O Mascote explode / expande para revelar o site
    setTimeout(() => {
      dot.style.transform = 'translate(-50%, -50%) scale(150)';
      dot.style.opacity = '0';
    }, 4500);

    // D. O ecrã preto da Intro dissolve-se e devolve o scroll ao utilizador
    setTimeout(() => {
      splashScreen.style.opacity = '0';
      setTimeout(() => { 
        splashScreen.style.display = 'none'; 
        document.body.style.overflow = 'auto'; // Devolve o scroll!
      }, 800);
    }, 4800);
  }

  // --------------------------------------------------------
  // 2. MOTOR DE FOCO ÓPTICO NO SCROLL (SALÃO)
  // --------------------------------------------------------
  const images = document.querySelectorAll('.optical-lens-img');

  function renderOpticalFocus() {
    const vh = window.innerHeight;
    const screenCenter = vh / 2;

    images.forEach((img) => {
      const rect = img.getBoundingClientRect();
      const imgCenter = rect.top + (rect.height / 2);
      const dist = Math.abs(screenCenter - imgCenter);

      const focusZone = vh * 0.12;
      const maxBlurZone = vh * 0.65;

      let ratio = 0;
      if (dist > focusZone) {
        ratio = (dist - focusZone) / (maxBlurZone - focusZone);
        ratio = Math.max(0, Math.min(1, ratio));
      }

      const ease = Math.pow(ratio, 1.35);
      const blurPx = (ease * 14).toFixed(2);
      const scaleVal = (1 + (ease * 0.14)).toFixed(3);
      const opacityVal = (1 - (ease * 0.75)).toFixed(2);

      img.style.filter = `blur(${blurPx}px)`;
      img.style.transform = `scale(${scaleVal})`;
      img.style.opacity = opacityVal;
    });
  }

  window.addEventListener('scroll', () => {
    window.requestAnimationFrame(renderOpticalFocus);
  }, { passive: true });

  window.addEventListener('resize', renderOpticalFocus);
  window.addEventListener('load', renderOpticalFocus);
  renderOpticalFocus();

});
