// Função para exibir a mensagem de sucesso ao enviar o formulário
function mostrarMensagemSucesso() {
    const mensagemSucesso = document.getElementById("mensagemSucesso");
    mensagemSucesso.classList.add("visivel"); 
    
    // Ocultar a mensagem após 5 segundos
    setTimeout(() => {
        mensagemSucesso.classList.remove("visivel"); // Remove a mensagem
    }, 5000);
}

// Validação do formulário de contato
document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Verificar os campos preenchidos
    if (nome && email && mensagem) {
        mostrarMensagemSucesso();
        this.reset();  // Limpar os campos do formulário
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

// Rolar suavemente ao clicar em um link do menu
document.querySelectorAll("header nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const sectionID = this.getAttribute("href").substring(1);
        document.getElementById(sectionID).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Animações ao rolar a página 
const sections = document.querySelectorAll("section");

function aparecerAoRolar() {
    const triggerPoint = window.innerHeight / 5 * 4; // disparo da animação

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerPoint) {
            section.classList.add("aparecer");
        } else {
            section.classList.remove("aparecer");
        }
    });
}

window.addEventListener("scroll", aparecerAoRolar);
