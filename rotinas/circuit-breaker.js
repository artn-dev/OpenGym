const CircuitBreaker = require('opossum');
const CadastroRotina =  require('./cadastro');

class CadastrarRotinaCircuitBreaker {
    constructor() {
        this.circuitBreaker = new CircuitBreaker(
            CadastroRotina.cadastrarRotina, {
                timeout: 3000,
                errorThresholdPercentage: 50,
                resetTimeout: 20000,
            }
        );
    }

    async cadastrarRotina(nome, exerciciosInfo) {
        try {
            return await this.circuitBreaker.fire(nome, exerciciosInfo);
        } catch (error) {
            console.log(error)
            return { status: 'Unavailable due to service issues' };
        }
    }
}

class GetRotinaCircuitBreaker {
    circuitBreaker;

    constructor() {
        this.circuitBreaker = new CircuitBreaker(
            CadastroRotina.getRotinas, {
                timeout: 3000,
                errorThresholdPercentage: 50,
                resetTimeout: 20000,
            }
        );
    }

    async getRotinas() {
        try {
            return await this.circuitBreaker.fire();
        } catch (error) {
            console.log(error)
            return { status: 'Unavailable due to service issues' };
        }
    }
}

class ExcluirRotinaCircuitBreaker {
    circuitBreaker;

    constructor() {
        this.circuitBreaker = new CircuitBreaker(
            CadastroRotina.excluir, {
                timeout: 3000,
                errorThresholdPercentage: 50,
                resetTimeout: 20000,
            }
        );
    }

    async excluirRotina(id) {
        try {
            return await this.circuitBreaker.fire(id);
        } catch (error) {
            console.log(error)
            return { status: 'Unavailable due to service issues' };
        }
    }
}

class GetExerciciosPorRotinaCircuitBreaker {
    circuitBreaker;

    constructor() {
        this.circuitBreaker = new CircuitBreaker(
            CadastroRotina.getExerciciosPorRotina, {
                timeout: 3000,
                errorThresholdPercentage: 50,
                resetTimeout: 20000,
            }
        );
    }

    async getExerciciosPorRotina(rotinaId) {
        try {
            return await this.circuitBreaker.fire(rotinaId);
        } catch (error) {
            console.log(error)
            return { status: 'Unavailable due to service issues' };
        }
    }
}

module.exports = {
    CadastrarRotinaCircuitBreaker,
    GetRotinaCircuitBreaker,
    ExcluirRotinaCircuitBreaker,
    GetExerciciosPorRotinaCircuitBreaker,
}
