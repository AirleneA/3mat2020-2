/* Adaptar o algotitmo de Bubble-sort para usar uma função de comparação 
Essa função deve receber dois argumentos:
1) O elemento da posição atual no loop for
2) O elemento da posição seguinte no loop for
E deve retornar:
1) true, caso o elemento da posição atual seja maior que o da posição seguinte; ou
2) false, caso contrário
*/


function bubbleSort(vetor, fnComp){
    let trocas //contabilidade de trocas
    let passadas = 0, comparacoes = 0, totalTrocas = 0
    do {
        passadas++
        trocas = 0

        //percurso do vetor do início até a PENULTIMA posição (lenght - 2)
        for(let i = 0; i <= vetor.length - 2; i ++) {
            comparacoes++
            //if(vetor[i]> vetor [i + 1]) {
              if(fnComp(vetor[i], vetor[i + 1])) {
                //fazer a troca entre os elementos usando DESESTRUTURAÇÃO (destructuring)
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
            }
        }
       
        totalTrocas += trocas

    } while(trocas > 0)

console.log({passadas, comparacoes, totalTrocas})
}

const candidatos = require ('./Dados/candidatos-2018')

/*
console.time('Ordem NM_CANDIDATO')
bubbleSort(candidatos, (a, b) => a.NM_CANDIDATO > b.NM_CANDIDATO)
console.timeEnd('ordem NM_CANDIDATO')
console.log(candidatos)
*/

console.time('Ordem NM_CANDIDATO')
bubbleSort(candidatos, (a, b) =>
a.NM_CANDIDATO.localeCompare(b.NM_CANDIDATO, 'pt-BR') > 0)
console.timeEnd('ordem NM_CANDIDATO')
console.log(candidatos)
