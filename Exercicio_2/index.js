const Calculadora = require('./src/calculadora.js');

let soma = Calculadora.soma(2,5);
let subtracao = Calculadora.subtracao(2,5);
let multiplicacao = Calculadora.multiplicacao(2,5);
let divisao = Calculadora.divisao(2,5);
let expoente = Calculadora.expoente(2,5);

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(expoente);