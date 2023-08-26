let carro = {
    ligado: false,
    velocidade: 0,
}

carro.ligar = function ligar() {
    if (carro.ligado) {
        console.log("Esse carro já está ligado")
    } else {
        carro.ligado = true
        console.log(`Carro ${carro.ligado ? "ligado" : "desligado} "}.velocidade: ${carro.velocidade} `)
    }
}


carro.desligar = function desligar() {
    if (!carro.ligado) {
        console.log("Esse carro já está desligado")
    } else {
        carro.ligado = false
        carro.velocidade = 0
        console.log(`Carro ${carro.ligado ? "ligado" : "desligado"}.velocidade: ${carro.velocidade} `)
    }
}


carro.acelerar = function acelerar() {
    if (!carro.ligado) {
        console.log("não é possível acelerar um carro desligado")
    } else {
        carro.velocidade += 10
        console.log(`Carro ${carro.ligado ? "ligado" : "desligado} "}.velocidade: ${carro.velocidade} `)
    }
}

carro.desacelerar = function desacelerar() {
    if (!carro.ligado) {
        console.log("Não é possível desacelerar um carro desligado")
    } else {
        carro.velocidade -= 10
        console.log(`Carro ${carro.ligado ? "ligado" : "desligado} "}.velocidade: ${carro.velocidade} `)
    }
}


carro.desligar()
carro.ligar()
carro.ligar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desligar()
carro.acelerar()
carro.desacelerar()