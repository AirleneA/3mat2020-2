// Declarando um vetor em JS
let vetor1 = []         // Forma "moderna"
let vetor2 = Array()    // Forma "tradicional"

// Declarando vetores já com valores
let vetor3 = ['azul', 'vermelho', 'verde']      // "Moderno"
let vetor4 = Array(2, 3, 5, 7)

// Como adicionar novos valores a um vetor

// Forma 1: push() -> adiciona novos itens AO FINAL do vetor
vetor1.push('laranja')
vetor1.push('melancia')
vetor1.push('pera')

// Forma 2: unshift() -> adiciona novos itens NO INÍCIO do vetor
vetor1.unshift('jabuticaba')
vetor1.unshift('acerola')

// Forma 3: splice() -> insere item em POSIÇÃO ESPECÍFICA
// 1º parâmetro: posição de inserção
// 2º parâmetro: quantos elementos serão apagados
// 3º parâmetro: item a ser inserido
vetor1.splice(3, 0, 'abacaxi')
vetor1.splice(2, 0, 'uva')
vetor1.splice(4, 1, 'maçã')

console.log(vetor1)

// Remoção de itens de um vetor

// Forma 1: pop() -> remove item do FINAL do vetor
let removido = vetor1.pop()
let removido2 = vetor1.pop()

console.log(vetor1, removido, removido2)

// Forma 2: shift() -> remove um item do INÍCIO do vetor
let removido3 = vetor1.shift()
let removido4 = vetor1.shift()

console.log(vetor1, removido3, removido4)

// Acrescentando mais alguns elementos para exemplificar o splice()
vetor1.push('abacate')
vetor1.push('morango')
vetor1.push('jaca')
console.log(vetor1)

// Forma 3: splice() -> retira itens de uma POSIÇÃO ESPECÍFICA
// 1º parâmetro: a posição de remoção
// 2º parâmetro: a quantidade de elementos a remover (> 0)
// O splice() SEMPRE retornará um VETOR como resultado, mesmo que
// o número de elementos removidos esteja entre 0 e 1
let removido5 = vetor1.splice(3, 1)
console.log(vetor1, removido5)

console.log('------------------------------------------')

// Percursos de vetores

// Forma 1: for tradicional
// length -> a quantidade de elementos do vetor
for(let i = 0; i < vetor1.length; i++) {
    console.log(vetor1[i])
}

console.log('------------------------------------------')

// Forma 2: for..of
for(let fruta of vetor1) {
    console.log(fruta)
}

console.log('------------------------------------------')

// Forma 3: forEach
vetor1.forEach(function(valor) {
    console.log(valor)
})