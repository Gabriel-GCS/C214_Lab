class Filme {
    constructor(nome, ano, produtora) {
      this.nome = nome;
      this.ano = ano;
      this.produtora = produtora;
    }
    getNome() {
      return this.nome;
    }
    getAno() {
      return this.ano;
    }
    getProdutora() {
      return this.produtora;
    }
  }
  
  const filme1 = new Filme("Homem-aranha", 2002, "Marvel");
  console.log(filme1.getNome());
  console.log(filme1.getAno());
  console.log(filme1.getProdutora());