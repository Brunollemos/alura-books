const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    console.table(livrosFiltrados);
    exibirOsLivrosNaTela(livrosFiltrados);
    if (categoria == 'disponivel') {
        exibirValorTotalDeLivrosDisponiveis(livrosFiltrados);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria === categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDeLivrosDisponiveis(livros) {
    const valorTotal = livros.reduce((total, livro) => total + livro.preco, 0);
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por
    R$ <span id="valor">${valorTotal.toFixed(2)}</span></p></div>`;
}
