const { usuarios, perfis } = require('../data/db');

module.exports = {
    ola() {
        return 'Bom dia'
    },
    horaAtual() {
        return new Date
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'André',
            email: 'agusmao720919@gmail.com',
            idade: 47,
            salario_real: 8000,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: 'Notebook Lenovo',
            preco: 3200,
            desconto: 0.5
        }
    },
    numeroMegaSena() {
        return Array(6)
            .fill(0)
            .map(n => parseInt(Math.random() * 60 + 1))
            .sort((a, b) => a - b);
    },
    usuarios() {
        return usuarios;
    },
    usuario(_, { id }) {
        const selecionados = usuarios.filter(u => u.id === id);

        return selecionados ? selecionados[0] : null;
    },
    perfis() {
        return perfis;
    },
    perfil(_, { id }) {
        const selecionados = perfis.filter(u => u.id === id);

        return selecionados ? selecionados[0] : null;
    }
}