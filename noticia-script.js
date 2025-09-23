// Toggle Share Menu
function toggleShareMenu(button) {
    const dropdown = button.nextElementSibling;
    const allDropdowns = document.querySelectorAll('.share-dropdown');
    
    // fechar outros menus abertos
    allDropdowns.forEach(d => {
        if (d !== dropdown) {
            d.classList.remove('active');
        }
    });
    
    // clicar no botão para abrir/fechar o menu
    dropdown.classList.toggle('active');
}

// fechar o menu de compartilhamento ao clicar fora
document.addEventListener('click', function(event) {
    if (!event.target.closest('.share-wrapper')) {
        const allDropdowns = document.querySelectorAll('.share-dropdown');
        allDropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Menu de navegação para mobile
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// funcionalidade dos botões de compartilhamento
document.querySelectorAll('.share-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        const shareType = this.textContent.trim();
        const url = window.location.href;
        const title = document.title;
        
        switch(shareType) {
            case 'WhatsApp':
                window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`);
                break;
            case 'X':
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`);
                break;
            case 'Copiar Link':
                navigator.clipboard.writeText(url).then(() => {
                    alert('Link copiado para a área de transferência!');
                });
                break;
            case 'Email':
                window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
                break;
            case 'Instagram':
                alert('Por favor, copie o link e compartilhe no Instagram Stories ou Direct.');
                navigator.clipboard.writeText(url);
                break;
        }
    });
});