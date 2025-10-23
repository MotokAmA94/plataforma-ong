// Função auxiliar para exibir mensagens
function exibirMensagem(texto, tipo) {
    const mensagemFeedback = document.getElementById('feedback-mensagem');
    if (!mensagemFeedback) return;

    mensagemFeedback.textContent = texto;
    mensagemFeedback.style.padding = '10px';
    mensagemFeedback.style.borderRadius = '5px';
    mensagemFeedback.style.textAlign = 'center';
    mensagemFeedback.style.marginTop = '15px';

    if (tipo === 'success') {
        mensagemFeedback.style.backgroundColor = '#d4edda';
        mensagemFeedback.style.color = '#155724';
    } else if (tipo === 'error') {
        mensagemFeedback.style.backgroundColor = '#fcdada';
        mensagemFeedback.style.color = '#593c30';
    }
}

// Inicializa a validação do formulário de cadastro.

function initValidation() {
    const formulario = document.querySelector('form');
    if (!formulario) return;

    let mensagemFeedback = document.getElementById('feedback-mensagem');
    if (!mensagemFeedback) {
        mensagemFeedback = document.createElement('div');
        mensagemFeedback.id = 'feedback-mensagem';
        formulario.insertBefore(mensagemFeedback, formulario.querySelector('button[type="submit"]'));
    }

    // versão sincrona
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        mensagemFeedback.textContent = '';
        mensagemFeedback.style.backgroundColor = 'transparent';

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();

        let isValid = true;

        // validação avançada (verificação de consistencia de dados)

        // email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            exibirMensagem('Por favor, insira um formato de e-mail válido (ex: email@dominio.com).', 'error');
            return;
        }
        
        // idade mínima
        const dataNascInput = document.getElementById('dataNasc').value;
        const dataNasc = new Date(dataNascInput);
        const idadeLimite = new Date();
        idadeLimite.setFullYear(idadeLimite.getFullYear() - 18);

        if (dataNascInput === "" || dataNasc > idadeLimite) {
            isValid = false;
            exibirMensagem('Você deve ter pelo menos 18 anos para se cadastrar.', 'error');
            return;
        }

        // simulação de sucesso instantâneo
        if (isValid) {
            exibirMensagem(`Obrigado, ${nome}! Seu cadastro foi validado e enviado!`, 'success');
            formulario.reset();
        }
    });
}

export { initValidation };