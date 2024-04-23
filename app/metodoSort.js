let btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco(){
   let livrosOrdenados = livros.sort((a, b) => b.preco - a.preco)
   exibirLivros(livrosOrdenados);
}