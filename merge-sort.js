function mesclarVetores(vetEsq, vetDir) {
    let vetRes = [], posEsq = 0, posDir = 0

    while(posEsq < vetEsq.length && posDir < verDir.length)
        if(vetEsq[posEsq] < vetDir[posDir]) {
            vetRes.push(vetEsq[PosEsq])
            posEsq++
        }
        else { // vetDir[posDir] < vetEsq[posEsq]
            vetRes.push(vetDir[posDir])
            posDir++    
        }
    }
    //trazer para o vetor de resultado a sobra do vetor que não chegou ao final (toda a sobra)

