const Carro = require('../src/application/carro_service');
const Constants = require('../src/utils/constants');
const Utils = require('../src/utils/utils');
const CarroRepository = require('../src/port/carro_repository');

jest.mock('../src/port/carro_repository');

it('espera-se criar um carro', async () => {
    const data = {
        placa: "TESTE-123",
        marca: "BMW",
        ano: "2000",
        rodas: 4
    };

    const id = Utils.generateUuid();

    CarroRepository.create.mockResolvedValue({ ...data, id });

    const response = await Carro.create(data);

    expect(response).toEqual({ ...data, id });
});

it('espera-se nao criar um carro', async () => {
    const data = {
        marca: "BMW",
        ano: "2000",
    };

    const response = await Carro.create(data);

    expect(response.name).toEqual(Constants.ErrorValidation.name);
});

it('espera-se atualizar um carro', async () => {
    const data = {
        id: Utils.generateUuid(),
        placa: "TESTE-123",
        marca: "Fiat",
        ano: "2000",
        rodas: 4
    };

    CarroRepository.update.mockResolvedValue(data);

    const response = await Carro.update(data);

    expect(response).toEqual(data);
});

it('espera-se nao atualizar um carro', async () => {
    const data = {
        id: Utils.generateUuid(),
        marca: "Fiat",
        ano: "2000",
        rodas: 4
    };

    const response = await Carro.update(data);

    expect(response.name).toEqual(Constants.ErrorValidation.name);
});

it('espera-se buscar um carro pela placa', async () => {
    const data = {
        placa: "TESTE-123",
    };

    CarroRepository.getByPlaca.mockResolvedValue(data);

    const response = await Carro.listByPlaca(data);

    expect(response).toEqual(data);
});