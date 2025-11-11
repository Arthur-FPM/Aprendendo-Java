const botao = document.querySelector("#btn")

function chamaFuncao() {
    alert("Olá")
    segundaFuncao()
}

function segundaFuncao() {
    alert("segunda função chamada")
    terceiraFuncao()

}
function terceiraFuncao() {
    alert("terceira Função chamada")
    quartaFuncao()
}
function quartaFuncao() {
    alert("quarta Função chamada")
    quintaFuncao()
}
function quintaFuncao() {
    alert("quinta Função chamada")
    chamaFuncao()
}


botao.addEventListener(`click`, chamaFuncao)
