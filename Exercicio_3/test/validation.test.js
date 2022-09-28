const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Valid case', () => {
    const result = Validation.create({
        nome_filme: "Spider-Man",
        produtora: "Marvel",
        ano: "17/05/2002",
        ator_principal: "Tobey Maguire"

    });
    expect(result).toEqual(undefined);
});

it('Caso Invalido - Sem o ano de lancamento', () => {
    const result = Validation.create({
        nome_filme: "Spider-Man",
        produtora: "Marvel",
        ator_principal: "Tobey Maguire"
    });
    expect(result.title).toEqual(Constants.ErrorValidation.title);
});

it('Caso Invalido - Sem o parametro nome do filme', () => {
    const result = Validation.create({
        produtora: "Marvel",
        ano: "17/05/2002",
        ator_principal: "Tobey Maguire"
    });
    expect(result.launchDate).toEqual(Constants.ErrorValidation.launchDate);
});

it('Caso Invalido - Sem o parametro Ator principal', () => {
    const result = Validation.create({
        nome_filme: "Spider-Man",
        produtora: "Marvel",
        ano: "17/05/2002",
    });
    expect(result.mainActor).toEqual(Constants.ErrorValidation.mainActor);
});

it('Caso Invalido - Sem o parametro da produtora', () => {
    const result = Validation.create({
        nome_filme: "Spider-Man",
        ano: "17/05/2002",
        ator_principal: "Tobey Maguire"
    });
    expect(result.movieProducer).toEqual(Constants.ErrorValidation.movieProducer);
});
