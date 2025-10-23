import { projetosData } from "./data.js";

function createProjectTemplate(projeto) {
    return `
        <article class="project-card">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <img src="${projeto.imagem}" alt="${projeto.alt}">
        </article>
    `;
}

// Função principal que carrega todos os projetos no DOM
function loadProjects() {
    const container = document.getElementById('projetos-dinamicos');
    if (!container) return;

    const projectsHTML = projetosData.map(projeto => {
        return createProjectTemplate(projeto);
    }).join('');

    container.innerHTML = projectsHTML;
}

export { loadProjects };