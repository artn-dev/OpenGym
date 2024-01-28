const exerciseListView = (req, res) => {
    //TODO: Coletar exercícios para exibição pelo modelo
    const exercises = [
        { name: 'Exerc 1', sets: 7,  reps: 13, id: 1 },
        { name: 'Exerc 2', sets: 7,  reps: 13, id: 2 },
        { name: 'Exerc 3', sets: 7,  reps: 13, id: 3 },
        { name: 'Exerc 4', sets: 7,  reps: 13, id: 4 },
        { name: 'Exerc 4', sets: 7,  reps: 13, id: 5 },
        { name: 'Exerc 4', sets: 7,  reps: 13, id: 6 },
    ];

    res.render('exercises/list', {
        title: 'OpenGym | Meus exercícios',
        exercises: exercises,
    });
}


const registerExercise = (req, res) => {
    if (req.method === 'POST') {
        const { exerciseName, trainedGroup, exerciseDescription } = req.body;
        const exampleGifData = req.file;

        // TODO: Validar formulário
        // TODO: Registrar exercício na base de dados

        res.redirect('/exercicios');
        return;
    }

    //TODO: Coletar grupos musculares pelo modelo
    const muscleGroups = [
        'Grupo 1',
        'Grupo 2',
        'Grupo 3',
        'Grupo 4',
    ];

    res.render('exercises/form', {
        title: 'OpenGym | Cadastrar exercício',
        muscleGroups: muscleGroups, 
    });
}


const  deleteExercise = (req, res) => {
    const routineId = req.params.id;

    // TODO: Excluir rotina da base de dados

    res.send({ next_page: '/exercicios' });
}


module.exports = {
    exerciseListView,
    registerExercise,
    deleteExercise
}