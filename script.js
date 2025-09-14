function enviarForm(event){
    event.preventDefault()

    const nome = document.querySelector("#nome").value
    const msg = document.querySelector("#mensagem").value
    const tel = "5538998304003"

    const texto = `Olá! me chamo ${nome}, ${msg}`
    const msg_formatada = encodeURIComponent(texto)
    const url = `https://wa.me/${tel}/?text=${msg_formatada}`
    window.open(url, "_blank")
}

const typingElement = document.querySelector('.typing-effect');

if (typingElement) {
    const typed = new Typed(typingElement, {
        strings: ['HTML5', 'CSS3', 'JavaScript', 'UX/UI Designer','Git e GitHub'],
        typeSpeed: 100, 
        backSpeed: 60,  
        loop: true      
    });
}

const mobileMenuButton = document.getElementById('mobile-menu-button');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-link'); // Seleciona todos os links do menu

// 2. Adiciona um evento de clique ao botão
mobileMenuButton.addEventListener('click', () => {
    // Adiciona ou remove a classe 'active' do menu
    menu.classList.toggle('active');
});

// 3. (Bônus) Faz o menu fechar ao clicar em um link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Se o menu estiver ativo, remove a classe 'active' para fechá-lo
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleciona todos os elementos que você quer animar
    const elementsToAnimate = document.querySelectorAll('.foto-perfil, .impact, .cabecalho-sub-titulo, .cabecalho-sub-js, .button, .sobre-titulo, .sobre-caixa, .ability, .skills-icons i, .projetos-titulo, .projetos-card, .contatos-titulo, .formulario-contato');

    // 2. Adiciona a classe 'hidden' a todos eles para prepará-los para a animação
    elementsToAnimate.forEach(element => {
        element.classList.add('hidden');
    });

    // 3. Configura o Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o elemento está visível na tela (isIntersecting)
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para ativar a animação
                entry.target.classList.add('visible');
                
                // (Opcional) Para de observar o elemento depois que ele já foi animado
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% do elemento estiver visível
    });

    // 4. Pede ao observer para observar cada um dos elementos selecionados
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

});

