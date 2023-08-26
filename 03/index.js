const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        },
    ]
}
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
carrinho.imprimirResumo = function () {
    const totalDeItens = carrinho.calcularTotalDeItens(carrinho)
    const TotalAPagar = carrinho.TotalAPagar(carrinho)

    console.log(`Cliente: ${this.nomeDoCliente}`)
    console.log(`Total de itens: ${totalDeItens}`)
    console.log(`Total a pagar: R$${TotalAPagar}`)
}
carrinho.addProduto = function addProdutoAoCarrinho(produto) {
    let produtoIgual = false
    let j = 0 //variável criada para contar em qual índice do array a quantidade será somada
    for (i = 0; i < carrinho.produtos.length; i++) {
        if (carrinho.produtos[i].id == produto.id) {
            produtoIgual = true
            break
        } j++
    }
    if (produtoIgual) {
        carrinho.produtos[j].qtd += produto.qtd
    } else {
        carrinho.produtos.push(produto)
    }
}
function imprimirDetalhes(carrinho) {
    console.log(`Cliente: ${carrinho.nomeDoCliente}`)
    console.log("")
    for (i = 0; i < carrinho.produtos.length; i++) {
        console.log(`Item ${carrinho.produtos[i].id} - ${carrinho.produtos[i].nome} - ${carrinho.produtos[i].qtd} und - R$${((carrinho.produtos[i].precoUnit * carrinho.produtos[i].qtd) / 100).toFixed(2)}`)
    }
    console.log("")
    console.log(`Total de itens: ${carrinho.calcularTotalDeItens(carrinho)} itens`)
    console.log(`Total a pagar: ${carrinho.TotalAPagar(carrinho)} itens`)
}
carrinho.calcularTotalDeItens = function () {
    let totalDeItens = 0
    for (i = 0; i < this.produtos.length; i++) {
        totalDeItens += this.produtos[i].qtd
    } return totalDeItens
}
carrinho.TotalAPagar = function () {
    let precoTotal = 0
    let precoPorProduto = 0
    let totalDeItens = 0

    for (i = 0; i < this.produtos.length; i++) {
        precoPorProduto = this.produtos[i].precoUnit * this.produtos[i].qtd
        precoTotal += precoPorProduto
    } return ((precoTotal) / 100).toFixed(2)
}
carrinho.desconto = function () {
    let menor = Infinity
    let i = this.produtos[0]
    let desconto4Pecas = 0
    let desconto10 = 0
    totalDeItens = this.calcularTotalDeItens()
    totalAPagar = this.TotalAPagar()
    if (totalDeItens >= 4) {
        for (i=0; i<this.produtos.length;i++) {
            if (menor > this.produtos[i].precoUnit) {
                menor = this.produtos[i].precoUnit
            }
        }
        desconto4Pecas = totalAPagar - menor
    } 
    desconto10 = 0.1 * totalAPagar
    if(desconto4Pecas>desconto10){
        console.log(`Desconto de: R$${desconto4Pecas}`)
    } else{
        console.log(`Desconto de: R$${desconto10}`)
    }
}


carrinho.addProduto(novaBermuda)
carrinho.addProduto(novoTenis)
console.log("---------")//adicionado para separar e a vizualização de cada função ficar melhor
carrinho.imprimirResumo(carrinho)
console.log("---------")
imprimirDetalhes(carrinho)
console.log("---------")
carrinho.desconto()
