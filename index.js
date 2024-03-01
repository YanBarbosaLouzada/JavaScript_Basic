let idade = 15
const cpf = 123
const nome = 'clara'
var tenis = "allstar" 

let soma = idade + 2
let divisao = idade / 5
let multplicacao = idade * 2
let subtracao = idade - 5


console.log('A soma da minha idade e',soma,'e divasao e ', divisao)
// se a soma da sua idade for igual a 16
if(soma == 16){
    console.log('Esta certo')
}else{
    console.log('Esta errado')
}

let i = 1

while (i <= 5) {
    console.log('i',i)
    i = i + 1 
}

for ( let j = 1; j<= 5; j=j+1){
    console.log('j',j)
}

listadecomida = ['pao','ovo','queijo']

console.log(listadecomida)

function adicao(primeironumero,segundonumero){
    return primeironumero + segundonumero
}


let resultado = adicao(1,2)
console.log(resultado)