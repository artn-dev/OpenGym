import { Injectable } from '@nestjs/common';
import * as CircuitBreaker from 'opossum';

@Injectable()
class CadastrarExercicioCircuitBreaker {
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

@Injectable()
class GetExercicioCircuitBreaker {
    circuitBreaker;

    constructor(cadastroExercicio) {
        this.circuitBreaker = new CircuitBreaker(this.cadastroExercicio.getExercicios, {
            timeout: 3000,
            errorThresholdPercentage: 50,
            resetTimeout: 20000,
        });
    }

    async getExercicios() {
        try {
            return await this.circuitBreaker.fire();
        } catch (error) {
            return { status: 'Unavailable due to service issues' };
        }
    }
}

@Injectable()
class ExcluirExercicioCircuitBreaker {
    circuitBreaker;

    constructor(cadastroExercicio) {
        this.circuitBreaker = new CircuitBreaker(this.cadastroExercicio.excluir, {
            timeout: 3000,
            errorThresholdPercentage: 50,
            resetTimeout: 20000,
        });
    }

    async excluirExercicio(id) {
        try {
            return await this.circuitBreaker.fire(id);
        } catch (error) {
            return { status: 'Unavailable due to service issues' };
        }
    }
}

module.exports = {
    CadastrarExercicioCircuitBreaker,
    GetExercicioCircuitBreaker,
    ExcluirExercicioCircuitBreaker,
}
