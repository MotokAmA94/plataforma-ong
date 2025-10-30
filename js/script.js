// import de todos os módulos necessários
import { handleRouting } from "./modules/router.js";
import { initValidation } from './modules/validation.js';
import { loadProjects } from './modules/templates.js';
import { loadDarkModeToggle } from "./modules/dark-mode.js";

// Inicia a aplicação
document.addEventListener('DOMContentLoaded', () => {
    handleRouting();
    loadProjects();
    initValidation();
    loadDarkModeToggle();

    console.log("Aplicação SPA, Modular e com Templates JS Inicializada.");
});