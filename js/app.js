let total = 0;

limpar();

function adicionar() {
    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById('quantidade').value;
    let listaCarrinho = document.getElementById('lista-produtos');
    let valorTotal = document.getElementById('valor-total');

    if (produto) {
        let valorUnitario = parseFloat(produto.split('R$')[1]);
        total += quantidade * valorUnitario;

        listaCarrinho.innerHTML += `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}X</span> Celular <span class="texto-azul">R$${produto}</span>
        </section>`;

        valorTotal.textContent = `R$ ${total.toFixed(2)}`;
    }
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0.00';
}
