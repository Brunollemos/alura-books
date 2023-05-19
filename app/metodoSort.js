const livrosOrdenados = document.getElementById('btnOrdenarPorPreco');
livrosOrdenados.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() { 
   let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
    console.table(livrosOrdenados);
}