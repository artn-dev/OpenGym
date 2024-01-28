const routineListView = (req, res) => {
    //TODO: Coletar rotinas para exibição pelo modelo
    const routines = [
        { name: 'Rotina 1', sets: 7,  reps: 13, id: 1 },
        { name: 'Rotina 2', sets: 7,  reps: 13, id: 2 },
        { name: 'Rotina 3', sets: 7,  reps: 13, id: 3 },
        { name: 'Rotina 4', sets: 7,  reps: 13, id: 4 },
        { name: 'Rotina 5', sets: 7,  reps: 13, id: 5 },
        { name: 'Rotina 6', sets: 7,  reps: 13, id: 6 },
        { name: 'Rotina 7', sets: 7,  reps: 13, id: 7 },
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


const  deleteRoutine = (req, res) => {
    const routineId = req.params.id;

    // TODO: Excluir rotina da base de dados

    res.send({ next_page: '/rotinas' });
}


module.exports = {
    routineListView,
    registerRoutine,
    deleteRoutine
}