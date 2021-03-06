/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

 exports.seed = function(knex) {
  return knex('TBCLIENTE').truncate()
    .then(function () {
      return knex('TBCLIENTE').insert([
        {id: 1, codigo: '000', cnpjcpf: '000.000.000-00', nome: "Jorge", TipoCliente: "Pessoa_Fisica"},
        {id: 2, codigo: '001', cnpjcpf: '111.111.111-11', nome: "Carlos", TipoCliente: "Pessoa_Fisica"},
        {id: 3, codigo: '003', cnpjcpf: '222.222.222-22', nome: "Pablo", TipoCliente: "Pessoa_Fisica"},
      ]);
  });
};
