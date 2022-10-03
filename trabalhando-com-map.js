/*
Resumo
O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map

*/


/*
Exemplo 1
 Pódio (de brincadeirinha) de mundial de CS GO 
*/
let vencedores = [
    {
        nome : "MIBR",
        pais : "Brasil"
    },
    {
        nome : "Astralis ",
        pais : "Dinamarca"
    },
    {
        nome : "G2 Esports",
        pais : "Espanha"
    }
 ];
 
 let podioPorPais = vencedores.map(function(item, indice){
    return item.pais;
 });
 
 console.log(podioPorPais);
 document.write(podioPorPais); // Comandinho novo pra vocês

/* Exemplo 2 
 Pódio (de brincadeirinha) de mundial de CS GO  agora mandando pro HTML
*/
{
    let vencedores = [
        {
            nome : "MIBR",
            pais : "Brasil"
        },
        {
            nome : "Astralis ",
            pais : "Dinamarca"
        },
        {
            nome : "G2 Esports",
            pais : "Espanha"
        }
     ];

    let podioPorPais = vencedores.map(function (item, indice) {
        return `<tr>
                <td>${indice + 1}</td>
                <td>${item.nome}</td>
                <td>${item.pais}</td>
            </tr>`;
    });

    document.querySelector("#tbPodio tbody").innerHTML = podioPorPais.join("");
}

/* Exemplo 3 
    Problema: Fazer um reajuste automático de preços em um objeto que recebemos.
    Alterando um objeto e gerando um novo array 
*/
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

    let produtosComReajuste = produtos.map(function (item) {
        return {
            nome: item.nome,
            preco: item.preco * 1.15
        }
    });

    produtosComReajuste.forEach(function (item) {
        console.log(`${item.nome.padEnd(30)} - ${item.preco.toLocaleString("pt-BR",
            { style: "currency", currency: "BRL" })}`);
    });
}


/* 
    Foreach e map 
    O map assim como o forEach percorre um objeto, mas é utilizado exclusivamente quando desejamos obter um array como resultado.
    O forEach é mais utilizado quando você precisa trabalhar algo específico dos itens do objeto. 
    O map tem como objetivo obter um novo objeto do objeto percorrido. 

    Fonte: Entendimento do professor com base em diversas obras literárias, vídeos e experiências. 

    Informação chave:
    O map() ECMA-262 na sua 5ª edição, o que significa que ele pode não estar presente em todas as implementações desse padrão.
*/