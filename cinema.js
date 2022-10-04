let fs = require('fs')
let filmes = require ("./database/catalogo.json");
let filmeStr = JSON.stringify(filmes);
//console.log(filmeStr);

/*const pokedex = require('./node_modules/pokedex/index')
console.log(pokedex[0].evoluirPokemon())*/

function buscarFilme(codigo, filmes){
    let filmesObj = filmes['filmes']    
    for (let i = 0; i < filmesObj.length;i++){        
        if (codigo === filmesObj[i]['codigo']){
            return filmesObj[i]
        }
    }
}

function alterarStatusEmCartaz(codigo, filmes, callback){ 
    const filmeBuscado = callback(codigo, filmes)  
    
    if (filmeBuscado){
        (filmeBuscado['emCartaz']) ? filmeBuscado['emCartaz'] = false : filmeBuscado['emCartaz'] = true                
    }  

    return filmeBuscado
}

function adicionarFilme(filmes, dadosFilme){
    let filmeExistente = false
    let newData = ""

    for (let i = 0; i < filmes['filmes'].length;i++){        
        if (dadosFilme['codigo'] === filmes['filmes'][i]['codigo']){
            filmeExistente = true           
        }
    }
    if (!filmeExistente){
        filmes['filmes'].push(dadosFilme)
        newData = JSON.stringify(filmes)
        fs.writeFile ('./database/catalogo.json', newData, err => {
            // Verificação de erros
            (err) ? console.log("Erro ao inserir os dados") : console.log ("Novos dados adicionados");        
        });
        return JSON.parse(newData)
    }else{
        console.log("Filme já existente")
        return filmes
    }
}

/*let listarFilmesDeLongaDuracao = filmes['filmes'].filter(function(filme){
    return filme['duracao'] > 2
})
console.log(listarFilmesDeLongaDuracao)*/

let listarTodosOsFilmes = filmes['filmes'].forEach(function(filme){
    console.log('Titulo: ' + filme['titulo'])
    console.log('Ano: ' + filme['ano'])
    console.log('Duração: ' + filme['duracao'])
    console.log('Atores:')
    filme['atores'].forEach(function(ator){
        console.log(ator)
    })
    console.log((filme['emCartaz']) ? 'Em Cartaz: Sim' : 'Em Cartaz: Não')
    console.log('-------------------------------------------------------')
})
console.log(listarTodosOsFilmes)
/*let matrix = {
    "codigo": 4, 
    "titulo": "Matrix", 
    "ano": 1999, 
    "duracao": 1, 
    "atores": ["Keanu Reves", "Lawrence Fishburne"], 
    "emCartaz": false
}
let filmesNovos = adicionarFilme(filmes, matrix)
console.log(filmesNovos)

let filmeBuscado = buscarFilme(1, filmes)
console.log(filmeBuscado)

let filmeAlterado = alterarStatusEmCartaz(1, filmes,buscarFilme)
console.log(filmeAlterado)*/

/* MAP
let numeros = [2,4,6]
let dobroNumeros = numeros.map(function(num){
    return num * 2;
})
console.log(dobroNumeros) */

/*FILTER 
let idades = [22, 8, 17, 14, 30, 45, 48]
let menores = idades.filter(function(idade){
    return idade < 18
})
console.log(menores)*/

/*REDUCE 
let numeros = [48,21,2]
let reduzir = numeros.reduce(function(acumulador, elemento){
    return acumulador - elemento
})
console.log(reduzir)*/

/*ForEach
const somar = (a,b) => a + b;
let numeros = [2,4,6,8,10]
numeros.forEach(function(num){
    let a = somar(num, 2)
    console.log(a)
})

const substrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

const calculadora = (a, b, callback) => callback(a,b)

let resultado = calculadora(1,2,somar)
console.log(resultado)*/