let livros = [];
const endPointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivrosDaAPI();


async function getBuscarLivrosDaAPI(){
    const resposta = await fetch(endPointDaAPI);
    livros = await resposta.json();
    const livrosComDesconto = aplicarDesconto(livros);
    exibirLivros(livrosComDesconto);
}

