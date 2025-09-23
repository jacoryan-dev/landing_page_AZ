// --- DADOS DA EQUIPE (AJUSTADO PARA O TEMA DE BIBLIOTECA) ---
const teamData = [
    {
        name: "Ana Oliveira",
        role: "Curadora Chefe de Conteúdo",
        image: "https://via.placeholder.com/400x400", // Troque pelo caminho da imagem correta
        bio: "Com uma paixão por descobrir novas vozes e resgatar clássicos esquecidos, Ana lidera nossa equipe de curadoria para garantir que apenas as melhores histórias cheguem até você. Sua missão é construir uma biblioteca diversa e inspiradora para todos os tipos de leitores."
    },
    {
        name: "Carlos Silva",
        role: "Especialista em Clássicos",
        image: "https://via.placeholder.com/400x400", // Troque pelo caminho da imagem correta
        bio: "Carlos é nosso guardião da literatura clássica. Com profundo conhecimento em obras que moldaram gerações, ele seleciona e contextualiza os grandes mestres, tornando suas histórias acessíveis e relevantes para o público contemporâneo."
    },
    {
        name: "Marina Santos",
        role: "Editora de Ficção Científica",
        image: "https://via.placeholder.com/400x400", // Troque pelo caminho da imagem correta
        bio: "Viajante de mundos imaginários, Marina é a especialista que traz as mais incríveis sagas de ficção científica e fantasia para a nossa plataforma. Ela está sempre em busca de novas realidades para expandir os horizontes dos nossos leitores."
    },
    {
        name: "João Pereira",
        role: "Gerente de Comunidade",
        image: "https://via.placeholder.com/400x400", // Troque pelo caminho da imagem correta
        bio: "João é a ponte entre nossa biblioteca e nossos leitores. Ele organiza clubes do livro, debates com autores e garante que a comunidade esteja sempre engajada e conectada através do poder das histórias. Sua paixão é criar um espaço acolhedor para todos."
    }
];

// --- LÓGICA DO CARROSSEL DA EQUIPE ---
const teamTrack = document.querySelector('.team-track');
const teamCards = document.querySelectorAll('.team-card');
let currentSlide = 0;

// Função para calcular quantos cards exibir com base na tela
function getCardsPerView() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1200) return 2;
    return 3;
}

function moveCarousel(direction) {
    if (!teamTrack || teamCards.length === 0) return; // Evita erros se os elementos não existirem

    const cardsPerView = getCardsPerView();
    const maxSlide = teamCards.length - cardsPerView;
    
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide > maxSlide) {
        currentSlide = maxSlide;
    }
    
    // O cálculo agora é dinâmico, baseado no tamanho real do card e no gap do CSS
    const cardWidth = teamCards[0].offsetWidth;
    const gap = parseInt(window.getComputedStyle(teamTrack).gap) || 30;
    const translateX = currentSlide * -(cardWidth + gap);
    
    teamTrack.style.transform = `translateX(${translateX}px)`;
}

// --- LÓGICA DO MODAL DA EQUIPE ---
function openTeamModal(index) {
    const modal = document.getElementById('teamModal');
    if (!modal) return;

    // Popula o modal com os dados do membro da equipe selecionado
    modal.querySelector('#modalImage').src = teamData[index].image;
    modal.querySelector('#modalImage').alt = `Foto de ${teamData[index].name}`;
    modal.querySelector('#modalName').textContent = teamData[index].name;
    modal.querySelector('#modalRole').textContent = teamData[index].role;
    modal.querySelector('#modalBio').textContent = teamData[index].bio;
    
    // Exibe o modal
    modal.classList.add('active'); 
    document.body.classList.add('modal-open');
}

function closeTeamModal() {
    const modal = document.getElementById('teamModal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

// Event listener para fechar o modal com a tecla ESC
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('teamModal');
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeTeamModal();
    }
});

// O carrossel se ajusta ao redimensionar a janela
window.addEventListener('resize', () => {
    if (teamTrack) {
        currentSlide = 0;
        teamTrack.style.transform = 'translateX(0)';
    }
});