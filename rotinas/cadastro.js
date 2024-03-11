const config = require('./knexfile');
const knex = require('knex')(config.staging);
const axios = require('axios');


class CadastroRotina {
    static async cadastrarRotina(nome, exerciciosInfo) {
        const novosIds = await knex.insert({ nome: nome }).into('rotinas').returning('id');
        const rotinaId = novosIds[0].id;

        for (let i = 0; i < exerciciosInfo.length; i++) {
            const { id, series } = exerciciosInfo[i];
            const repeticoes = 0;

            await knex.insert({
                rotina_id: rotinaId,
                exercicio_id: id,
                series: series,
                repeticoes: repeticoes,
              })
              .into('rotinas_exercicios');
            }
    }

    static async getRotinas() {
        const rotinas = await knex.select().from('rotinas');

        for (let i = 0; i < rotinas.length; i++) {
            const rotina = rotinas[i];

            let exerciciosRotina = await knex('rotinas_exercicios')
                .select('*')
                .where('rotina_id', rotina.id);
            const exerciciosIds = exerciciosRotina.map(e => e.exercicio_id);

            if (exerciciosIds.length === 0) {
                rotina.exercicios = [];

            } else {
                const res = await axios.get('http://exercicios:4000/batch/', {
                    params: {
                        exercicios: exerciciosIds
                    }
                });
                const exercicios = res.data;
    
                rotina.exercicios = exercicios;
            }
        }

        return rotinas;
    }

    static async excluir(id) {
        return await knex('rotinas').where('id', id).del();
    }
}


module.exports = CadastroRotina;
