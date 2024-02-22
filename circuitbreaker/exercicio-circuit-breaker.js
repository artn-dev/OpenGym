import { Injectable } from '@nestjs/common';
import * as CircuitBreaker from 'opossum';
import { CadastroExercicio } from '../modelos/cadastro-exercicio';

@Injectable()
class ExercicioCircuitBreaker {
    circuitBreaker;

    constructor(cadastroExercicio) {
        this.circuitBreaker = new CircuitBreaker(this.cadastroExercicio.cadastrarExercicio, {
            timeout: 3000,
            errorThresholdPercentage: 50,
            resetTimeout: 20000,
        });
    }

    async cadastrarExercicio(name, group, description, gifPath) {
        try {
            return await this.circuitBreaker.fire(name, group, description, gifPath);
        } catch (error) {
            return { status: 'Unavailable due to service issues' };
        }
    }
}

module.exports = {
    ExercicioCircuitBreaker
}