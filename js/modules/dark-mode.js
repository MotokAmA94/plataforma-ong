function loadDarkModeToggle() {
    const button = document.getElementById('toggle-dark-mode');
    const body = document.body;
    const storageKey = 'user-dark-mode';

    // 1. carrega a preferêmcoa salva ao iniciar
    const savedPreference = localStorage.getItem(storageKey);
    if (savedPreference === 'true') {
        body.classList.add('dark-mode');
    }

    // 2. adiciona o evento de clique ao botão
    button.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem(storageKey, isDarkMode);

        button.textContent = isDarkMode ? 'Modo Claro' : 'Modo Escuro';
    });
}

export { loadDarkModeToggle };