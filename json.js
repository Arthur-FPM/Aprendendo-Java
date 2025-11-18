function pegarDados() {
    fetch(`pessoas.json`)
        .then(resposta => resposta.json())
        .then(dados => {const container = document.querySelector
                (".container")
            const { nome, descricao } = dados

            dados.forEach(pessoa => {
                const { nome, descricao } = pessoa
                const div = document.createElement
                ("div")
                div.classList.add(`card` )
                div.innerHTML = ` <h2>${nome}</h2>
            <p>${descricao}</p>`

            container.appendChild(div)
            });

        })
} pegarDados()