/* ========================================================
   BRAT BURGER — SCRIPT PRINCIPAL & INTERATIVIDADE
   ======================================================== */

// Inicialização de Animações ao Rolar a Página (Biblioteca AOS)
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: true,     // Anima apenas na primeira vez que o elemento aparece
      duration: 800,  // Velocidade da transição em milissegundos
      offset: 100,    // Distância de ativação antes de entrar na tela
    });
  }
});

// Espaço reservado para as futuras funções do "Parque de Diversões" (Mini-games / Roleta)
console.log("Brat Burger Engine Carregada com Sucesso 🍷🔥");
