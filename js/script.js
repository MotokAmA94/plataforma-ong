document.addEventListener('DOMContentLoaded', () =>{

    // 1. SELEÇÃO DO FORMULÁRIO
    const formulario = document.querySelector('form');
    const mensagemFeedback = document.createElement('div');
    mensagemFeedback.id = 'feedback-mensagem';
    if (formulario){
        formulario.insertBefore(mensagemFeedback, formulario.querySelector('button[type="submit"]'));
    }
    // 2. FUNÇÃO DE VALIDAÇÃO E ENVIO
    if (formulario){
        formulario.addEventListener('submit', function(e){
            e.preventDefault();

            mensagemFeedback.textContent = '';
            mensagemFeedback.style.backgroundColor = 'transparent';

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();

            let isValid = true;

            // 3. VALIDAÇÃO SIMPLES COM JAVASCRIPT

            if (email === ""){
                isValid = false;
                exibirMensagem('O campo E-mail é obrigatório.', 'error');
                return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)){
                isValid = false;
                exibirMensagem('Por favor, insira um formato de e-mail válido.', 'error');
                return;
            }
            // 4. SE TUDO ESTIVER VÁLIDO: SIMULAÇÃO DE ENVIO
            if (isValid){
                exibirMensagem(`Obrigado, ${nome}! Seu cadastro foi enviado com sucesso.`, 'sucess');
                formulario.reset();
            }
        });
    }
    // 5. FUNÇÃO AUXILIAR PARA EXIBIR MENSAGENS (Manipulação do DOM)
    function exibirMensagem(texto, tipo) {
        mensagemFeedback.textContent = texto;
        mensagemFeedback.style.padding = '10px';
        mensagemFeedback.style.borderRadius = '5px';
        mensagemFeedback.style.textAlign = 'center';
        mensagemFeedback.style.marginTop = '15px';

        if (tipo === 'sucess') {
            mensagemFeedback.style.backgroundColor = '#d4edda';
            mensagemFeedback.style.color = '#155724';
        } else if (tipo === 'error') {
            mensagemFeedback.style.backgroundColor = '#f8d7da';
            mensagemFeedback.style.color = '#721c24';
        }
    }
});