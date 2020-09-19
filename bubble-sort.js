function bubbleSort(vetor){
    let trocas //contabilidade de trocas
    let passadas = 0, comparacoes = 0, totalTrocas = 0
    do {
        passadas++
        trocas = 0

        //percurso do vetor do início até a PENULTIMA posição (lenght - 2)
        for(let i = 0; i <= vetor.length - 2; i ++){
            comparacoes++
            if(vetor[i]> vetor [i + 1]) {
                //fazer a troca entre os elementos
                [vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]
                trocas++
            }
        }
       

        totalTrocas += totalTrocas

    } while (trocas > 0)

console.log({passadas, comparacoes, totalTrocas})
}

/*let nums = [58, 16, 33, 82, 4, 47, 25, 71, 96, 60, 41, 89]

console.time('Teste 1')
bubbleSort(nums)
console.timeEnd('Teste 1')

console.log(nums)
*/
/*const empresas = require('./Dados/15-mil-empresas')
console.time('Teste empresas')
bubbleSort(empresas)
console.timeEnd('Teste empresas')


console.log(empresas)
*/

const nomes = require('./Dados/100-mil-nomes')


console.time('Teste nomes')
bubbleSort(nomes)
console.timeEnd('Teste nomes')
console.log(nomes)


//let a = 12, b = 4

//let aux = a
//a = b
//b = aux
