/* ========================================================
   BRAT BURGER — ENGINE DE FOCO ÓPTICO NO SCROLL
   ======================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const focusElements = document.querySelectorAll('.scroll-focus-img');

  function updateScrollFocus() {
    const viewportHeight = window.innerHeight;
    const viewportCenter = viewportHeight / 2;

    focusElements.forEach((img) => {
      const rect = img.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;

      // Distância do centro da foto até o centro exato da tela
      const distanceFromCenter = Math.abs(viewportCenter - elementCenter);

      // Raio de tolerância no centro onde a foto fica 100% focada e nítida (18% da altura da tela)
      const sweetSpot = viewportHeight * 0.18;
      // Distância máxima para cálculo do efeito (75% da altura da tela)
      const maxDistance = viewportHeight * 0.75;

      let progress = 0;

      if (distanceFromCenter > sweetSpot) {
        progress = (distanceFromCenter - sweetSpot) / (maxDistance - sweetSpot);
        progress = Math.min(Math.max(progress, 0), 1); // Trava entre 0 e 1
      }

      // Curva suave (easeInOut) para a lente focar/desfocar organicamente
      const smoothCurve = Math.pow(progress, 1.4);

      // Cálculo dos 3 parâmetros cinematográficos:
      // 1. Blur: 0px no centro -> até 10px nas extremidades (entrando ou saindo)
      const blurValue = (smoothCurve * 10).toFixed(2);

      // 2. Escala: 1.00 no centro -> 0.90 nas pontas (efeito de aproximação ao focar)
      const scaleValue = (1 - smoothCurve * 0.10).toFixed(3);

      // 3. Opacidade/Brilho: 1.00 no centro -> 0.35 nas pontas (fade de entrada e saída)
      const opacityValue = (1 - smoothCurve * 0.65).toFixed(2);

      // Aplica na imagem em tempo real
      img.style.filter = `blur(${blurValue}px)`;
      img.style.transform = `scale(${scaleValue})`;
      img.style.opacity = opacityValue;
    });
  }

  // Otimização a 60fps com requestAnimationFrame para funcionar liso no PC e no Celular
  let isTicking = false;
  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        updateScrollFocus();
        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', updateScrollFocus);

  // Dispara o cálculo assim que a página abre
  updateScrollFocus();
});
