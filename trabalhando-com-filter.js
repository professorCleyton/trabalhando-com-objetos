{
let numeros = [10,20,35,100,5,8,9,50];

let filtroNumeros = numeros.filter(function (item) {
    return item > 10;
});
console.log('Objeto original',numeros)
console.log('Objeto Filtrado',filtroNumeros);
}

{
    let alunosGeral = [
        {
            nome:'Paulo',
            sexo:'Masculino',
            idade:18
        },
        {
            nome:'Lorena',
            sexo:'Feminino',
            idade:19
        },
        {
            nome:'Guilherme',
            sexo:'Masculino',
            idade:45
        },
        {
            nome:'Elisangela',
            sexo:'Feminino',
            idade:39
        }
    ];

    let alunas = alunosGeral.filter(function(item){
        return item.sexo == 'Feminino';
    });

    let alunos = alunosGeral.filter(function(item){
        return item.sexo == 'Masculino';
    })

    console.log('Todos os alunos:',alunosGeral);
    console.log('Alunas:',alunas);
    console.log('Alunos:',alunos);
}