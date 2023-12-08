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

//Verificar se o usuário se encontra na página de contato
document.addEventListener("DOMContentLoaded", function() {
    var botaoContato = document.querySelector(".shortcutContact");
    var secaoContato = document.getElementById("contact");
  
    botaoContato.addEventListener("click", function() {
        botaoContato.style.display = "none";
    });

    window.addEventListener("scroll", function() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollHeight = document.documentElement.scrollHeight;
      var clientHeight = document.documentElement.clientHeight;
      if (isElementVisible(secaoContato) || scrollTop + clientHeight >= scrollHeight - 200) {
        botaoContato.style.display = "none";
      } else {
        botaoContato.style.display = "block";
      }
    });
  
    function isElementVisible(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.bottom >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }
  });  

setInterval(elementVisible, 1)