// Função para alternar menu mobile
function toggleMobileMenu() {
  const nav = document.getElementById("navigation");
  nav.classList.toggle("active");
  // Animar ícone do hambúrguer
  const toggle = document.querySelector(".mobile-menu-toggle");
  toggle.classList.toggle("active");
}

// Criar partículas flutuantes dinamicamente
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 20;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    // Tamanho aleatório
    const size = Math.random() * 5 + 2;
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    // Posição aleatória
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    // Delay e duração aleatórios
    particle.style.animationDelay = Math.random() * 10 + "s";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";
    particlesContainer.appendChild(particle);
  }
}

// Inicializar partículas ao carregar
window.addEventListener("DOMContentLoaded", createParticles);
