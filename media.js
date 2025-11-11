/*Somar todos od valores e dividir pelo numero total de valores */
let n1 = Number(prompt("Digite a primeira nota"))
let n2 = Number(prompt("Digite a segunda nota"))
let n3 = Number(prompt("Digite a terceira nota"))
let n4 = Number(prompt("Digite a quarta nota"))
let resultado = n1 + n2 + n3 + n4 
let media = resultado / 4


if (media >= 8) {
    alert(`Sua Media foi de ${media} voce foi aprovado`)
} else {
    alert(`Sua Media foi de ${media} voce foi reprovado`)
}