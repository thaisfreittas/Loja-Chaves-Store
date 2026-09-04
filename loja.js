let carrinho = [];
let total = 0;

const botoes = document.querySelectorAll(".adicionarCarrinho");
const listaCarrinho = document.getElementById("listaCarrinho");
const totalElemento = document.getElementById("total");
const botaoEnviar = document.getElementById("botaoEnviar");

botoes.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const produto = botao.closest(".blocoProduto");

        const nome = produto.querySelector(".nomeJaqueta").textContent;

        const texto = produto.querySelector("p:last-of-type").textContent;

        const valorTexto = texto.match(/R\$ ([\d,.]+)/);

        const valor = parseFloat(
            valorTexto[1]
                .replace(".", "")
                .replace(",", ".")
        );

        carrinho.push({
            nome: nome,
            valor: valor
        });

        total += valor;

        atualizarCarrinho();

        alert(nome + " foi adicionada ao carrinho!");
    });
});


function atualizarCarrinho() {

    listaCarrinho.innerHTML = "";

    carrinho.forEach(function(produto) {

        const item = document.createElement("li");

        item.textContent =
            produto.nome + " - R$ " +
            produto.valor.toFixed(2).replace(".", ",");

        listaCarrinho.appendChild(item);
    });

    totalElemento.textContent =
        "Total: R$ " +
        total.toFixed(2).replace(".", ",");
}


botaoEnviar.addEventListener("click", function() {

    if (carrinho.length === 0) {

        alert("Seu carrinho está vazio!");

    } else {

        alert(
            "Compra realizada com sucesso!\n\n" +
            "Total: R$ " +
            total.toFixed(2).replace(".", ",")
        );
    }
});