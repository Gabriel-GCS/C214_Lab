const validate = require('validate.js');
const CalculaConstraint = require('./validate');

const Calculadora = {
    soma(n1,n2) {
        const validateN1 = validate({ n1 }, CalculaConstraint.calculaConstraint);
        const validateN2 = validate({ n2 }, CalculaConstraint.calculaConstraint);             
        if(validateN2 || validateN1 !== undefined){
            return 'Error';
        }
        let soma = n1 + n2;
        return (`A soma de ${n1} e ${n2} é: ${soma}`);
    },

    subtracao(n1,n2) {
        const validateN1 = validate({ n1 }, CalculaConstraint.calculaConstraint);
        const validateN2 = validate({ n2 }, CalculaConstraint.calculaConstraint);             
        if(validateN2 || validateN1 !== undefined){
            return 'Error';
        }
        let sub = n1 - n2;
        return (`A subtração de ${n1} e ${n2} é: ${sub}`);
    },

    multiplicacao(n1,n2) {
        const validateN1 = validate({ n1 }, CalculaConstraint.calculaConstraint);
        const validateN2 = validate({ n2 }, CalculaConstraint.calculaConstraint);             
        if(validateN2 || validateN1 !== undefined){
            return 'Error';
        }
        let mult = n1 * n2;
        return (`A multiplicação de ${n1} e ${n2} é: ${mult}`);
    },

    divisao(n1,n2) {
        const validateN1 = validate({ n1 }, CalculaConstraint.calculaConstraint);
        const validateN2 = validate({ n2 }, CalculaConstraint.calculaConstraint);             
        if(validateN2 || validateN1 !== undefined){
            return 'Error';
        }
        let divisao = n1 / n2;
        return (`A divisao de ${n1} e ${n2} é: ${divisao}`);
    },

    expoente(n1,n2) {
        const validateN1 = validate({ n1 }, CalculaConstraint.calculaConstraint);
        const validateN2 = validate({ n2 }, CalculaConstraint.calculaConstraint);             
        if(validateN2 || validateN1 !== undefined){
            return 'Error';
        }
        let exp = n1**n2;
        return (`${n1} elevado a ${n2} é: ${exp}`);
    },

}

module.exports = Calculadora;