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
    
    btn.addEventListener('click' , function() {

        let texto = document.querySelector("input")
        let nomeFilme = texto.value 
           filmes.filter (function(filme) {

            if (nomeFilme === filme.nome){
                listaFilme.innerHTML = `<li>
                <img src="${filme.url}" alt="${filme.nome}">
                <h2>${filme.nome}</h2></li>`
            }
           })

    })


  
