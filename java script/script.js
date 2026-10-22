
const formulario = document.getElementById("formCadastro");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    if (senha.value !== confirmarSenha.value) {
        mensagem.textContent = "As senhas não são iguais.";
        mensagem.style.color = "red";
        return;
    }

    mensagem.textContent = "Cadastro validado com sucesso!";
    mensagem.style.color = "green";

    console.log({
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value
    });
});
