let id = 1;
function proximoId() {
    return id++;
}

const perfis = [
    {
        id: 1,
        nome: 'Comum'
    },
    {
        id: 2,
        nome: 'Administrador'
    }
];

const usuarios = [
    {
        id: proximoId(),
        nome: 'João Silva',
        email: 'jsilva@gmail.com',
        idade: 29,
        perfil_id: 1,
        status: 'ATIVO'
    },
    {
        id: proximoId(),
        nome: 'Rafael Júnior',
        email: 'rafajun@gmail.com',
        idade: 31,
        perfil_id: 2,
        status: 'INATIVO'
    },
    {
        id: proximoId(),
        nome: 'Daniela Smith',
        email: 'danismith@gmail.com',
        idade: 24,
        perfil_id: 1,
        status: 'ATIVO'
    }
];

module.exports = { proximoId, perfis, usuarios };