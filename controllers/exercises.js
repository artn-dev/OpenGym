const exerciseListView = (req, res) => {
    //TODO: Coletar exercícios para exibição pelo modelo
    const exercises = [
        { name: 'Agachamento', sets: 7,  reps: 13 },
        { name: 'Exerc 1', sets: 7,  reps: 13 },
        { name: 'Exerc 2', sets: 7,  reps: 13 },
        { name: 'Exerc 3', sets: 7,  reps: 13 },
    ];

    res.render('exercises/list', {
        title: 'OpenGym | Meus exercícios',
        exercises: exercises,
    });
}


const registerExercise = (req, res) => {
    if (req.method === 'POST') {
        // TODO: Validar formulário
        // TODO: Registrar exercício na base de dados
        console.log(req.body)
        console.log(req.file);

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


module.exports = {
    exerciseListView,
    registerExercise
}