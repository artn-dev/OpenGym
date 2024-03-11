/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('exercicios', function(table) {
          table.increments('id');
          table.string('nome', 255).notNullable();
          table.string('grupo_muscular', 255).notNullable();
          table.string('descricao', 1000).notNullable();
          table.string('caminho_gif', 255).nullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
      .dropTable('exercicios');
};
