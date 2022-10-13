const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        placa: "TESTE-123",
        marca: "BMW",
        ano: "2000",
        rodas: 4
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem placa', () => {
    const result = Validation.create({
        marca: "BMW",
        ano: "2000",
        rodas: 4
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
