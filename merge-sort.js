let comparacoes = 0, divisoes = 0, juncoes = 0
function mergeSort(vetor) {


    function mesclarVetores(vetEsq, vetDir) {
        let vetRes = [], posEsq = 0, posDir = 0, sobra


        while(posEsq < vetEsq.length && posDir < vetDir.length) {
            if(vetEsq[posEsq] < vetDir[posDir]) {
                vetRes.push(vetEsq[posEsq])
                posEsq++
            }
            else { // vetDir[posDir] < vetEsq[posEsq]
                vetRes.push(vetDir[posDir])
                posDir++
            }
            comparacoes++
        }
        
        // Trazer para o vetRes a sobra do vetor que NÃO chegou ao final
        if(posEsq < posDir) sobra = vetEsq.slice(posEsq) // Sobra à esquerda
        else sobra = vetDir.slice(posDir) // Sobra à direita
        
        //console.log({posEsq, posDir, sobra})


        return vetRes.concat(sobra)
    }


    if(vetor.length > 1) {
        let meio = Math.floor(vetor.length / 2)
        let vetEsq = vetor.slice(0, meio)
        let vetDir = vetor.slice(meio) // Do meio ao fim
        divisoes++
        //console.log('ANTES:', {vetor, vetEsq, vetDir})
        vetEsq = mergeSort(vetEsq)
        vetDir = mergeSort(vetDir)
        let vetFinal = mesclarVetores(vetEsq, vetDir)
        juncoes++
        //console.log('DEPOIS:', {vetFinal, vetEsq, vetDir})
        return vetFinal
    }
    return vetor
}


//console.log(mergeSort([7, 1, 4, 0, 3, 9, 5, 8, 6, 2]))


const nomes = require('./dados/100-mil-nomes')
console.time('Teste nomes')
console.log(mergeSort(nomes))
console.timeEnd('Teste nomes')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('Memória usada (MB): ', memoria)
console.log({comparacoes, divisoes, juncoes})
