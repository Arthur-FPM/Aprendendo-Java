let opcao = Number(prompt(
    `Escolha uma opção
===============================
[1]Salgados
[2]Bebidas
[3]Lanches
[4]Sobremesa
[5]Sair
===============================
`
))
switch (opcao) {

    case 1:
        alert("Salgados")
        let sacolaSalgado = Number(prompt(
            `Qual produto deseja comprar?
            ============================
            [1]Coxinha
            [2]Kibe
            [3]Pastel
            [4]Empada
            ============================
        `
        ))
        switch (sacolaSalgado) {
            case 1:
                let unidadesCoxinha = Number(Prompt("Quantas unidades de coxinhas?"))
                let totalCompra = unidadesCoxinha * 5
                alert (`${unidadesCoxinha} undTotal =${totalCompra}`
                )
                break;
        
            default:
                break;
        }
        break;
    case 2:
        alert("Bebidas")
        let sacolaBebidas = Number(prompt(
            `Qual produto deseja comprar?
            ============================
            [1]Refri
            [2]Suco
            [3]Cerveja
            [4]Agua
            ============================
        `
        ))
        break;
    case 3:
        alert("Lanches")
        let sacolaLanches = Number(prompt(
            `Qual produto deseja comprar?
            ============================
            [1]XTudo
            [2]XSalada
            [3]XEgg
            [4]XVegan
            ============================
        `
        ))
        break;
    case 4:
        alert("Sobremesa")
        let sacolaSobremesa = Number(prompt(
            `Qual produto deseja comprar?
            ============================
            [1]Milk Shake Baunilha
            [2]Milk Shake Morango
            [3]Milk Shake Paçoca
            [4]Milk Shake Brigadeiro
            ============================
        `
        ))
        break;
    case 5:
        alert("Sair")
 break;
    default:
        alert("Sistema Finalizado ")

}