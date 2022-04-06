// Selecionando a lista (ul da seção de filmes) do Html
const listaFilme = document.querySelector ('.secaoFilmes')

// Listando os filmes com loop para procurar e montar template (li) 
function listarFilmes (colecaoFilmes) {
    listaFilme.innerHTML = ""

    colecaoFilmes.forEach (
        function (filme) {
            const template = criarTemplate(filme)
            listaFilme.appendChild(template)
        })
       
}

listarFilmes(filmes)

// Criando Template com Html
function criarTemplate (parFilme) {

    const li = document.createElement("li")

    li.innerHTML = `
    <img src="${parFilme.url}" alt="${parFilme.nome}">
    <h2>${parFilme.nome}</h2>
    `
    return li

}


function filtrarFilme (filtroCategoria) {

    // Loop para filtrar os Filmes
    const filmesFiltro = filmes.filter(function (filme){

            // Se a categoria buscada for === a do filme atual retorne o Filme
            if (filtroCategoria === filme.categoria) {
                return filme
            }
    })

    listarFilmes(filmesFiltro)
}

const secaoCategorias = document.querySelector(".secaoCategorias")
secaoCategorias.addEventListener('click' , function(event) {

    //Cancelar evento do link => previne do padrão
    event.preventDefault()

    // Onde foi clicado
    const catSelecionada = event.target.text
    
    //Verificação da escolha do usuário
    if (catSelecionada == "Geral") {
        listarFilmes(filmes)
    }
    else {
        filtrarFilme (catSelecionada)
    }
} )

   
    let btn = document.querySelector("button")
    
    btn.addEventListener('click' , function(filme) {

        let texto = document.querySelector("input")
        let nomeFilme = texto.value 
        let filmePes = filmes.find (filme => filme.nome === nomeFilme);

        if (typeof filmePes == "undefined"){
                listaFilme.innerHTML = `<li>
                <p>Filme não encontrado!</p>
                </li>`
        }
        else {
        listaFilme.innerHTML = `<li>
        <img src="${filmePes.url}" alt="${filmePes.nome}">
        <h2>${filmePes.nome}</h2>
        </li>`
        }
    

    })


  
