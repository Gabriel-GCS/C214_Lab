const { CarroModel } = require('../src/infrastructure/database');
const CarroRepository = require('../src/application/carro_service');

describe('create', () => {
    it('Carro Valido', async () => {
        CarroModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 3,
                placa: 'ABC1234',
                marca: "Fiat",
                ano: "2010",
                rodas: 4
            }),
        }));

        expect(await CarroRepository.create({
            id: 3,
            placa: 'ABC1234',
            marca: "Fiat",
            ano: "2010",
            rodas: 4
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                placa: expect.any(String),
                marca: expect.any(String),
                ano: expect.any(String),
                rodas: expect.any(Number),
            }),
        );
    });
});