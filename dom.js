const botao = document.querySelector("#botao")
const titulo = document.querySelector("#titulo")
function trocaTexto(){
    titulo.innerText = "machiebello"
}
botao.addEventListener("click", trocaTexto)