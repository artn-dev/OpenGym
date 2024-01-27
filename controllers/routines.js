const routineListView = (req, res) => {
    //TODO: Coletar rotinas para exibição pelo modelo
    const routines = [
        { name: 'Agachamento', sets: 7,  reps: 13 },
        { name: 'Exerc 1', sets: 7,  reps: 13 },
        { name: 'Exerc 2', sets: 7,  reps: 13 },
        { name: 'Exerc 3', sets: 7,  reps: 13 },
    ];

    res.render('routines/list', {
        title: 'OpenGym | Minhas rotinas',
        routines: routines,
    });
}


const registerRoutine = (req, res) => {
    if (req.method === 'POST') {
        const { routineName, exercises } = req.body;

        // TODO: Validar formulário
        // TODO: Registrar rotina na base de dados

        res.sendStatus(201);
        return;
    }

    //TODO:Coletar grupos musculares pelo modelo
    const exercises = [
        'Exercício 1',
        'Exercício 2',
        'Exercício 3',
        'Exercício 4',
    ];

    res.render('routines/form', {
        title: 'OpenGym | Cadastrar rotina',
        exercises: exercises, 
    });
}


module.exports = {
    routineListView,
    registerRoutine
}