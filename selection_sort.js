   /*
    Parâmetros:
    1) O vetor onde será feita a busca
    2) A posição inicial do vetor a partir da qual será feita a busca
    Retorno:
    -- A POSIÇÃO do menor valor encontrado
*/
/*
    fnComp recebe como parâmetros dois valores a serem comparados entre si.
    Retorna:
        - true, caso o PRIMEIRO valor seja MAIOR que o segundo
        - false, caso contrário
*/
functionselectionSort(vetor, fnComp) {
    letpassadas = 0, comparacoes = 0, totalTrocas = 0
    functionencontrarMenor(vetor, inicio) {
    letres = inicio
// for interno
    for(leti = inicio + 1; i < vetor.length; i++) {
    comparacoes++
//if(vetor[i] < vetor[res]) res = i
    if(! fnComp(vetor[i], vetor[res])) res = i
        }
    returnres
    }
    // for externo -> vai da primeira à PENÚLTIMA posição
    for(leti = 0; i < vetor.length - 1; i++) {
        passadas++
    letposMenor = encontrarMenor(vetor, i + 1)
    comparacoes++
//if(vetor[i] > vetor[posMenor]) {
    if(fnComp(vetor[i], vetor[posMenor])) {
// Permuta de valores via desestruturação
            [vetor[i], vetor[posMenor]] = [vetor[posMenor], vetor[i]]
    totalTrocas++
        }
    }
console.log({passadas, comparacoes, totalTrocas})
}


constcandidatos = require('./dados/candidatos-2018')
console.time('Teste candidatos')
selectionSort(candidatos, (a, b) =>a.NM_CANDIDATO > b.NM_CANDIDATO)
console.timeEnd('Teste candidatos')
// Medindo a memória empregada
constmemoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log(candidatos)
console.log('Memória usada: (MB)', memoria)
