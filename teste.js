// declaração de vetor
let vetor1 = [] //forma moderna
let vetor1 = Array() //forma tradicional
//declarando vetores já com valores
let vetor3 = ['azul','vermelho','verde'] //moderno
let vetor4 = Array(2,3,5,7)
//como adicionar novos valores a um vetor
//forma 1: push()
vetor1.push('laranja')
vetor1.push('melancia')
vetor1.push('pera')
//forma 2: unshift()
vetor1.unshift('jabuticaba')
vetor1.unshift('acerola')
//forma 3: splice
//1º parâmetro: posição de inserção
//2º parâmetro: quantos elementos serão apagados
//3º parâmetro: item a ser inserido
vetor1.splice(3, 0, 'abacaxi')
vetor1.splice(2, 0, "uva")
vetor1.splice(4, 1, 'maça')
console.log(vetor1)