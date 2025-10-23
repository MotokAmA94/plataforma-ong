// Mapeamento das rotas para os IDs das seções no HTML
/**
const routes = {
    '': 'home-view',
    '#projetos': 'projetos-view',
    'cadastro': 'cadastro-view',
    '#home': 'home-view'
};
*/

// SPA básico
// mostra apenas a view ativa
function handleRouting() {
    const currentHash = window.location.hash || '#home';

    const routes = {
        '#home': 'home-view',
        '#projetos': 'projetos-view',
        '#cadastro': 'cadastro-view',
    };
    const targetId = routes[currentHash] /** || routes['']; */
    if (!targetId) return;

    document.querySelectorAll('.page-view').forEach(view => {
        view.classList.add('hidden');
        view.classList.remove('active');
    });

    const targetView = document.getElementById(targetId);
    if (targetView) {
        targetView.classList.remove('hidden');
        targetView.classList.add('active');
    }

/**    document.querySelectorAll('nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (href.endsWith('.html')) {
            const hash = '#' + href.replace('.html', '');
            link.setAttribute('href', hash);
        }
    }); */
}

window.addEventListener('load', handleRouting);
window.addEventListener('hashchange', handleRouting);

export { handleRouting };