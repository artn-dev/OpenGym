/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('rotinas_exercicios', function(table) {
        table.integer('rotina_id').unsigned();
        table.integer('exercicio_id').unsigned();
        table.foreign('rotina_id').references('rotinas.id');
        table.foreign('exercicio_id').references('exercicios.id');
        table.integer('series').unsigned();
        table.integer('repeticoes').unsigned();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
      .dropTable('rotinas_exercicios');
};
