//o inicio e o fim precisam ser informados
function buscaBinaria(lista, valorBusca,fnComp, inicio, fim) {
     
    If(fim >= inicio) {
        // Math.floor() tira as casas decimais - Math(M maiusculo)
        let meio = Math.floor((fim + inicio) / 2)
    
        //chamar a função externa de comparação para
        //direcionar os proximos passos
        let res = fnComp(lista[meio], valorBusca)
        // condição de saída: não chama recursivamente a função
        if(lista[meio] === 0) {//Achou
            comp++
            return meio
        }
            else if(res < 0){
                 // Trazendo o indicador de fim para uma posição
                // antes do meio, assim descartando todos os valores
                // que são maiores que o valor da posição média
                comp += 2
                 fim = meio - 1
                return buscaBinaria(lista, valorBusca,fnComp, inicio, meio - 1)
            }
            else { // res > 0]
                comp += 2
                inicio = meio + 1
                return buscaBinaria(lista, valorBusca,fnComp, meio + 1, fim)
            }
    
    // condição de saída: não chama recursivamente a função
    return - 1  // o valor não foi encontrado
    }
    let nums = [4, 16, 22, 29, 35, 44, 52, 58, 66, 71, 80, 88, 94]

    console.log(buscaBinaria(nums, 66, (elPos, busca) => {
        if(busca === elPos) return 0
        else if (busca < elPos) return - 1
        else return 1
    }, 0 , 12))

    // Para não executar mais daqui pra baixo
    ProcessingInstruction.exit(0)

const listaNomes = require('./Dados/lista-nomes')
console.time('FAUSTO')
console.log(buscaBinaria(listaNomes, 'FAUSTO',(obj, busca) => {
    if(obj.first_name === busca) return 0
    else if (busca < obj.first_name) return -1
    else 1
}))

console.timeEnd('FAUSTO')
console.log('comparações: comp')

console.log('.......................')

console.time('FAUSTO')
console.log(buscaBinaria(listaNomes, 'FAUSTO',(obj, busca) => {
    if(obj.first_name === busca) return 0
    else if (busca < obj.first_name) return -1
    else 1
}))