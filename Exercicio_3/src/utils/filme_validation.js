const create = {
    nome_filme: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    produtora: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ator_principal: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};


const get = {
    nome_filme: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    create,
    get,
};