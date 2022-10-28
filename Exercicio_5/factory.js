
const filme = (nome, ano, produtora) => ({
    nome,
    ano,
    produtora,
    getDados: () => ({nome,ano,produtora}),
})

const filme1 = filme("Homem-aranha", 2002, "Marvel");
console.log(filme1.getDados());