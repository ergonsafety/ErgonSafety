// Função para verificar se o elemento está visível na janela de visualização
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    // Verificar se pelo menos 20% do elemento está visível
    return (rect.bottom >= 0 && rect.top <= windowHeight * 0.8);
}

function elementVisible(){
    var pages = document.querySelectorAll('.effect');

    pages.forEach(function(pMain) {
        if (isElementInViewport(pMain)) {
            pMain.classList.add('aplicarefeito')
        }
    });

}

setInterval(elementVisible, 1)