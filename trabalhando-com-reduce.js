{
    let numeros = [5, 10, 15];

    let soma = numeros.reduce(function (inicial, atual) {
        return inicial += atual;
    });
    console.log('Total', soma);
}





{
    let produtos = [
        {
            nome: "Smartphone 5' Android",
            preco: 1200
        },
        {
            nome: "Notebook 4GB Windows 10",
            preco: 2100
        },
        {
            nome: "SmartTV 50' LED",
            preco: 8700
        }
    ];

    let valoresProduto = produtos.map(function (item) {
        return item.preco;
    });

    valorEmEstoque = valoresProduto.reduce(function (total, numero) {
        return total += numero;
    });
    console.log(valoresProduto);
    console.log('Valores do meu estoque', valorEmEstoque.toLocaleString("pt-BR",
        { style: "currency", currency: "BRL" }));
}


{
    let estadosSelecionados = [
        {
            uf: 'MG',
            habitantes: 1000000000
        },
        {
            uf:'SP',
            habitantes:995135782313.25
        },
        {
            uf:'AC',
            habitantes:200
        }
    ];

    let resultadoHabitantes = estadosSelecionados.reduce((total,atual)=>{
        return total + atual.habitantes;
    },0);

    document.write(resultadoHabitantes);
}