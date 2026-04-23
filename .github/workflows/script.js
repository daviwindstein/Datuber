// Abrir e fechar menus
function toggleMenu(id) {
    let menu = document.getElementById(id);
    // Fecha outros menus abertos
    document.querySelectorAll('.dropdown').forEach(d => {
        if(d.id !== id) d.style.display = 'none';
    });
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Fechar menus se clicar fora
window.onclick = function(event) {
    if (!event.target.matches('.btn-criar') && !event.target.matches('.profile-img')) {
        document.querySelectorAll('.dropdown').forEach(d => d.style.display = 'none');
    }
}

// Lógica de instalação (PWA)
let installPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    installPrompt = e;
    document.getElementById('installBtn').style.display = 'block';
});

document.getElementById('installBtn').addEventListener('click', async () => {
    if (installPrompt) {
        installPrompt.prompt();
        const { outcome } = await installPrompt.userChoice;
        if (outcome === 'accepted') {
            console.log('Usuário instalou o Datuber');
        }
        installPrompt = null;
    }
});
