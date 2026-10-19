/* ========================================================
   BRAT BURGER — SCRIPT PRINCIPAL & INTERATIVIDADE
   ======================================================== */

// Inicialização de Animações ao Rolar a Página (Biblioteca AOS)
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: false,    // Permite que a animação ocorra sempre que rolar para cima e para baixo
      mirror: true,   // Faz o efeito reverso suave ao sair da tela
      duration: 800,  // Velocidade da transição em milissegundos
      offset: 80,     // Distância de ativação antes de entrar na tela
    });
  }
});

// Espaço reservado para as futuras funções do "Parque de Diversões" (Mini-games / Roleta)
console.log("Brat Burger Engine Carregada com Sucesso 🍷🔥");
