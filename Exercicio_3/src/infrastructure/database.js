const mongoose = require('mongoose');

const uri = `mongodb+srv://gabrielgcs:12345@cluster0.fgofza1.mongodb.net/test
`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const FilmeSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome_filme: {
        type: String,
        unique: true,
    },
    produtora: String,
    ano: String,
    ator_principal: String
});

const FilmeModel = mongoose.model('FilmeModel', FilmeSchema);

module.exports = {
    FilmeModel,
};