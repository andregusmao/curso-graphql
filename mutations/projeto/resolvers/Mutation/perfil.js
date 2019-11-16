const { perfis, proximoId } = require('../../data/db');

module.exports = {
    novoPerfil(_, { nome }) {
        const perfilExistente = perfis
            .some(p => p.nome === nome);

        if (perfilExistente) {
            throw new Error("Perfil já cadastrado");
        }

        const novo = {
            id: proximoId(),
            nome
        };

        perfis.push(novo);

        return novo;
    },
    alterarPerfil(_, { id, nome }) {
        const i = perfis.findIndex(p => p.id === id);

        if (i < 0) return null;

        const perfil = {
            id,
            nome
        };
        perfis.splice(i, 1, perfil);

        return perfil;
    },
    excluirPerfil(_, { id }) {
        const i = perfis.findIndex(p => p.id === id);

        if (i < 0) return null;

        const excluidos = perfis.splice(i, 1);

        return excluidos ? excluidos[0] : null;
    }
}