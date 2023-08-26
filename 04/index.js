const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
}

contaBancaria.depositar = function (valor) {
    this.saldo += valor
    let valorHistorico = {
        tipo: "Depósito",
        valor: (valor / 100).toFixed(2)
    }
    this.historicos.push(valorHistorico)
    console.log(`Depósito de R$${((valor) / 100).toFixed(2)} realizado para o(a) cliente: ${this.nome}`)
}
contaBancaria.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente para o saque de: ${this.nome}`)
    } else {
        this.saldo -= valor
        let valorHistorico = {
            tipo: "saque",
            valor: (valor / 100).toFixed(2)
        }
        this.historicos.push(valorHistorico)
        console.log(`saque de R$${((valor) / 100).toFixed(2)} realizado para o(a) cliente: ${this.nome}`)
    }
}
contaBancaria.extrato = function () {
    console.log(`Extrato de ${this.nome} - Saldo: ${((this.saldo)/100).toFixed(2)}`)
    console.log(`Histórico:`)
    for (i = 0; i < this.historicos.length; i++) {
        console.log(`${this.historicos[i].tipo} de R$ ${this.historicos[i].valor}`)
    }
}


contaBancaria.depositar(10000)
contaBancaria.sacar(50000)
contaBancaria.sacar(5000)
contaBancaria.extrato()
