const CircuitBreaker = require('opossum');
const CadastroExercicio =  require('./cadastro');

class CadastrarExercicioCircuitBreaker {
    constructor() {
        this.circuitBreaker = new CircuitBreaker(
            CadastroExercicio.cadastrarExercicio, {
                timeout: 3000,
                errorThresholdPercentage: 50,
                resetTimeout: 20000,
            }
        );
    }

    async cadastrarExercicio(name, group, description, gifPath) {
        try {
            return await this.circuitBreaker.fire(name, group, description, gifPath);
        } catch (error) {
            console.log(error)
            return { status: 'Unavailable due to service issues' };
        }
    }
}

class GetExercicioCircuitBreaker {
    circuitBreaker;

    constructor() {
        this.circuitBreaker = new CircuitBreaker(
            CadastroExercicio.getExercicios, {
                timeout: 3000,
                errorThresholdPercentage: 50,
                resetTimeout: 20000,
            }
        );
    }

    async getExercicios() {
        try {
            return await this.circuitBreaker.fire();
        } catch (error) {
            console.log(error)
            return { status: 'Unavailable due to service issues' };
        }
    }
}

class ExcluirExercicioCircuitBreaker {
    circuitBreaker;

    constructor() {
        this.circuitBreaker = new CircuitBreaker(
            CadastroExercicio.excluir, {
                timeout: 3000,
                errorThresholdPercentage: 50,
                resetTimeout: 20000,
            }
        );
    }

    async excluirExercicio(id) {
        try {
            return await this.circuitBreaker.fire(id);
        } catch (error) {
            console.log(error)
            return { status: 'Unavailable due to service issues' };
        }
    }
}

class GetExercicioInfoBatchCircuitBreaker {
    circuitBreaker;

    constructor() {
        this.circuitBreaker = new CircuitBreaker(
            CadastroExercicio.getInfoBatch, {
                timeout: 3000,
                errorThresholdPercentage: 50,
                resetTimeout: 20000,
            }
        );
    }

    async getInfoBatch(ids) {
        try {
            return await this.circuitBreaker.fire(ids);
        } catch (error) {
            console.log(error)
            return { status: 'Unavailable due to service issues' };
        }
    }
}

module.exports = {
    CadastrarExercicioCircuitBreaker,
    GetExercicioCircuitBreaker,
    ExcluirExercicioCircuitBreaker,
    GetExercicioInfoBatchCircuitBreaker,
}
